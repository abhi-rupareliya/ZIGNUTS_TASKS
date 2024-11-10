// Task2:
// Need to create a Javascript function for the sum of string (Example like "1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8,9, 10.9")

function getSumFromString(str) {
    // Split the string by comma and collect the string values in an array
    const arr = str.split(",");

    // Use reduce method to sum the values in the array by converting to float
    const sum = arr.reduce((acc, val) => acc + parseFloat(val), 0);

    return sum;
}

console.log(getSumFromString("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9")); // 57.3

console.log(getSumFromString("1.1,2.2,3.3,4.4,5.5")); // 16.5