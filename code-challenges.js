// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

/*
A function called `longestString` will take in two strings as parameters
if str1 is longer than str2 then return str1
if str2 is longer than str1 then return str2
*/

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

/**
 * Determines which out of two strings is longer
 * @param {string} str1 - A string param
 * @param {string} str2 - A string to compare
 * @return {string} Returns the string with the longest length
 * 
 * @example
 * longestString("abc", "1234")
 * 
 * @throws {TypeError} parameter is not a string
 */
const longestString = (str1, str2) => {
    // check parameter types to ensure two strings are given
    if (typeof str1 !== 'string') {
        throw new TypeError('str1 is not a string')
    } else if (typeof str2 !== 'string') {
        throw new TypeError('str2 is not a string')
    }

    // if str1 is longer then return str1
    if (str1.length > str2.length) {
        return str1
    }

    // since condition above failed str2 is longer
    return str2
}

console.log(longestString(fruit1, fruit2)) // --> banana
console.log(longestString(fruit3, fruit4)) // --> cherry

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
/*
Create a function called `boilingPoint` which accepts a number parameter (temp) and a string of 'C' or 'F' or 'K' (unit) to set temperature unit (defaults to 'F')
if unit = 'C'
    if temp > 100 then return 'above boiling point'
    if temp === 100 then return 'at boiling point'
    if temp < 100 then return 'below boiling point'
if unit = 'K'
    if temp > 373 then return 'above boiling point'
    if temp === 373 then return 'at boiling point'
    if temp < 373 then return 'below boiling point'
if unit = 'F'
    if temp > 212 then return 'above boiling point'
    if temp === 212 then return 'at boiling point'
    if temp < 212 then return 'below boiling point'
*/

const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"

/**
 * Determines if temperature is above, at, or below boiling point based on temperature unit
 * @param {number} temp - Temperature of water
 * @param {('F'|'C'|'K')} [unit=F] - Temperature unit
 * @return {string} Boiling status
 * 
 * @example boilingPoint(123, 'K')
 * @example boilingPoint(123)
 * @throws {TypeError} either temp is not a number or unit is not valid
 */
const boilingPoint = (temp, unit='F') => {
    const fahrenheitBoilingPoint = 212
    const celsiusBoilingPoint = 100
    const kelvinBoilingPoint = 373

    // ensure temp parameter is a number
    if (typeof temp !== 'number') {
        throw new TypeError('temp is not a number')
    }

    switch (unit) {
        case 'F':
            if (temp > fahrenheitBoilingPoint) {
                return `${temp} ${unit} is above boiling point`
            } else if (temp === fahrenheitBoilingPoint) {
                return `${temp} ${unit} is at boiling point`
            } else {
                return `${temp} ${unit} below boiling point`
            }
        case 'C':
            if (temp > celsiusBoilingPoint) {
                return `${temp} ${unit} is above boiling point`
            } else if (temp === celsiusBoilingPoint) {
                return `${temp} ${unit} is at boiling point`
            } else {
                return `${temp} ${unit} below boiling point`
            }
        case 'K':
            if (temp > kelvinBoilingPoint) {
                return `${temp} ${unit} is above boiling point`
            } else if (temp === kelvinBoilingPoint) {
                return `${temp} ${unit} is at boiling point`
            } else {
                return `${temp} ${unit} below boiling point`
            }
        default:
            throw new TypeError('unit is invalid')
    }
}

console.log(boilingPoint(temperature1)) // --> 42 F below boiling point 
console.log(boilingPoint(temperature2)) // --> 350 F is above boiling point 
console.log(boilingPoint(temperature3)) // --> 212 F is at boiling point

// console.log(boilingPoint(90, 'C')) // --> 90 C below boiling point 
// console.log(boilingPoint(100, 'C')) // --> 100 C is at boiling point 
// console.log(boilingPoint(110, 'C')) // --> 110 C is above boiling point 

// console.log(boilingPoint(123, 'K')) // --> 123 K below boiling point 
// console.log(boilingPoint(373, 'K')) // --> 373 K is at boiling point 
// console.log(boilingPoint(400, 'K')) // --> 400 K is above boiling point 

// console.log(boilingPoint(5, 'G')) // --> TypeError: unit is invalid
// console.log(boilingPoint('hello', 'F')) // --> TypeError: temp is not a number

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
/*
Create a function that takes two arrays as parameters
Create a new array that combines the two arrays
Return the length of the new array
*/

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

