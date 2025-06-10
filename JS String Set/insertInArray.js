// Q-6 Insert 'Wrench' and 'Pliers' at index 1 of the array ['Hammer', 'Screwdriver'].

const tools = ['Hammer', 'Screwdriver'];
tools.splice(1, 0, 'Wrench', 'Pliers');
console.log(tools); // Output: ['Hammer', 'Wrench', 'Pliers', 'Screwdriver']