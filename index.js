const wordsjson = require("./words.json")
/**
 * allWords()
 * -----------------------
 * Showing all the words in the data
 * 
 * @param {string[]} words 
 */

function allWords(words){
    for(let word of words){
        console.log(word)
    }
}

function firstTenWords(words){
    for(let index = 0; index < 10; index++){
        console.log(words[index])
    }
}

function nextTenWords(words, position = 0) {
    for(let index = position; index < position + 10; i++){
        console.log(words[index])
    }
}

function firstXWords(words, xEnd = words.length){
    for(let index = 0; index < xEnd; index++) {
        console.log(words[index])
    }
}

function subsetOfWords(words, xStart = words.length, yEnd = words.length){
    for(let index = xStart; index <= yEnd - 1; index++){
        console.log(words[index])
    }
}

function sortWords(words){
    console.log(words.sort())
}

/*-----------------------------------------*/

function wordsWithQ(words) {
    return words.filter(element => element.includes("q"))
}

function findWordsWithLetter(words, letter) {
    return words.filter(element => element.includes(letter))
}

