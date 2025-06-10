// Q-10 In the array ['HTML', 'CSS', 'Python'], replace 'Python' with 'JavaScript'.

const languages = ['HTML', 'CSS', 'Python'];
const index = languages.indexOf('Python');
if (index !== -1) {
    languages[index] = 'JavaScript';
}
console.log(languages); // Output: ['HTML', 'CSS', 'JavaScript']