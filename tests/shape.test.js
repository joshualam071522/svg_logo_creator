const { Square, Circle, Triangle } = require('../lib/shape');

describe('Square', () => {
  test('should set the shape color for a square to red', () => {
    const square = new Square();
    square.setShapeColor('red');
    expect(square.render()).toEqual('<rect x="75" y="35" width="150" height="150" fill="red"/>');
  });
});

describe('Circle', () => {
  test('should set the shape color for a circle to blue', () => {
    const circle = new Circle();
    circle.setShapeColor('blue');
    expect(circle.render()).toEqual('<circle cx="150" cy="110" r="80" fill="blue" />');
  });
});

describe('Triangle', () => {
  test('should set the shape color for a triangle to green', () => {
    const triangle = new Triangle();
    triangle.setShapeColor('green');
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="green" />');
  });
});