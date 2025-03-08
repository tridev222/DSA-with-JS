var minRecolors = function(blocks, k) {
    let n = blocks.length;
    let whiteCount = 0, minOperations = Infinity;

    // Initial count of 'W' in first window
    for (let i = 0; i < k; i++) {
        if (blocks[i] === 'W') whiteCount++;
    }
    minOperations = whiteCount;

    // Slide the window
    for (let i = k; i < n; i++) {
        if (blocks[i - k] === 'W') whiteCount--; // Remove leftmost
        if (blocks[i] === 'W') whiteCount++;     // Add new element
        minOperations = Math.min(minOperations, whiteCount);
    }

    return minOperations;
};


console.log(minRecolors("WBBWWBBWBW", 7)); 
console.log(minRecolors("WBWBBBW", 2));    
