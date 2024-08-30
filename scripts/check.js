#!/usr/bin/env node
/* eslint-disable no-console */

import childProcess from 'node:child_process'

const branchName = childProcess.execSync('git symbolic-ref --short HEAD').toString().trim()
const whitelist = ['main', 'test']

const isValid =
  whitelist.includes(branchName) || /^(feat|fix|hotfix|doc|style|test|chore|release)\/[a-z0-9._-]+$/.test(branchName)

if (!isValid) {
  console.log(`Invalid Branch Name: ${branchName}, Please name the branch according to the following rules.`)
  console.log('example:')
  console.log('    feat/xxx, fix/xxx, ...')
  console.log()
  console.log('The available prefixes are as follows:')
  console.log()
  console.log('    feat:      A new feature')
  console.log('    fix:        A bug fix')
  console.log('    hotfix:     A bug hotfix')
  console.log('    doc:       Only change documentation')
  console.log('    style:     Only change style')
  console.log('    test:      Change test code')
  console.log('    chore:     Build, development or deploy')
  console.log('    release:   A release version')
  console.log()
  process.exit(1)
}
