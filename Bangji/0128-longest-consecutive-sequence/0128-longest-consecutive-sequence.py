class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if len(nums)==0:
            return 0
        groups = {}
        group_start_id = 1
        numbers = {num for num in nums}
        while len(numbers)!=0:
            #print(numbers)    
            number = numbers.pop()
            groups[group_start_id] = [number]
            next_number = number+1
            #print(f"number : {number} - ", end="")
            while next_number in numbers:
                #print(f" {next_number}", end="")
                numbers.remove(next_number)
                groups[group_start_id].append(next_number)
                next_number += 1
            next_number = number-1
            while next_number in numbers:
                #print(f" {next_number}", end="")
                numbers.remove(next_number)
                groups[group_start_id].append(next_number)
                next_number -= 1
            group_start_id += 1
            #print(groups)
            #print(numbers)
        return max([len(group) for group in groups.values()])
        