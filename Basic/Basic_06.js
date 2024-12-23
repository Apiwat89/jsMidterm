// Apiwat Ketsawong

function removeDups(arr) {
    const result = arr.filter((value,index,self) => {
        return self.indexOf(value) === index;
    }) 
    return result;
}

console.log(removeDups([1,0,1,0]));
console.log(removeDups(["The","big","cat"]));
console.log(removeDups(["John","Taylor","John"]));