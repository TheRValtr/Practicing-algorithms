function binarySearch(sortedArray, key) {
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === key) {
            return middle; // Key found
        } else if (sortedArray[middle] < key) {
            start = middle + 1; // Search in the right half
        } else {
            end = middle - 1; // Search in the left half
        }
    }
    return -1; 
}
