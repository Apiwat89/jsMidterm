// Apiwat Ketsawong

function sumTwoSmallestNums(arr) {
    const num1 = Math.min(...arr.filter(f => f > 0));
    arr.splice(arr.indexOf(num1),1);
    const num2 = Math.min(...arr.filter(f => f > 0));

    return num1 + num2;
}

console.log(sumTwoSmallestNums([19,5,42,2,77]));
console.log(sumTwoSmallestNums([10,343445353,3453445,3453545353453]));
console.log(sumTwoSmallestNums([2,9,6,-1]));
console.log(sumTwoSmallestNums([879,953,694,-847,342,221,-91,-723,791,-587]));
console.log(sumTwoSmallestNums([3683,2902,3951,-475,1617,-2385]));