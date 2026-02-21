function firstTrue(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === true) {
            if (mid === 0 || arr[mid - 1] === false) {
                return mid; // Found the first true
            }
            right = mid - 1; // Search left
        } else {
            left = mid + 1; // Search right
        }
    }
    return -1; // No true value found
}
