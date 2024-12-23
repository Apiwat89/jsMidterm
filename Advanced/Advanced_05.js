// Apiwat Ketsawong

function jumpingProg(num,arr) {
    const stone = arr.length;
    const jump = new Array(stone+1).fill(Infinity);
    jump[0] = 1;
    
    for (let i = 0; i < stone; i++) { 
        for (let j = 1; j <= num && i + j <= stone; j++) {
            if (arr[i] === j) { 
                jump[i + j] = Math.min(jump[i + j], jump[i] + 1);
            } 
        }
    }

    return jump[stone] === Infinity ? "no chance :-{" : jump[stone]; 
}

console.log(jumpingProg(5, [1, 1, 1, 1, 1])); 
console.log(jumpingProg(5, [1, 3, 1, 1, 1])); 
console.log(jumpingProg(5, [1, 1, 0, 1, 1]));