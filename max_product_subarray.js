var maxProduct = function(nums) {
    let prefix = 1, suffix = 1, n = nums.length;
    let max_product = -Infinity;
    
    for (let i = 0; i < n; i++) {
        if (prefix === 0) prefix = 1;
        if (suffix === 0) suffix = 1;
        
        prefix *= nums[i];
        suffix *= nums[n - i - 1];
        
        max_product = Math.max(max_product, prefix, suffix);
    }
    
    return max_product;
};