// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: 5
// b) Verify and explain: Array.prototype.push() is a mutation method which appends items to an array then returns the new length of the array. The array length starts at 4. After pushing one item to the array it becomes 5.

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: There are 10 letters in the string. The property .length returns the total number of characters in a string includeing spaces.

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: Strings are a lot like arrays. Just like you would grab an array item by the index, the same thing can be done with a string. The code is logging the 4th index of the string "Hello World!". You can find the letter it will print out by counting through each letter starting at zero.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: Arrays are zero-indexed meaning the first item is 0, the second is 1, and so on. The code above is asking for the language at the first index, so the second item will be returned.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: This will result in an error. 
// b) Verify and explain: Arrays do not have a method of toUpperCase. This method is reserved for strings.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: dataTypes.length will result in 4 since the array has 4 items. The typeof keyword will return the type of dataTypes.length which is number.
