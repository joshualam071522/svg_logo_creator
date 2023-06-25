class shape {
    constructor(shapeColor) {
        this.shapeColor = shapeColor;
    }
}


class square extends shape {
    constructor(shapeColor) {
        super(shapeColor)
    }

    setColor(shapeColor) {
        return shapeColor;
    }

    render() {
        return `<rect x="75" y="25" width="150" height="150" fill="${this.shapeColor}"/>`
    }
}


module.exports = {shape, square}