var reverseBits = function(n) {
    let result = 0;
    for(let i = 32; i > 0; i--){
        result = (result << 1) | (n & 0x1);
        n >>= 1;
    }
    return result >>> 0;
};