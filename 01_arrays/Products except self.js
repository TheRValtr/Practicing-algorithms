/**
 * productExceptSelf(nums)
 * Returns array out where out[i] = product of all nums except nums[i]
 * No division allowed.
 *
 * Time: O(n)
 * Space: O(1) extra (output array not counted)
 */
function productExceptSelf(nums) {
  if (!Array.isArray(nums)) throw new TypeError("nums must be an array");

  const n = nums.length;
  const out = new Array(n);

  // prefix products
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    out[i] = prefix;
    prefix *= nums[i];
  }

  // multiply by suffix products
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    out[i] *= suffix;
    suffix *= nums[i];
  }

  return out;
}

module.exports = { productExceptSelf };