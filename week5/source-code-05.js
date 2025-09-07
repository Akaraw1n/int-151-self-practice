//1.Write a function addProperty(obj, key, value) that adds a new
//property to an object and returns the updated object.
function addProperty(obj, key, value) {
    obj[key] = value;
    return obj;
  }
// console.log(addProperty({ name: 'John' }, 'age', 25));
// Output: { name: 'John', age: 25 }
// console.log(addProperty({}, 'city', 'New York'));
// Output: { city: 'New York' }

//2. Write a function mergeObject(obj1, obj2) and return merges two objects.
function mergeObject(obj1, obj2) {
    return { ...obj1, ...obj2 };
  }
// console.log(mergeObject({ name: 'John', age: 25 }, { city: 'New York' }));
// { name: 'John', age: 25, city: 'New York' }
// console.log(mergeObject({ name: 'Jane' }, { age: 30, country: 'USA' }));
// { name: 'Jane', age: 30, country: 'USA' }

//3. Write a function getFreqOfWords(sentence) that returns an object with keys representing
// unique words in lowercase and values representing the frequency of occurrences of each
// word with ignore case in the sentence. If the input string is null or undefined, return
// undefined.

function getFreqOfWords(sentence) {
    if (sentence == null) {
      return undefined;
    }
    const words = sentence.toLowerCase().split(/\s+/);
    const freq = {}
    for (let word of words) {
      if (freq[word]) {
        freq[word] += 1;
      } else {
        freq[word] = 1;
      }
    }
    return freq;
  }
// console.log(getFreqOfWords('Today is present and present is your gift'));
// { today: 1, is: 2, present: 2, and: 1, your: 1, gift: 1 }
// console.log(getFreqOfWords('Do you best just do it'));
// { do: 2, you: 1, best: 1, just: 1, it: 1 } 
// console.log(getFreqOfWords(null));       // undefined
// console.log(getFreqOfWords(undefined));  // undefined

//4. Write a function findValue(arr) that takes an array of numbers and
// returns an object with the following properties:
// • min: the minimum value in the array
// • max: the maximum value in the array
// • sum: the sum of all the values in the array
// • avg: the average of all the values in the array
// For example, given the array [1, 2, 3, 4, 5], the function should return:
// { min: 1, max: 5, sum: 15, avg: 3 }
function findValue(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      return undefined;
    }
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let sum = arr.reduce((acc, num) => acc + num, 0);
    let avg = sum / arr.length;
    return { min, max, sum, avg };
  }
// console.log(findValue([1, 2, 3, 4, 5]));
// { min: 1, max: 5, sum: 15, avg: 3 }
  
//5.Write a function removeFalsyValues(arr) that takes an array and
// returns a new array with all falsy values removed. Falsy values include
// 0, empty string, false, null, and undefined.
function removeFalsyValues(arr) {
    if (!Array.isArray(arr)) return undefined;
    return arr.filter(Boolean);
}
// console.log(removeFalsyValues([0, 1, false, 2, '', 3]));
//[1, 2, 3]
// console.log(removeFalsyValues(['a', '', 'b', null, 'c']));
//['a', 'b', 'c']
// console.log(removeFalsyValues([null, undefined, 'A']));
//['A']

//6.Write a function filterEvenNumbers(arr) that takes an array of
// numbers and returns a new array with only the even numbers.
function filterEvenNumbers(arr) {
    if (!Array.isArray(arr)) return undefined; // กัน input ที่ไม่ใช่ array
    return arr.filter(num => num % 2 === 0);
  }

//console.log(filterEvenNumbers([1, 2, 3, 4]));
//[2, 4]
//console.log(filterEvenNumbers([5, 6, 7, 8]));
//[6, 8]
  
//7.Write a function populateArray(length, value) that creates an array of
// given length and fills it with the specified value.
function populateArray(length, value) {
    if (typeof length !== "number" || length < 0) return undefined;
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(value);
    }
    return arr;
  }
// console.log(populateArray(3, 'a'));
//['a', 'a', 'a']
// console.log(populateArray(5, 0));
//[0, 0, 0, 0, 0]