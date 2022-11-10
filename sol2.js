const readline = require("readline");
const { performance } = require('perf_hooks');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("Enter a word: ", (answer) => {
    let start = performance.now();
    var fs = require('fs');
    var dictionaryArray = fs.readFileSync('dictionary.txt').toString().split("\n");
    let newdict = [];
    // for (i in dictionaryArray) {
    //     if (answer.length === dictionaryArray[i].length) {
    //         newdict.push(dictionaryArray[i]);
    //     }
    // }
    newdict = dictionaryArray.filter(word => word.length === answer.length);
    let allAnagrams = anagrams(answer, newdict);
    if (allAnagrams.length == 0) {
        console.log("No anagrams found :(");
    } else {
        console.log('Anagrams found:');
        for (i in allAnagrams) {
            if (answer !== allAnagrams[i]) {
                console.log(allAnagrams[i]);
            }
        }
    }
    rl.close();
    let end = performance.now();
    console.log(`It took ${end - start} time to execute te program`);
});

let anagrams = (input, newDictArr) => {

    let anagramsArray = [];
    for (let i = 0; i < newDictArr.length; i++) {
        if (input !== newDictArr[i]) {
            input = input.replace(/[^\w]/g, "").toLowerCase()
            let editedDictArr = newDictArr[i].replace(/[^\w]/g, "").toLowerCase()

            input = input.split('').sort().join('');
            editedDictArr = editedDictArr.split('').sort().join('');

            if (input === editedDictArr) {
                anagramsArray.push(newDictArr[i]);
            }
        }
    }
    return anagramsArray
}