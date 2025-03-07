var closestPrimes = function(left, right) {
    let MAX_LIMIT = right;
    let isPrime = new Array(MAX_LIMIT + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i <= MAX_LIMIT; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= MAX_LIMIT; j += i) {
                isPrime[j] = false;
            }
        }
    }

    let primes = [];
    for (let i = left; i <= right; i++) {
        if (isPrime[i]) {
            primes.push(i);
        }
    }

    if (primes.length < 2) return [-1, -1];

    let minDiff = Infinity;
    let result = [-1, -1];

    for (let i = 1; i < primes.length; i++) {
        let diff = primes[i] - primes[i - 1];
        if (diff < minDiff) {
            minDiff = diff;
            result = [primes[i - 1], primes[i]];
        }
    }
    return result;
};