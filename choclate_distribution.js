const findMinDiff = (arr, m) => {
    let n = arr.length;
    arr.sort((a, b) => a - b);

    let minDiff = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i + m - 1 < n; i++) {
        let diff = arr[i + m - 1] - arr[i];
        if (diff < minDiff)
            minDiff = diff;
    }
    return minDiff;
}
let arr = [7, 3, 2, 4, 9, 12, 56, 1, 15, 14, 13, 50];
let m = 4;
console.log(findMinDiff(arr, m));