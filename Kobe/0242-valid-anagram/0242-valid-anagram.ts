function isAnagram(s: string, t: string): boolean {
    let res;
    const sArray = s.split('').sort();
    const tArray = t.split('').sort();
    
    // console.log(sArray, tArray);

    res = sArray.length === tArray.length && sArray.every((v, i) => v === tArray[i]);
    
    return res;
};