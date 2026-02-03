function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; 
        }
    }
    return -1;
}

//Example
const numbers = [2, 41, 4, 1, 7];
const target = 4;
const result = linearSearch(numbers, target);
console.log(result); 
