// import using require

// declare class


// export class using module.exports

const Shape =require('./shape');

class Circle extends Shape {
    constructor() {
        super();
        console.log("Area of circle with color : " + this.color);
        return 3.14*5*5;
    }
}
module.exports = Circle;