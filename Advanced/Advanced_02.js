// Apiwat Ketsawong

function frequencySort(str) {
    const obj = [];
    const arrStr = str.split('').map(m => m.charCodeAt()).sort((a, b) => a - b);

    let currentCount = 1; 
    for (let i = 1; i <= arrStr.length; i++) { 
        if (arrStr[i] === arrStr[i - 1]) { 
            currentCount++; 
        } else {
            const test = {
                loop: currentCount,
                ascii: arrStr[i - 1]
            }
            obj.push(test);
            currentCount = 1; 
        }
    }

    const result = obj.sort((a, b) => b.loop - a.loop).flatMap(entry => Array(entry.loop).fill(entry.ascii)).filter(value => value);
    
    return Array.from(result, charCode => String.fromCharCode(charCode)).join('');
}

console.log(frequencySort("tree"));  
console.log(frequencySort("cccaaa"));  
console.log(frequencySort("Aabb")); 