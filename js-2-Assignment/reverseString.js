/* Given a string, reverse each word in the sentence.
I/P= Welcome to this Javascript 
O/P=emocleW ot siht tpircsavaJ 
*/

function reverseString(str) {
    let words = str.split(" ");
    console.log(words);
    // Split the string into words    
    let reversedWords = words.map(word => word.split("").reverse().join(""));//map loop through each word in the array and return a new array
    return reversedWords.join(" ");    
}
console.log(reverseString("Welcome to this Javascript"));