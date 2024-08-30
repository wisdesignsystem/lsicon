import esbuild from 'rollup-plugin-esbuild'
import resolve from '@rollup/plugin-node-resolve'
import clean from 'rollup-plugin-cleaner'

const plugins = [
  clean({ targets: ['./dist'] }),
  resolve({ extensions: ['.js', '.jsx'] }),
  esbuild({ sourcemap: false }),
]
const external = /node_modules/

const config = [
  {
    input: 'components/index.js',
    output: [
      {
        file: 'dist/icons.esm.js',
        format: 'esm',
        sourcemap: false,
      },
    ],
    plugins,
    external,
  },
]

export default config
