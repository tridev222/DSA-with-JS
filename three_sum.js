function triplet(n, arr) {
    let ans = [];
    arr.sort((a, b) => a - b);
    for (let i = 0; i < n; i++) {
        if (i !== 0 && arr[i] === arr[i - 1]) continue;
        let j = i + 1;
        let k = n - 1;
        while (j < k) {
            let sum = arr[i] + arr[j] + arr[k];
            if (sum < 0) {
                j++;
            } else if (sum > 0) {
                k--;
            } else {
                let temp = [arr[i], arr[j], arr[k]];
                ans.push(temp);
                j++;
                k--;
                while (j < k && arr[j] === arr[j - 1]) j++;
                while (j < k && arr[k] === arr[k + 1]) k--;
            }
        }
    }
    return ans;
}

let arr = [2,-1,-2,-2,0,0,0,4,5,,2,1,2,1,0,3,2,-4,-4,-3];
let n = arr.length;
let ans = triplet(n, arr);
for (let it of ans) {
    process.stdout.write("[");
    for (let i of it) {
        process.stdout.write(i + " ");
    }
    process.stdout.write("] ");
}
console.log();

