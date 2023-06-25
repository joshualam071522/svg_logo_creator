const {shape, square} = require('../lib/shape.js')

describe('shape', () => {
    // Test to verify that the logo class can be instantiated.
    describe('Instantiate', () => {
      it('should be an instance of the shape class', () => {
        
        const shape1 = new shape();
  
        expect(shape1).toBeInstanceOf(shape);
      });
    })
})

describe('square', () => {
  // Test to verify that the logo class can be instantiated.
  describe('Instantiate', () => {
    it('should render out svg text when passing in example parameters', () => {
      
      const square1 = new square('JTL', "blue", "red");

      expect(square1.render()).toBe(
        `<rect x="75" y="25" width="150" height="150" fill="red"/>
        <text x="150" y="115" font-size="50" text-anchor="middle" fill="blue">JTL</text>`
      );
    });
  })
})
