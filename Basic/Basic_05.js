// Apiwat Ketsawong

function getBudgets(obj) {
    return obj.map(m => m.budget).reduce((acc,cer) => acc + cer,0);
}

console.log(getBudgets([
    {name: "John", age: 21, budget: 23000},
    {name: "Steve", age: 32, budget: 40000},
    {name: "Martin", age: 16, budget: 2700},
]));
console.log(getBudgets([
    {name: "John", age: 21, budget: 29000},
    {name: "Steve", age: 32, budget: 32000},
    {name: "Martin", age: 16, budget: 1600},
]));