function containsDuplicate(nums: number[]): boolean {
        
    while (nums.length > 0) {
        const target = nums.shift();
        if (nums.includes(target)) return true;
    }
    
    return false;
};