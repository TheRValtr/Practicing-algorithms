function upperBound(arr, target) {
    let left = 0;
    let right = arr.length; // exclusive

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] <= target) {
            // mid is in left zone
            left = mid + 1;
        } else {
            // mid is in right zone
            right = mid;
        }
    }

    return left;
}
