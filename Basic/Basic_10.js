// Apiwat Ketsawong

function isValidIP(str) {
    const check = str.split('.').map(m => m.split(''));

    if (check.length === 4) {
        for (let i = 0; i < check.length; i++) {
            for (let j = 0; j < check[i].length; j++) {
                if (parseInt(check[i].join('')) < 1 || parseInt(check[i].join('')) >= 255) {
                    return false;
                }
                else if (check[i][0] === '0') {
                    return false;
                }
            }
        }
        return true;
    } 
    else return false;
}

console.log(isValidIP("1.2.3.4"));
console.log(isValidIP("1.2.3"));
console.log(isValidIP("1.2.3.4.5"));
console.log(isValidIP("123.45.67.89"));
console.log(isValidIP("123.456.78.90"));
console.log(isValidIP("123.045.067.089"));