class Solution:
    def isValidSudoku(self, nums: List[List[str]]) -> bool:
        
        for i in range(0,9):
            h=[0]
            q=[0]
            for j in range(0,9):
                if nums[i].count(str(j+1))>1:
                    return False
                if nums[j][i] != '.':
                    h.append(int(nums[j][i]))
                row_start = 3 * (i // 3)
                col_start = 3 * (i % 3)
            for r in range(row_start, row_start + 3):
                for c in range(col_start, col_start + 3):
                    if nums[r][c] != '.':
                        q.append(nums[r][c])

            h.remove(0)
            for val in Counter(h).values():
                if val >= 2:
                    return False 
            q.remove(0)
            for vael in Counter(q).values():
                if vael >= 2:
                    
                    return False 
        return True