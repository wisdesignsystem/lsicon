#!/usr/bin/env node

/**
 * 用于在cli包中生成所有包的版本信息
 * packages/cli/versionInfo.json
 */

import { createRequire } from 'node:module'
import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const require = createRequire(import.meta.url)

function isExist(filePath) {
  try {
    return !!fs.statSync(filePath)
  } catch (error) {
    return false
  }
}

const packagePath = path.resolve(__dirname, '../packages')
const versionInfoFilePath = path.resolve(packagePath, 'cli/versionInfo.json')
const versionInfo = fs.readdirSync(packagePath).reduce((result, fileName) => {
  const packageFilePath = path.resolve(path.resolve(packagePath, fileName), 'package.json')
  if (!isExist(packageFilePath)) {
    return result
  }

  const pkg = require(packageFilePath)
  result[pkg.name] = pkg.version

  return result
}, {})

fs.writeFileSync(versionInfoFilePath, JSON.stringify(versionInfo))
