var hammingWeight = function(n) {
    let bits = n.toString(2); 
    let count = 0
    for(let char of bits){
        if(char === '1') count++
    }
    return count
};