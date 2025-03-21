var countBits = function(n) {
    let answer = new Array(n+1).fill(0);
    for(let i = 1; i <= n; i++){
        answer[i] = answer[i >> 1] + (i & 1); 
    }
    return answer;
};