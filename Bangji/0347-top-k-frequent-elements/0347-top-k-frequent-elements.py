class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        frequents = {}
        for num in nums:
            if num not in frequents:
                frequents[num] = 1
            else:
                frequents[num] += 1
        ranking = sorted([(key, value) for key, value in frequents.items()], key=lambda x: (x[1], x[0]), reverse=True)
        return [x[0] for x in ranking][:k]