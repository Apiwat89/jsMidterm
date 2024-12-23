// Apiwat Ketsawong

function longestValidParentheses(str) {
    let maxLen = 0;
    const stack = [-1]; 

    for (let i = 0; i < str.length; i++) { 
        if (str[i] === '(') { 
            stack.push(i);
        } else { 
            stack.pop(); 
            if (stack.length === 0) { 
                stack.push(i); 
            } else {
                maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
            }
        }
    }

    return maxLen === 0 ? "no partners :-{" : maxLen; 
}

console.log(longestValidParentheses("(()"));
console.log(longestValidParentheses(")()())"));
console.log(longestValidParentheses("()))))(()())(")); 