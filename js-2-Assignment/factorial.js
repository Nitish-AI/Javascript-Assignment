// Using the arrow function, return and print the factorial number

const factorial = (n) => {
    if (n < 0) {
        return "Factorial is not defined for negative numbers";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n-1);// recursion method it will call itself until it reaches the n-1.
};
console.log(factorial(3)); 