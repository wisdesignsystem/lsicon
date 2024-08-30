import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { components } from '@figma-export/core'
import svgr from '@figma-export/output-components-as-svgr'
import svgo from '@figma-export/transform-svg-with-svgo'
import chalk from 'chalk'
import * as file from '@wisdesign/utils/file.js'
import * as shell from '@wisdesign/utils/shell.js'
import * as tool from '@wisdesign/utils/tool.js'
import prettier from '@prettier/sync'
import dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand'
import ora from 'ora'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const rootPath = path.resolve(__dirname, '..')
const outputPath = path.resolve(rootPath, './')
const metaPath = path.resolve(rootPath, './components/meta.js')

const envPaths = [path.resolve(rootPath, './.env.local'), path.resolve(rootPath, './.env')].filter(file.isExist)

// 支持环境变量的模版字符串语法
envPaths.forEach((envFile) => {
  dotenvExpand.expand(dotenv.config({ path: envFile }))
})

const defaultStyle = 'outline'
const outline = {
  type: 'style',
  name: defaultStyle,
  title: 'Outline',
  children: [],
}
const solid = {
  type: 'style',
  name: 'filled',
  title: 'Solid',
  children: [],
}
const styles = [outline, solid]
const styleWhitelist = styles.map((item) => item.name)

function isValidIconName(name) {
  return /^[a-zA-Z][a-zA-Z0-9-]*$/.test(name)
}

// 是一个正常组件
function isNormalComponent(name) {
  return isValidIconName(name)
}

// 是一个变量组件
function isVariantComponent(name) {
  return styleWhitelist.some((item) => name === `theme=${item}`)
}

function getName(name) {
  return name
    .split('-')
    .filter(Boolean)
    .map((item) => tool.toFirstUpperCase(item.trim()))
    .join(' ')
}

function format(content) {
  const config = prettier.resolveConfig()
  return prettier.format(content, { ...config, parser: 'babel' })
}

function getVariantComponentName(option) {
  const style = option.componentName.replace(/^theme=/, '')
  const component = option.pathToComponent.find((item) => item.type === 'COMPONENT_SET')
  return component.name
    .split('-')
    .concat(style === defaultStyle ? [] : style)
    .filter(Boolean)
    .map((item) => tool.toFirstUpperCase(item.trim()))
    .join('')
}

function getComponentName(option) {
  if (isVariantComponent(option.componentName)) {
    return getVariantComponentName(option)
  }

  return option.componentName
    .split('-')
    .filter(Boolean)
    .map((item) => tool.toFirstUpperCase(item.trim()))
    .join('')
}

function getComponentCategory(option) {
  const category = option.pathToComponent.find((item) => item.type === 'FRAME')
  return category ? category.name : 'common'
}

function getComponentStyle(componentName) {
  return styleWhitelist.find((item) => componentName.endsWith(tool.toFirstUpperCase(item))) || defaultStyle
}

const replaceCurrentColorPlugin = {
  name: 'replaceCurrentColor',
  description: 'Replace svg fill or stroke color by currentColor',
  fn: () => {
    return {
      element: {
        enter(node) {
          if (node.attributes.fill && node.attributes.fill !== 'none') {
            node.attributes.fill = 'currentColor'
          }

          if (node.attributes.stroke && node.attributes.stroke !== 'none') {
            node.attributes.stroke = 'currentColor'
          }

          if (!node.attributes.fill || node.attributes.fill === 'none') {
            delete node.attributes['stroke-linecap']
            delete node.attributes['stroke-linejoin']
            delete node.attributes['stroke-width']

            delete node.attributes.strokeLineCap
            delete node.attributes.strokeLineJoin
            delete node.attributes.strokeWidth
          }
        },
      },
    }
  },
}

async function icon(iconOption) {
  const spin = ora({})
  spin.start()

  const visited = {}
  await components({
    token: process.env.FIGMA_TOKEN,
    fileId: process.env.FIGMA_FILE_ID,
    onlyFromPages: [process.env.FIGMA_PAGE],
    filterComponent: (option) => {
      return isVariantComponent(option.name) || isNormalComponent(option.name)
    },
    transformers: [
      svgo({
        plugins: ['sortAttrs', replaceCurrentColorPlugin],
      }),
    ],
    outputters: [
      svgr({
        output: outputPath,
        getDirname: () => {
          return 'components'
        },
        getComponentName: (option) => {
          const componentName = getComponentName(option)
          const category = getComponentCategory(option)
          const suffix = getComponentStyle(componentName)

          const exportComponentName = `${componentName}Icon`

          const styleItem = styles.find((item) => item.name === suffix)
          let categoryItem = styleItem.children.find((item) => item.name === category)
          if (!categoryItem) {
            categoryItem = {
              type: 'category',
              name: category,
              title: getName(category),
              children: [],
            }
            styleItem.children.push(categoryItem)
          }

          if (!visited[componentName]) {
            categoryItem.children.push({
              type: 'component',
              title: componentName,
              name: exportComponentName,
            })
            visited[componentName] = true
          }

          return exportComponentName
        },
        getSvgrConfig: () => {
          return {
            icon: true,
            plugins: ['@svgr/plugin-jsx'],
          }
        },
      }),
    ],
    log: (message) => {
      spin.text = message
    },
  }).catch((error) => {
    spin.fail()
    throw error
  })

  spin.succeed('done')
}

function getComponentsByMeta(meta) {
  const components = []
  meta.forEach((style) => {
    style.children.forEach((category) => {
      category.children.forEach((component) => {
        components.push(component)
      })
    })
  })

  return components
}

async function main() {
  let oldMeta = []
  try {
    oldMeta = await import(metaPath).then((module) => module.default)
  } catch (e) {
    // no action
  }

  shell.execSync(`rm -rf ${path.resolve(rootPath, './components')}`)
  await icon()

  file.writeFile(
    metaPath,
    format(`
    export default ${JSON.stringify(styles)}  
  `),
  )

  const oldComponents = getComponentsByMeta(oldMeta)
  const oldComponentMap = oldComponents.reduce((result, component) => {
    result[component.name] = true
    return result
  }, {})

  const newComponents = getComponentsByMeta(styles)
  const newComponentMap = newComponents.reduce((result, component) => {
    result[component.name] = true
    return result
  }, {})

  const removeComponents = oldComponents.filter((component) => {
    return !newComponentMap[component.name]
  })
  const addComponents = newComponents.filter((component) => {
    return !oldComponentMap[component.name]
  })

  if (removeComponents.length) {
    console.info('')
    console.info(`Remove Icons(${chalk.red(removeComponents.length)}):`)
    console.info('')
    removeComponents.forEach((component) => {
      console.info(`${chalk.red('-')} ${component.name}`)
    })
  }

  if (addComponents.length) {
    console.info('')
    console.info(`Add Icons(${chalk.green(addComponents.length)}):`)
    console.info('')
    addComponents.forEach((component) => {
      console.info(`${chalk.green('+')} ${component.name}`)
    })
  }

  console.info(`Total ${newComponents.length} icons`)
  console.info('')
}

main()
