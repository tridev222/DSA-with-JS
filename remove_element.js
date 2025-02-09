function removeElement(nums, val) {
    let i = 0; 
    for (let j = 0; j < nums.length; j++) { 
        if (nums[j] !== val) { 
            nums[i] = nums[j]; 
            i++; 
        }
    }
    return i; 
}
let nums = [3, 2, 2, 3];
let val = 3;

let newLength = removeElement(nums, val);
console.log("New Length:", newLength);
console.log("Updated Array:", nums.slice(0, newLength));
