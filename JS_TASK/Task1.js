// Task1:
// Need to create JavaScript functions for a sum of numbers in the string (Example like “foo8bar8cat2tc2”)

function getSumFromString(str) {
    let sum = 0;

    for (let ch of str) {
        if (isNaN(ch)) continue;
        else {
            sum += parseInt(ch);
        }
    }

    return sum;
}
    
console.log(getSumFromString("foo8bar8cat2tc2")); // 20
console.log(getSumFromString("1this45that67")); // 23