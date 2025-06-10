//↠  3. Write a function called calculateTotal that takes price and quantity as parameters.
//Use a helper function named multiply that multiplies two numbers.

function calculateTotal(price, quantity) {
    return multiply (price, quantity);
}
function multiply(a, b) { 
    return a * b;
}
console.log(calculateTotal(10, 5)); // Returns 50