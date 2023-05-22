function topKFrequent(nums: number[], k: number): number[] {
    // {key, count}
    const map = new Map();
    let res = [];
    
    nums.forEach((num) => {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    });
    // 객체 {'숫자': count} 형태로 정렬 완료
    
    map.forEach((value, key) => {
        const newObj = {[key]: value};
        res.push(newObj);
    })
    
    res = res.sort((next, prev) => {
        const prevValue = Number(Object.values(prev)[0]);
        const nextValue = Number(Object.values(next)[0]);
        // return Object.values(next)[0] - Object.values(prev)[0];
        return prevValue - nextValue;
    });
    
    res = res.map(value => Number(Object.keys(value)[0])).slice(0, k);
    
    return res;
};