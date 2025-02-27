var twoSum = function(nums, target) {
    let mpp = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let more = target - num;
        if (mpp.has(more)) {
            return [mpp.get(more), i];
        }
        mpp.set(num, i);
    }
    return [-1, -1];
};