function modifyArray(nums) {
    return nums.map(el => el % 2 === 0 ? el * 2 : el * 3);
}