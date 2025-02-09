var maxArea = function(height) {
    let maxWaterHold = 0;
    let i = 0, j = height.length - 1; 

    while (i < j) {
        let small = Math.min(height[i], height[j]); 
        let distance = j - i;
        let area = small * distance;
        maxWaterHold = Math.max(maxWaterHold, area);

        
        if (height[i] < height[j])
            i++;
        else
            j--;
    }
    return maxWaterHold;
};

let height = [1,8,6,2,5,4,8,3,7];
console.log("Maximum Water Hold:", maxArea(height));
