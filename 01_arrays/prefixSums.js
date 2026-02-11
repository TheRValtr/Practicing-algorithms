function buildPrefixSum(arr) {
    const prefix = new Array(arr.length + 1).fill(0);
    for (let i = 1; i <= arr.length; i++) {
        prefix[i] = prefix[i - 1] + arr[i - 1];
    }
    return prefix;
}

function rangeSum(prefix, left, right) {
    return prefix[right + 1] - prefix[left];
}

// Example 
const arr = [2, 4, 1, 3, 5];
const prefix = buildPrefixSum(arr);
console.log(rangeSum(prefix, 1, 3)); 
