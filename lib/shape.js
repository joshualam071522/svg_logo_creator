class Shape {
    constructor() {
    }
    setShapeColor(shapeColor) {
        this.shapeColor = shapeColor;
    }
}


class Square extends Shape {
    render() {
        return `<rect x="75" y="35" width="150" height="150" fill="${this.shapeColor}"/>`
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="110" r="80" fill="${this.shapeColor}" />`
    }
}

class Triangle extends Shape{
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
    }
}

module.exports = { Square, Circle, Triangle }