
const inquirer = require('inquirer');
const fs = require('fs');
const { square } = require('./lib/shape');

class SVG {
    constructor() {
        this.shapeEl = '';
        this.textEl = '';
    }

    setText(textValue, textColor) {
        this.textEl = `<text x="100" y="100" fill="${textColor}" font-size="50" text-anchor="middle">${textValue}</text>`;
    }
    setShape(shape) {
        this.shapeEL = shape.render;
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`;
    }
}

const questions = [
    {
        type: 'input',
        name: 'textValue',
        message: 'Enter up to three characters for your logo',
        validate:  (value) => {
            if (value.length > 3) {
                return 'Please enter up to three characters';
            }
            if (value.length < 1) {
                return 'Please enter at least one character';
            }
            return true;
        }
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
