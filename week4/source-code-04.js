// 1.From the array of people, keep only adults (age ≥ 18) and return their names.
const people = [
    { name: "Alice", age: 19 },
    { name: "Bob", age: 17 },
    { name: "Cara", age: 21 },
    { name: "Dan", age: 18 },
  ]
const OLd = people.filter((person) => person.age >= 18).map((person) => person.name)
// console.log(OLd)

// 2.Given the words below, keep those with length > 4, convert to UPPERCASE, 
// then sort A→Z.
const words = ["map", "filter", "reduce", "compose", "iterator", "forEach"];
const Sorted = words.filter((word) => word.length > 4).map((word) => word.toUpperCase()).sort()
// console.log(Sorted)

// 3.Compute the total inventory value of items that are in stock (price * qty).
const items = [
    { name: "Pen", price: 5,  qty: 10, inStock: true  },
    { name: "Notebook", price: 30, qty: 3, inStock: true },
    { name: "Pencil", price: 2,  qty: 0,  inStock: false },
    { name: "Marker", price: 12, qty: 5, inStock: true  },
  ];
const total = items.filter((item) => item.qty > 0).reduce((subtotal,item) => {
    return subtotal += (item.price * item.qty)
},0)
// console.log(total)

// 4.Find the average score of students who passed (score ≥ 50).
const students = [
    { name: "Ann",   score: 72 },
    { name: "Ben",   score: 48 },
    { name: "Chloe", score: 91 },
    { name: "Dom",   score: 55 },
];
const AvgScore = students.filter((std) => std.score >= 50).reduce((avg,std,_,number) => {
    return avg += std.score  / number.length
},0)
// console.log(AvgScore)

//5. Apply a 25% discount to each product, 
//then find the first product with a discounted price > 100. Return its name.
const products = [
    { name: "Chair", price: 120 },
    { name: "Lamp",  price: 80  },
    { name: "Desk",  price: 200 },
  ];

  const Discount = products.find(p => p.price * 0.75 > 100)?.name
// console.log(Discount)

// 6.Given a list of words, remove words shorter than 3 letters, 
// lowercase the rest, then return a frequency object.
const Words = ["The","cat","and","the","catalog","of","categories","are",
    "awesome","and","cozy"];
const Freq = Words.filter(word => word.length >= 3).map(word => word.toLocaleLowerCase()).reduce(((acc,word) => {
    acc[word] = (acc[word]|| 0) +1
    return acc

}
),{})
// console.log(Freq)

// 7.Sum the squares of all odd numbers.
const nums = [1,2,3,4,5,6];
const SumOdd = nums.filter(num => num % 2 != 0).reduce((sum,num) => {
    return sum += (num * num)
},0)

// console.log(SumOdd)

// 8.From the books below, consider only those published from 2015 onward, map to their titles,
// and check if any title contains the word "JavaScript" (case-sensitive). Return the boolean result.
const books = [
    { title: "Eloquent JavaScript", year: 2018 },
    { title: "You Don't Know JS",   year: 2014 },
    { title: "Learning Python",     year: 2016 },
  ];

const result = books.filter(book => book.year >= 2015).map(book => book.title.toLocaleLowerCase()).some(title => title.includes("javascript"))
// console.log(result)

// 9.
// 9.1 Keep only students who passed (score ≥ 50) and are active = true.
// 9.2 Map them to an object { name, grade } where grade is:
// "A" if score ≥ 80
// "B" if score ≥ 70
// "C" if score ≥ 60
// "D" if score ≥ 50
// 9.3 Sort them by grade (A highest → D lowest).
// 9.4 Finally, return an array of names only in that order.
const Students = [
    { name: "Alice", score: 85, active: true },
    { name: "Bob", score: 45, active: true },
    { name: "Charlie", score: 72, active: false },
    { name: "Diana", score: 90, active: true },
    { name: "Eve", score: 66, active: true },
    { name: "Frank", score: 55, active: true },
  ];    

const Grade = Students.filter(student => student.score >= 50 && student.active).map(student => 
    ({ name : student.name,
    grade : student.score >= 80 ? "A" :
            student.score >= 70 ? "B" :
            student.score >= 60 ? "C" : "D"
})).sort().map(student => student.name)
// console.log(Grade)