class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        from functools import reduce
        multiples_without_zero = 1
        for n in [num for num in nums if num!=0]:
            multiples_without_zero *= n
        zero_count = len([num for num in nums if num==0])
        if zero_count>1:
            return [0 for _ in nums]
        
        array = []
        for num in nums:
            if zero_count==1:
                if num==0:
                    array.append(multiples_without_zero)
                else:
                    array.append(0)
            else:
                array.append(multiples_without_zero//num)
                
        return array