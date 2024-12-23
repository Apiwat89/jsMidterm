// Apiwat Ketsawong
// ข้อนี้ยังมีช่องโหว่อยู่

function count_animals(str) {
    const animals = ["dog","cat","bat","cock","cow","pig","fox","ant","bird","lion","wolf","deer","bear","frog","hen","mole","duck","goat"];
    const checkAnimal01 = [];
    const checkAnimal02 = [];
    const checkText = [];

    for (let i = 0; i < animals.length; i++) {
        let count = 0; 
        for (let j = 0; j < animals[i].length; j++) {
            if (str.toLowerCase().includes(animals[i][j])) {
                count++;
            }
        }
        if (count === animals[i].length) {
            checkAnimal01.push(animals[i]);
        }
    } 

    for (let i = 0; i < checkAnimal01.length; i++) {
        let sum = checkAnimal01[i].length;
        const check = [{name: checkAnimal01[i], length: checkAnimal01[i].length}];
        for (let j = i + 1; j < checkAnimal01.length; j++) {
            if (sum + checkAnimal01[j].length <= str.length) {
                check.push({name: checkAnimal01[j], length: checkAnimal01[j].length});
                sum += checkAnimal01[j].length;
            } 
        } checkAnimal02.push(check);
    }

    for (let i = 0; i < checkAnimal02.length; i++) {
        let text = str;
        const set = checkAnimal02[i].map(m => m.name);
        for (let j = 0; j < set.length; j++) {
            for (let char of set[j]) {
                if (text.includes(char)) {
                    text = text.replace(char,'-');
                } 
            } 
        } checkText.push({text: text.replace(/-/gi,''), name: set});
    }

    const sort = checkText.map(m => m.text).sort((a,b) => a.length - b.length);
    const result = checkText.find(item => item.text === sort[0]).name;

    for (let i = 0; i < checkText[0].text.length; i+=result[0].length) {
        if (result[0] === checkText[0].text.substr(i, result[0].length)) {
            result.push(checkText[0].text.substr(i, result[0].length));
        }
    }

    return result.length;
}

console.log(count_animals("goatcode")); 
console.log(count_animals("cockdogwdufrbir")); 
console.log(count_animals("dogdogdogdogdog"));