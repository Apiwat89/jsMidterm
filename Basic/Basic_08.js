// Apiwat Ketsawong

function simplePair(arr, mul) {
    const result = [];
    const check = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] * arr[j] === mul && arr[i] !== arr[j]) {
                check.push(arr[i], arr[j]);
            }
        }
    }

    if (check != '') {
        for (let i = 0; i < check.length; i += 2) {
            const pair = [check[i], check[i + 1]];
            if (!result.some(existing => existing.includes(pair[0]) && existing.includes(pair[1]))) { 
                result.push(pair);
            }
        } return result;
    }

    return null;
}

console.log(simplePair([1, 2, 3], 3));
console.log(simplePair([1, 2, 3], 6));
console.log(simplePair([1, 2, 3], 9));
console.log(simplePair([2, 6, 3, 4], 12));
