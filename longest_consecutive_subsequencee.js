var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;

    let numSet = new Set(nums);
    let longest = 0;

    for (let num of numSet) {
        if (!numSet.has(num - 1)) {
            let count = 1;
            let x = num;

            while (numSet.has(x + 1)) {
                x++;
                count++;
            }
            longest = Math.max(longest, count);
        }
    }
    return longest;
};