// Apiwat Ketsawong

function totalVolume(...arr) {
    const result = arr.reduce((acc,cer) => {
        const arrIn = cer.reduce((acc,cer) => acc * cer, 1);
        return acc + arrIn;
    }, 0);
    return result;
}

console.log(totalVolume([4,2,4],[3,3,3],[1,1,2],[2,1,1]));
console.log(totalVolume([2,2,2],[2,1,1]));
console.log(totalVolume([1,1,1]));