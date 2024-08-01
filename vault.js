// first declare a variable with the required verbiage
// declare 3 more variables, each with a mathematical calculation that calculates the 3 numbers required for the combination
// concat the variables to form the full sentence required for the alert pop-up
// display the alert

//creating first variable with the required verbiage
const commonSentence = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"

// second variable for computing and storing the first number in the combination
let firstNum = 8 + 2

// third variable for computing and storing the first number in the combination
let secondNum = 2 * 2 * 10

// fourth variable for computing and storing the first number in the combination
let thirdNum = 20 * 2 - 1

// Concatenating all the variables to form the complete alert string
const fullSentence = `${commonSentence} ${firstNum} - ${secondNum} - ${thirdNum}`

// displaying the alert pop-up
alert(fullSentence)

