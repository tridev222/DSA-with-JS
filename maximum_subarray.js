var maxSubArray = function(nums) {
    let sum = 0 , maxSum = -Infinity;
    for(let i = 0 ; i < nums.length; i++){
        sum += nums[i];
        if(sum > maxSum) maxSum = sum;
        if(sum < 0) sum = 0;
    }
    return maxSum;
};