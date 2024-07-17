    const sumAll = function(...nums) {
        let sum = 0;
        nums.sort();
        if (Math.floor(nums[0]) != Math.ceil(nums[0]) || Math.floor(nums[1]) != Math.ceil(nums[1]) || nums[0] < 0 || nums[1] < 0 || typeof nums[0] != "number" || typeof nums[1] != "number") {
            return "ERROR";
        }
        for (let i = nums[0]; i <= nums[1]; i++) {
            sum += i;
        }
        return sum;
    };

    // Do not edit below this line
    module.exports = sumAll;
