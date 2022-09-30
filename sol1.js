const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("Enter a word: ", (answer) => {
    let permArr = findPermutations(answer);
    var fs = require('fs');
    var dictionaryArray = fs.readFileSync('dictionary.txt').toString().split("\n");
    let newdict = [];
    for (i in dictionaryArray) {
        if (answer.length === dictionaryArray[i].length) {
            newdict.push(dictionaryArray[i]);
        }
    }
    let counter = 0;
    for (i in permArr) {
        for (j in newdict) {
            let editedDictArr = newdict[j].replace(/[^\w]/g, "").toLowerCase()
            if (permArr[i] === editedDictArr) {
                counter++;
                if (counter == 1) {
                    console.log('Anagrams found:');
                }
                if (answer !== newdict[j]) {
                    console.log(newdict[j]);
                }
            }
        }
    }
    if (counter == 0) {
        console.log('No anagrams were found :(');
    }
    rl.close();
});

let findPermutations = (string) => {
    if (string.length < 2) {
        return string;
    }
    let permutationsArray = []
    for (let i = 0; i < string.length; i++) {
        let char = string[i]
        if (string.indexOf(char) != i)
            continue

        let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)

        for (let permutation of findPermutations(remainingChars)) {
            permutationsArray.push(char + permutation)
        }
    }
    return permutationsArray
}