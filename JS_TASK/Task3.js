// Task3: Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area.
//  Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area
//  calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for
//  the 'Triangle' class.

class Shape {
    #area

    constructor() {
        this.area = 0;
    }

    getArea() {
        return this.area;
    }
}

class Circle extends Shape {
    // private fields
    #radius

    constructor(radius) {
        super();
        this.#radius = radius;
    }

    get radius() {
        return this.#radius;
    }

    getArea() {
        this.area = Math.PI * Math.pow(this.#radius, 2);
        return this.area;
    }
}

class Triangle extends Shape {
    // private fields
    #base
    #height

    constructor(base, height) {
        super();
        this.#base = base;
        this.#height = height;
    }

    get dimensions() {
        return {
            base: this.#base,
            height: this.#height
        };
    }

    getArea() {
        this.area = 0.5 * this.#base * this.#height;
        return this.area;
    }
}


const circle = new Circle(5);
console.log(`Area of Circle With radius ${circle.radius} is ${circle.getArea()}`);

const triangle = new Triangle(10, 5);
console.log(`Area of Triangle With base ${triangle.dimensions.base} and height ${triangle.dimensions.height} is ${triangle.getArea()}`);
