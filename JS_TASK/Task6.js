// Task6:Write a program to find the factorial of a number using a recursive function

function factorial(n) {
    // base case
    if (n === 0) {
        return 1;
    } else {
        // recursive call
        return n * factorial(n - 1);
    }
}

console.log(`factorial of 5 is ${factorial(5)}`); // 120
console.log(`factorial of 7 is ${factorial(7)}`); // 5040
console.log(`factorial of 4 is ${factorial(4)}`); // 24

