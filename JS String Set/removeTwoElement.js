// Q-5 Remove 2 elements starting from index 1 in the array ['Pen', 'Pencil', 'Eraser', 'Sharpener'].

const items = ['Pen', 'Pencil', 'Eraser', 'Sharpener'];
const removedElement = items.splice(1, 2);
console.log(removedElement); // Output: ['Pencil', 'Eraser']
console.log(items); // Output: ['Pen', 'Sharpener']