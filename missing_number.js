var missingNumber = function(nums) {
    let n = nums.length;
    let sum = (n *(n + 1) / 2 );
    let numsum = nums.reduce((acc, num) => acc + num, 0);
    let miss = sum - numsum;
    return miss;
};