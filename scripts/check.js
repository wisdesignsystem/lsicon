#!/usr/bin/env node

import childProcess from "node:child_process";

const branchName = childProcess
  .execSync("git symbolic-ref --short HEAD")
  .toString()
  .trim();
const whitelist = ["main", "test"];

const isValid =
  whitelist.includes(branchName) ||
  /^(feat|fix|hotfix|doc|style|test|chore|release)\/[a-z0-9._-]+$/.test(
    branchName,
  );

if (!isValid) {
  console.info(
    `Invalid Branch Name: ${branchName}, Please name the branch according to the following rules.`,
  );
  console.info("example:");
  console.info("    feat/xxx, fix/xxx, ...");
  console.info();
  console.info("The available prefixes are as follows:");
  console.info();
  console.info("    feat:      A new feature");
  console.info("    fix:        A bug fix");
  console.info("    hotfix:     A bug hotfix");
  console.info("    doc:       Only change documentation");
  console.info("    style:     Only change style");
  console.info("    test:      Change test code");
  console.info("    chore:     Build, development or deploy");
  console.info("    release:   A release version");
  console.info();
  process.exit(1);
}
