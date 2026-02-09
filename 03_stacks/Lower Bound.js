function lowerBound(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        const middle = Math.floor((start + end) / 2);
        if (arr[middle] < target) {
            start = middle + 1;
        } else {
            end = middle;
        }
    }

    return start < arr.length && arr[start] >= target ? start : -1;
}
