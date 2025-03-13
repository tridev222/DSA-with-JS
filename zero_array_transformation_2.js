var minZeroArray = function(nums, queries) {
    let n = nums.length, sum = 0, k = 0;
    let cnt = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        while (sum + cnt[i] < nums[i]) {
            if (k === queries.length) return -1;

            let [l, r, val] = queries[k++];
            if (r < i) continue;

            cnt[Math.max(l, i)] += val;
            cnt[r + 1] -= val;
        }
        sum += cnt[i];
    }
    return k;
};