/**
 * Combines two arrays and returns the length of the combined arrays
 * @param {string[]} arr1 - first array
 * @param {string[]} arr2 - second array
 * @return {number} Combined array length
 * 
 * @example totalLengthOfArrays([1, 2, 3], [1, 2]) // --> 5
 * @throws {TypeError} either arr1 or arr2 is not an array
 */
const totalLengthOfArrays = (arr1, arr2) => {
    if (!(arr1 instanceof Array)) {
        throw new TypeError('arr1 is not an array')
    } else if (!(arr2 instanceof Array)) {
        throw new TypeError('arr2 is not an array')
    }

    const combinedArray = arr1.concat(arr2)

    return combinedArray.length
}

console.log(totalLengthOfArrays(padres1984WorldSeriesRuns, padres1998WorldSeriesRuns)) // --> 9
// console.log(totalLengthOfArrays([], padres1998WorldSeriesRuns)) // --> 4
// console.log(totalLengthOfArrays(1, padres1998WorldSeriesRuns)) // --> TypeError: arr1 is not an array
// console.log(totalLengthOfArrays(padres1984WorldSeriesRuns, "hello")) // --> TypeError: arr2 is not an array

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:

/*
Create a function that takes a string as a parameter
Turn the string into an array
reverse the array
join array and return string
*/

const currentCohort = "Bravo 2023"
// Expected output: "3202 ovarB"

/**
 * Reverse string
 * @param {string} str - The string to be reversed
 * @return {string} The reversed string
 * 
 * @example reverseString('hello') // --> 'olleh'
 * @throws {TypeError} str is not a string
 */
const reverseString = (str) => {
    if (typeof str !== 'string') {
        throw new TypeError('a string must be provided')
    }

    return str.split("").reverse().join('')
}

console.log(reverseString(currentCohort)) // --> '3202 ovarB'
// console.log(reverseString(5)) // --> TypeError: a string must be provided
// console.log(reverseString()) // --> TypeError: a string must be provided

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:

/*
Create a function that takes an array and a number or string
Use Array.prototype.lastindexof to return the last index of the the given number or string
*/

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

/**
 * Get the last index of a given item
 * @param {*[]} arr - array to search
 * @param {*} item - item to search for
 * @return {number} index of last occurance, -1 if not found
 * 
 * @example getLastIndexOf([1, 2, 3, 4, 5, 4], 4) // --> 5
 * @throws {TypeError} arr is not an array
 */
const getLastIndexOf = (arr, item) => {
    if (!(arr instanceof Array)) {
        throw new TypeError('arr is not an array')
    }

    return arr.lastIndexOf(item)
}

console.log(getLastIndexOf(myNumbers, givenValue1)) // --> 7
console.log(getLastIndexOf(myNumbers, givenValue2)) // --> 8
// console.log(getLastIndexOf([1, 2, 3, 4, 5, 4], 4)) // --> 5
// console.log(getLastIndexOf(["hey", "hello", "yo", 4, 5, "hello", "hello", 3], "hello")) // --> 6
// console.log(getLastIndexOf([5, 6, 7, 4, true], "hello")) // --> -1
// console.log(getLastIndexOf([5, 6, 7, 4, true, false, 6], true)) // --> 4

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:

/*
Create a function that accepts an array
return the array using the sort method and reverse to start with largest items
*/

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

/**
 * Sort an array of numbers from largest to smallest 
 * @param {number[]} arr - array to sort
 * @returns {number[]} sorted array
 * 
 * @example sortFromLargestToSmallest([1, 2, 3, 4, 5, 4]) // --> [5, 4, 4, 3, 2, 1]
 * @throws {TypeError} arr is not an array of numbers
 */
const sortFromLargestToSmallest = (arr) => {
    if (arr.some(isNaN)) {
        throw new TypeError('arr is not an array of numbers')
    }

    return arr.sort().reverse()
}

console.log(sortFromLargestToSmallest(sanDiegoSummerTemperatures))
// --> [82, 80, 79, 77, 76, 73, 72]

console.log(sortFromLargestToSmallest(sanDiegoWinterTemperatures))
// --> [68, 67, 66, 66, 62, 59, 59]

// console.log(sortFromLargestToSmallest([1, 2, 3, 4, 5]))
// --> [ 5, 4, 3, 2, 1 ]

// console.log(sortFromLargestToSmallest([1, 2, 3, 4, "hello"]))
// --> TypeError: arr is not an array of numbers
