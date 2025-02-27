var maxProfit = function(prices) {
    let maxi = 0,mini = prices[0], n = prices.length;
    for (let i = 0; i < n; i++) {
        let cost = prices[i] - mini;
        maxi = Math.max(maxi,cost);
        mini = Math.min(mini,prices[i]);
    }
    return maxi; 
};