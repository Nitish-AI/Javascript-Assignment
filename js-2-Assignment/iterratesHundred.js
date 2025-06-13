// Create a for loop that iterates up to 100 while outputting "Code" at multiples of 3, "Academy" at multiples of 5 and "CodeAcademy" at multiples of 3 and 5

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("CodeAcademy");
    } else if (i % 3 === 0) {
        console.log("Code");
    } else if (i % 5 === 0) {
        console.log("Academy");
    } else {
        console.log(i);
    }
}
