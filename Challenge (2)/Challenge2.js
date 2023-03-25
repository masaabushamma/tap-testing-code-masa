function missingNums(nums) {
    const n = nums.length + 1;
    let total = n * (n - 1) / 2;
    for (i = 0; i < nums.length; i++)
        total -= nums[i];
    return total;
}
nums =  [0,1]
console.log(missingNums(nums))