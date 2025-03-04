var coinChange = function(coins, amount) {
    let n = coins.length;
   let dp = new Array(n).fill(0).map(() => new Array(amount + 1).fill(Infinity));

   for (let T = 0; T <= amount; T++) {
       if (T % coins[0] === 0) {
           dp[0][T] = T / coins[0];
       }
   }

   for (let ind = 1; ind < n; ind++) {
       for (let T = 0; T <= amount; T++) {
           let notTake = dp[ind - 1][T]; 
           let take = Infinity;
           if (coins[ind] <= T) {
               take = 1 + dp[ind][T - coins[ind]];
           }
           dp[ind][T] = Math.min(take, notTake);
       }
   }

   let ans = dp[n - 1][amount];
   return ans >= 1e9 ? -1 : ans;
};