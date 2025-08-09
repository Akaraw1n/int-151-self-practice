// 1. write a funtion to calculate the sum of numbers in an array
function calSum(numbers){
    if(!Array.isArray(numbers)){
        return '';
    }
    let result = 0
    for (let i = 0 ; i < numbers.length ;i++){
        result += numbers[i];
    }
    return result;
}
// console.log(calSum([10,20,30]))
// console.log(calSum([40,-2,30,2,-10]))
// console.log(calSum([0,-13,50,-90]))

// 2.Write a function to convert a string to titlecase.
function convertTitle(str){
    if(typeof str !=='string')
        return '';
    let title = str.trim();
    let result = ''
    let letterNext = true
    for (let i = 0; i < title.length; i++){
      let char = title[i]
      if(letterNext && char !== ' '){
        result += char.toUpperCase()
        letterNext = false ;
      } else {
        result += char
      }
      if (char === ' '){
        letterNext = true;
    }
    }
    return result;
}

// console.log(convertTitle("hello world"))
// console.log(convertTitle("easy to learn"))
// console.log(convertTitle('star war'))

// 3.Write a function to add even numbers from 1 to n (inclusive)
function AddEvenNumbers(n) {
    let result = 0
    for (let i = 2;i <= n; i+= 2){
        result += i
    }
    return result
}

// console.log(AddEvenNumbers(4))
// console.log(AddEvenNumbers(10))
// console.log(AddEvenNumbers(12))

//  4.Write a function to create a simple flash card.
function SimpleFlashcard(question, answer){
    return{
        show:function(mode){
            if(mode === "all"){
                console.log(`Question : ${question}, Answer : ${answer}`)
            } else if(mode === "question"){
                console.log(`Question : ${question}`)
            } else if(mode === "answer"){
                console.log(`Answer : ${answer}`)
            }
        }
    }
}
let card1 =SimpleFlashcard("What is the capital of France?", "Paris");
let card2 =SimpleFlashcard("2 + 2 = ?", "4");

// card1.show("all")
// card2.show("question")
// card2.show("answer")

// 5.Write a function to remove duplicates from an array.
function removeDuplicates(numbs){
    let uniqe = []
    for(let i = 0 ; i < numbs.length ; i++){
        if(!uniqe.includes(numbs[i])){
            uniqe.push(numbs[i]) 
        }
    }
    return uniqe
}
// console.log(removeDuplicates([1,2,2,3,5,6,7,7,1,0]))
// console.log(removeDuplicates([100,200,100,300,400,-100]))

//  6.Write a function to return the largest of two numbers using the ternary operator.
function findLarger(num1,num2){
    return largest = (num1 > num2) ? num1 : num2
}
// console.log(findLargest(5,2))
// console.log(findLargest(0,-10))
// console.log(findLargest(1,1))

// 7.Write a function to check if two arrays have any elements in common.
function haveCommonElements(arr1, arr2) {
    return arr1.some(common => arr2.includes(common)) ? "Yes" : "No"
}
// console.log(haveCommonElements([1,2,3],[5]))
// console.log(haveCommonElements([1,2,3],[2,3]))
// console.log(haveCommonElements([0,1,-3],[]))

// 8.Write a function to find the first non-repeating element in a array
function singleOccurrence(numbs){
    for(let i = 0;i < numbs.length;i++){
        if(numbs.indexOf(numbs[i]) === numbs.lastIndexOf(numbs[i])){
            return numbs[i]
        }
    }
    return null
}

// console.log(singleOccurrence([1,2,3,5,1,3,5]))
// console.log(singleOccurrence([1,0,9,9,]))
// console.log(singleOccurrence([1,1]))

// 9.Write the function to alter an array of numbers.
function alterNumbers(numbers){
    for(let i = 0; i < numbers.length;i++){
        if(numbers[i] % 2 === 0){
            numbers[i] = numbers[i] /2 
        } else if(numbers[i] % 2 !== 0){
            numbers[i] = numbers[i] - 1
        }
    }
    return numbers
}
// console.log(alterNumbers([1,2,3,5,7]))
// console.log(alterNumbers([-2,0,-100]))

// 10.Write a function to check if a string contrains two consecutive identical letters.
function hasConsecutiveIdenticalLetters(str) {
    for(let i = 0 ; i < str.length - 1; i++){
        if(str[i] === str[i+1]){
            return "Yes"
        } 
    }
    return "No"
}
// console.log(hasConsecutiveIdenticalLetters("hello"))
// console.log(hasConsecutiveIdenticalLetters("apple"))
// console.log(hasConsecutiveIdenticalLetters("Minecraft"))