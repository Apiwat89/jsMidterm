// Apiwat Ketsawong

function highestDigit(num) {
    return Math.max(...String(num).split(''));
}

console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));