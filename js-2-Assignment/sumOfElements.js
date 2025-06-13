// Find the sum of all elements/numbers of a given array?
/*I/P= [1, 2, 5, 10, 20]
O/P= 38

1 point
*/

function sumOfElements(arr) {
    let sum = 0; 
    for (let i = 0; i < arr.length; i++) { 
        sum += arr[i]; // Add the current element to the sum
    }
    return sum; 
} 
console.log(sumOfElements([1, 2, 5, 10, 20])); 