const str = "   fly me   to   the moon  ";
const words = str.trim().split(' '); // Split the string into an array of words
const lastWord = words[words.length - 1];
const lengthOfLastWord = lastWord.length;// Get the length of the last word
console.log(words); // Output: flymetothemoon
console.log(lastWord); // Output: moon
console.log(lengthOfLastWord); // Output: 5