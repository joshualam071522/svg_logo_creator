
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
const isColor = (strColor) => {
    const s = new Option().style;
    s.color = strColor;
    return s.color !=='';
}

isColor('red');
// inquirer.prompt(questions).then((data) => {
//     const logoText = data.text;
    
//     if (logoText.length > 3 || logoText.length == 0) {
//         console.log('please enter up to 3 characters for your logo');
//         return;
//     }
// })


//* this is the text string for svg file
//* <text x="150" y="115" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
// const writeSVGFile = await fs.writeFile('./examples/log.svg', "hello world", (err) =>
// err ? console.error(err) : console.log ('Success!')
// )