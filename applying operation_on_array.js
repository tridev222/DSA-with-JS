var applyOperations = function(nums) {
    let n = nums.length;

    for (let i = 0; i < n - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }

   
    let j = 0; 
    for (let i = 0; i < n; i++) {
        if (nums[i] !== 0) {
            [nums[j], nums[i]] = [nums[i], nums[j]]; 
            j++;
        }
    }

    return nums;
};
