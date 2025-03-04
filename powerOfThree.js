var checkPowersOfThree = function(n) {
    if (n === 0) return false;

    while (n > 0) {
        let digit = n % 3;
        if (digit > 1) return false; 
        n = Math.floor(n / 3); 
    }

    return true;
};