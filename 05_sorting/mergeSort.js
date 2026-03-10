/**
 * mergeSort(arr)
 * Returns a NEW sorted array (does not mutate input).
 *
 * Time: O(n log n)
 * Space: O(n)
 */
function mergeSort(arr) {
  if (!Array.isArray(arr)) throw new TypeError("arr must be an array");
  if (arr.length <= 1) return arr.slice();

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(a, b) {
  const out = [];
  let i = 0, j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) out.push(a[i++]);
    else out.push(b[j++]);
  }
  while (i < a.length) out.push(a[i++]);
  while (j < b.length) out.push(b[j++]);

  return out;
}

module.exports = { mergeSort };