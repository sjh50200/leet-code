function productExceptSelf(nums: number[]): number[] {
    let res:number[] = [];
    let sum:number = 1;
    
    const multipleAll = (array: number[], initialValue: number): number => {
        initialValue = array.reduce((prev: number, now: number) => prev * now, initialValue);
        
        return initialValue;
    };
    
    if(nums.indexOf(0) === -1) {
        sum = multipleAll(nums, sum);
        res = nums.map((value) => sum / value);
    } else {
        const zeroIndex = nums.indexOf(0);
        const tempArray = [...nums];
        tempArray.splice(zeroIndex, 1);
        if(tempArray.indexOf(0) !== -1) {
            res = Array.from(Array(nums.length), () => 0);
        } else {
            sum = multipleAll(tempArray, sum);
            res = Array.from(Array(nums.length), (value, index) => index === zeroIndex ? sum : 0);
        }
    }
    
    return res;
};