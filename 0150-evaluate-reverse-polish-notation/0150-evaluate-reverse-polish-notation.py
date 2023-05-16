class Solution:
    def fcal(self, num1:int, num2:int, cal:str):
        if cal=="+":
            return num1+num2
        elif cal=="-":
            return num1-num2
        elif cal=="*":
            return num1*num2
        else:
            return int(num1/num2)
    def evalRPN(self, tokens: List[str]) -> int:
        if len(tokens)==1:
            return int(tokens[0])
        stack = []
        calculations = ["+", "-", "*", "/"]
        num_count = 0
        while len(tokens)!=0:
            token = tokens.pop()
            if token in calculations:
                stack.append(token)
                num_count = 0
            else:
                stack.append(token)
                num_count += 1
            
            if num_count == 2:
                stop_flag = True
                while stop_flag:
                    num1 = int(stack.pop())
                    num2 = int(stack.pop())
                    cal = stack.pop()
                    result = self.fcal(num1, num2, cal)
                    if len(stack)>0 and stack[-1] in calculations:
                        stop_flag = False
                    elif len(stack)==0:
                        stop_flag = False
                    stack.append(result)
                num_count = 1
            #print(f"stack : {stack}")
        #print(stack)
        return stack[0]