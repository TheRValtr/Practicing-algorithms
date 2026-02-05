const arr = [1, 2, 3];
console.log(Math.max(...arr));
console.log(Math.min(...arr));

//Using math function

const arr = [1,2,3];

const max = arr.reduce ((a,b) => Math.max(a.b));
const min = arr.reduce ((a,b) => Math.min(a,b)); 

//Using reduce method iterate the array and tranforms it into single value

const arr = [1, 2, 3];
let max = arr[0];
let min = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
}

console.log(max); 
console.log(min);

//for larger arrays iterating can be more efficient 
