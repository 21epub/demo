const rollup = require('rollup')
const configFactory = require('./rollup.config')
// const fs = require('fs')
// const util = require('util')

const {
  ncp
} = require('ncp')

// const {
//   promisify
// } = util

// const promisifyReadDir = promisify(fs.readdir)

// const formatName = n => n.replace(/\.js/, '').replace('-', '_')

async function build(option) {
  const bundle = await rollup.rollup(option.input)
  await bundle.write(option.output)
}

(async () => {
  try {
    build(configFactory({
      input: './src/index.js',
      fileName: './demo.min.js'
    }))

    ncp('./types/', './', (err) => {
      if (err) {
        throw err
      }
    })
  } catch (e) {
    console.error(e) // eslint-disable-line no-console
  }
})()
