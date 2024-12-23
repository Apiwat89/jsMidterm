// Apiwat Ketsawong

function capToFront(str) {
    const upper = [];
    const lower = [];

    for (const char of str) {
        if (char === char.toUpperCase()) {
            upper.push(char);
        } else lower.push(char);
    }

    const result = upper.join('') + lower.join('');
    return result;
}

console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));