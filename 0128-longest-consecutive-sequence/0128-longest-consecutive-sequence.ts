function longestConsecutive(nums: number[]): number {
    
    if (nums.length === 0) return 0;
    
    let count = 1;
    const sequenceCountArray = [];
    const sortedNums = nums.sort((next, prev) => next - prev);
    
    sortedNums.forEach((value, index) => {
        if (index !== 0) {
            // 전 인덱스보다 1 높으면 count 증가
            if (sortedNums[index - 1] + 1 === value) {
                count++;
            } else {
                // value와 전 인덱스와 같으면 건너뜀
                if (sortedNums[index - 1] !== value) {
                    // 아니면 push하고 count 초기화
                    sequenceCountArray.push(count);
                    count = 1;
                }
            }
        }
        if (index === sortedNums.length - 1) sequenceCountArray.push(count);
    });
    
    const resultArray = sequenceCountArray.sort((next, prev) => next - prev);
    const result = resultArray.pop();
    
    return result;
};