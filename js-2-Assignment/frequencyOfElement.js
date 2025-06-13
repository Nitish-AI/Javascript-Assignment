/*
Find the frequency of elements in array.
I/P= ["hello", "world", "java", "hello", "java"]
O/P= {hello: 2, world :1, java:2}
*/
function frequencyOfElement(arr) {
    let frequency = {}; // an empty object to store the frequency of each element
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i]; 
        if (frequency[element]) {
            frequency[element] += 1; // If the element already exists, increment its count            
        } else {
            frequency[element] = 1; // If it doesn't exist, initialize it with a count of 1            
        }
    }
    return frequency; 
}

console.log(frequencyOfElement(["hello", "world", "java", "hello", "java"]));