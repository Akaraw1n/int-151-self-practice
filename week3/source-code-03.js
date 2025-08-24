//exersice in class
function getFreqOfWords(sentence){
    if(typeof sentence !== "string"){
        return null
    }
    let words = sentence.toLowerCase().split(" ")
    let result = {}
    for (let word of words){
        if(result[word] === undefined){
            result[word] = 1
        } else {
            result[word] += 1
         }
    }
    return result
}



// console.log(getFreqOfWords("Hello Thailand Hello World hello test"))
// console.log(getFreqOfWords("chicken banana chicken banana pineapple"))

// Write a function normalizePhone(phone) that returns a phone number in the 
// format +66-XXX-XXX-XXXX (country code +66 as example).
// Remove spaces, dashes, parentheses; accept numbers starting with 0 or +66.
// If it cannot be normalized (wrong length or non-digits), return undefined.
function normalizePhone(phone){
    if(typeof phone !== 'string'){
        return undefined
    }
    let number = phone.replace(/[()\s-]/g, "")
    if(number.startsWith("+66")){
        number = number.slice(3)
    } if (!number.startsWith("0")){
        number = "0" + number
    }   if (!number.startsWith("0")) {
        number = "0" + number;
    }
    let formatted = number.replace(/(\d{3})(\d{3})(\d{4})/,"$1-$2-$3")
    return "+66-" + formatted;

}

// console.log(normalizePhone("081-234-5678"));      // +66-081-234-5678
// console.log(normalizePhone("(+66) 81 234 5678")); // +66-081-234-5678
// console.log(normalizePhone("812345678"));         // undefined  (missing a digit)
// console.log(normalizePhone(null));                // undefined


// Write a function countLetters(sentence) that returns an object with 
// { vowels, consonants }.Ignore case and non-alphabetic 
// characters (numbers, spaces, punctuation).
function countLetters(sentence){
    let words = sentence.toLowerCase().split("")
    let vowelsList = ["a", "e", "i", "o", "u"]
    let result = {
        vowels : 0,
        consonants :0
    }
    for(let letter of words){
        if(!/[a-z]/.test(letter)) continue;
        if(vowelsList.includes(letter)){
            result.vowels += 1
        } else {
            result.consonants += 1
        }
    }
    return result
}
// console.log(countLetters("Hello, World!")); // { vowels: 3, consonants: 7 }
// console.log(countLetters("Do your best, just do it!!")); // { vowels: 7, consonants: 12 }


// Write a function Chunk(array, size) that splits an array into subarrays 
// of length size. The last chunk may be shorter if there are not enough elements.
// If size is not a positive integer, return undefined.
function Chunk(array,size){
    let result = []
    if (size <= 0){
        return undefined
    }
    for(let i = 0 ;i < array.length ; i += size){
        result.push(array.slice(i,i + size))
    }

    return result
}
// console.log(Chunk([1,2,3,4,5], 2))
// console.log(Chunk(["a","b","c"], 4)); // [ ["a","b","c"] ]
// console.log(Chunk([1,2], 0)); // undefined

// Write a function getTopNWords(text, n) that returns an array of 
// the top n most frequent words in lowercase, ignoring punctuation.
// If n is larger than the number of unique words, return all of them.
// Order: highest frequency first; ties broken by alphabetical order.
function getTopNWords(text ,n){
    let words = text.toLowerCase().replace(/[^\w\s]/g, "").split(/\s+/)
    let result = {}
    for(let word of words){
        result[word] = (result[word] || 0) + 1
    }
    let sorted = Object.entries(result).sort((a, b) => b[1] - a[1])
    return sorted.slice(0, n)
}

// console.log(getTopNWords("Today is today, and today is great!", 2));
// [ ["today", 3], ["is", 2] ]

// console.log(getTopNWords("Do you best; just do it. Do it!",3));
// [ ["do", 3], ["it", 2], ["best", 1] ]

