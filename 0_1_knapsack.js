function knapsack(W, wt, val, n) {
    let dp = new Array(W + 1).fill(0);

    for (let i = 0; i < n; i++) {
        for (let w = W; w >= wt[i]; w--) { 
            dp[w] = Math.max(dp[w], dp[w - wt[i]] + val[i]);
        }
    }
    return dp[W];  
}