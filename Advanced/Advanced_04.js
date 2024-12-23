// Apiwat Ketsawong

function secretWord(str,number) {
    const word01 = [];
    const word02 = [];
    const divide = Math.floor(str.length / (number * 2));

    for (let i = 0; i < divide * number; i += number) {
        word01.push(str.substr(i, number).toLowerCase());
    } 
    for (let j = divide * number; j < str.length; j += number - 1) {
        word02.push(str.substr(j, number - 1).toLowerCase());
    }

    const checkW01 = word01;
    const checkW02 = [];

    for (let c = 1; c < word02.length; c++) {
        if (word02[c - 1].length === 2 && word02[c].length === 2) {
            checkW02.push(word01[c - 1][1] + word01[c - 1][2] + word02[c - 1][0]);
            checkW02.push(word02[c - 1][1] + word02[c]);
        } else {
            checkW02.push(word02[c - 1]);
        }
    } 

    const srw = checkW01.map(item => item.substr(number - 3, 3)).concat(checkW02.map(item => item.substr(0, 3)));
    const ascii = srw.map(item => [...item].reduce((acc, curr) => acc + '/abcdefghijklmnopqrstuvwxyz'.indexOf(curr), 0));
    const difference = Math.abs(ascii[1] - ascii[0]);
    const result = [];

    for (let i = 0; i < ascii.length - 1; i++) {
        if (Math.abs(ascii[i] - ascii[i + 1]) === difference) {
            result.push(srw[i][1]);
        } else throw "Unable to find secret character value";
    }

    if (Math.abs(ascii[ascii.length - 2] - ascii[ascii.length - 1]) === difference) {
        result.push(srw[srw.length - 1][1]);
    }

    return result.join('');
}

console.log(secretWord("sadbpstcrdvaefikkgoenqrt", 5)); 
console.log(secretWord("aheiayd", 3)); 