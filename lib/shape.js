class shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

class circle extends shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
}

class square extends shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
        return `<rect x="75" y="25" width="150" height="150" fill="${this.shapeColor}"/>
        <text x="150" y="115" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

class triangle extends shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
}

module.exports = {shape, square}