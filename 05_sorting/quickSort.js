/**
 * quickSort(arr)
 * Sorts array IN PLACE and returns it.
 *
 * Average time: O(n log n)
 * Worst time: O(n^2) (rare with decent pivot)
 * Space: O(log n) average (recursion stack)
 */
function quickSort(arr) {
  if (!Array.isArray(arr)) throw new TypeError("arr must be an array");
  qs(arr, 0, arr.length - 1);
  return arr;
}

function qs(a, lo, hi) {
  if (lo >= hi) return;

  const p = partition(a, lo, hi);
  qs(a, lo, p - 1);
  qs(a, p + 1, hi);
}

function partition(a, lo, hi) {
  // Choose middle element as pivot to reduce worst-case on already sorted data
  const pivotIndex = lo + Math.floor((hi - lo) / 2);
  const pivot = a[pivotIndex];
  swap(a, pivotIndex, hi); // move pivot to end

  let store = lo;
  for (let i = lo; i < hi; i++) {
    if (a[i] < pivot) {
      swap(a, i, store);
      store++;
    }
  }
  swap(a, store, hi); // pivot to final place
  return store;
}

function swap(a, i, j) {
  const tmp = a[i];
  a[i] = a[j];
  a[j] = tmp;
}

module.exports = { quickSort };