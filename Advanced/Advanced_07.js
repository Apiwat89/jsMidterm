// Apiwat Ketsawong

function isAdditive(str) {

    function checkAdditive(num1, num2, remaining) {
        if (remaining.length === 0) return true;

        const sum = num1 + num2; 
        const sumStr = sum.toString(); 

        if (!remaining.startsWith(sumStr)) return false;
        
        return checkAdditive(num2, sum, remaining.substring(sumStr.length));
    }

    for (let i = 1; i < str.length; i++) { 
        for (let j = i + 1; j < str.length; j++) { 
            const num1 = parseInt(str.substring(0, i)); 
            const num2 = parseInt(str.substring(i, j)); 
            const remaining = str.substring(j); 
            
            if (checkAdditive(num1, num2, remaining)) return true;
        }
    }
    
    return false;
}

console.log(isAdditive("112358")); 
console.log(isAdditive("129881000")); 
console.log(isAdditive("12988110101891")); 
console.log(isAdditive("123456789")); 
console.log(isAdditive("300045007500")); 