// Task4:Write a JavaScript program that creates a class called University with properties for university
//  names and departments. Include methods to add a department, remove a department, and display all
//  departments. Create an instance of the University class and add and remove departments.

class University {
    // private fields of university class
    #name
    #departments

    constructor(name) {
        this.#name = name;
        this.#departments = [];
    }

    // getters 
    get name() {
        return this.#name;
    }

    get departments() {
        return this.#departments;
    }

    // methods to add, remove departments
    addDepartment(department) {
        this.#departments.push(department);
    }

    removeDepartment(department) {
        this.#departments = this.#departments.filter(dep => dep !== department);
    }
}

//  instance of University class
const university = new University("CHARUSAT");

// add departments
university.addDepartment("Computer Engineering");
university.addDepartment("Information Technology");
university.addDepartment("Electronics and Communication");

// display all departments
console.log(`university: ${university.name}`);
console.log("departments: ", university.departments);

// remove department
university.removeDepartment("Information Technology");

console.log("After removing department: ",university.departments);

