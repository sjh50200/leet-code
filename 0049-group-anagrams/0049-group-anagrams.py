class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        groups = {}
        for string in strs:
            anagram = {}
            for s in string:
                anagram[s] = 1 if s not in anagram else anagram[s]+1
            key = "".join([f"{k}{anagram[k]}" for k in sorted(anagram.keys())])
            if key not in groups:
                groups[key] = [string]
            else:
                groups[key].append(string)
            
        return groups.values()
                