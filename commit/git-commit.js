const shell = require('shelljs');
const inquirer = require('inquirer');
const prompsConfig = require('./promps');

async function gitCommit() {
  const { type } = await inquirer.prompt(prompsConfig.ciType);
  const { msg } = await inquirer.prompt(prompsConfig.ciMsg);

  shell.exec(`git commit -m "${type}: ${msg}"`, () => {
    console.log(`\n提交脚本: git commit -m "${type}: ${msg}"`);
  });
}

gitCommit().then();
