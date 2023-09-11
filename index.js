
const inquirer = require('inquirer');
const fs = require('fs');
const { Square, Circle, Triangle } = require('./lib/shape');

class SVG {
    constructor() {
        this.shapeEl = '';
        this.textEl = '';
    }

    setText(textValue, textColor) {
        this.textEl = `<text x="150" y="120" fill="${textColor}" font-size="50" text-anchor="middle">${textValue}</text>`;
    }
    setShape(shape) {
        this.shapeEl = shape.render();
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
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter the color or hexadecimal number for the shape of your logo'
    },
];

const init = () => {
    inquirer.prompt(questions)
        .then(({textValue, textColor, shape, shapeColor }) => {
            const newLogo = new SVG();
            let shapeType;

            switch (shape) {
                case 'Circle':
                    shapeType = new Circle();
                    break;
                case 'Triangle':
                    shapeType = new Triangle();
                    break;
                case 'Square':
                    shapeType = new Square();
                    break;
            }
            shapeType.setShapeColor(shapeColor);
            newLogo.setText(textValue, textColor);
            console.log(shapeType);
            newLogo.setShape(shapeType);

            fs.writeFile('logo.svg', newLogo.render(), (err) => {
                if (err) throw err;
                console.log('The SVG file has been created!');
            });
        }
    )
};

init();