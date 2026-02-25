/**
 * maxSubarraySumK(nums, k)
 * Returns the maximum sum of any contiguous subarray of length k.
 *
 * Time: O(n)
 * Space: O(1)
 */
function maxSubarraySumK(nums, k) {
  if (!Array.isArray(nums)) throw new TypeError("nums must be an array");
  if (!Number.isInteger(k) || k < 1) throw new RangeError("k must be >= 1");
  if (nums.length < k) return null;

  let windowSum = 0;
  for (let i = 0; i < k; i++) windowSum += nums[i];

  let best = windowSum;

  for (let right = k; right < nums.length; right++) {
    windowSum += nums[right] - nums[right - k];
    if (windowSum > best) best = windowSum;
  }

  return best;
}

module.exports = { maxSubarraySumK };