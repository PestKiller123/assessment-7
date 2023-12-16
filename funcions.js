function addToZero(arr) {

    let numbers = {};

    for (let num of arr) {
        let complement = -num;
        if (numbers[complement]) {
            return true;
        }
        numbers[num] = true;
    }
    return false;
}
addToZero([1, 1])
// -> false
addToZero([1, -1])
// -> true
addToZero([2, 8, 6, -2])
// -> true
addToZero([1, 5, 7])
// -> false



function hasUniqueChars(word) {

    let characters = [];

    for (let char of word) {
        if (characters.includes(char)) {
            return false;
        }
        characters.push(char);
    }

    return true;
}
 hasUniqueChars("hello")
 // -> false
 hasUniqueChars("world")
 // -> true



 function isPangram(sentence) {
    const lowerCaseSentence = sentence.toLowerCase();
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for (let letter of alphabet) {
        if (!lowerCaseSentence.includes(letter)) {
            return false;
        }
    }
    return true;
}
isPangram("The quick brown fox jumps over the lazy dog");
// -> true
isPangram("Hello, World!");
// -> false



function findLongestWord(words) {
    if (words.length === 0) {
        return 0;
    }

    let longestLength = words[0].length;

    for (let i = 1; i < words.length; i++) {
        const currentLength = words[i].length;
        if (currentLength > longestLength) {
            longestLength = currentLength;
        }
    }

    return longestLength;
}
findLongestWord(["apple", "banana", "kiwi", "strawberry", "orange"]);
// -> 7
