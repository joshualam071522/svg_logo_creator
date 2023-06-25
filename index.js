
const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for your logo'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the color or hexadecimal number you woud like for your logo text'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please choose the shape for your logo',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter the color or hexadecimal number for the shape of your logo'
    },
];

//* example function to writefile in progress
async function createLogo () {
const inquire = await inquirer.prompt(questions);
const writeSVGFile = await fs.writeFile('./examples/log.svg', "hello world", (err) =>
err ? console.error(err) : console.log ('Success!')
)
}