function groupAnagrams(strs: string[]): string[][] {
    const strMap = new Map();
    const res = [];

    strs.forEach((str) => {
        // 같은 문자열 구조는 키를 공유한다. 배열 분해 후 정렬 후 재조합
        const strKey = str.split('').sort().join('');
        
        if (strMap.get(strKey)) {
            strMap.get(strKey).push(str);
        } else {
            strMap.set(strKey, [str])
        }
    })
    
    strMap.forEach((value) => {
        res.push(value);
    })
    
    return res;
};