var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;  
            return digits;
        }
        digits[i] = 0; 
    }
    
    digits.unshift(1); 
    return digits;
};

// Test Case
console.log(plusOne([9,9,9])); 
