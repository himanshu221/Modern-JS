/////////////////////////// Loops

for(let i = 0; i < 10; ++i)
    console.log(i)

let i = 0
while(i < 5){
    console.log(i)
    ++i
}

// Logical operator : OR ( || ) , AND ( && ), NOT (!)
// Note: A variable defined as var variable ignores block scope

/////////////////////////// Functions 

// function declaration

function greet(){
    console.log("Hello there!")
}
greet()

// function expression : we store the function inside a variable and call it using the variable name

const speak = function(){
    console.log('Have a good day!')
}
speak()
speak()

/*
1. Hoisting in JS : JS declare all its functions declaration ( not functions expression) on top
no matter where they are defined before executing the code.
2. JavaScript allocates memory for all variables and functions defined in the program before execution.
3. Undeclared variable is assigned the global scope by javascript
*/

// passing arguments to function
const speakArg = function(name = 'Himanshu', time = 'Night') { // provide default values to parameters
    console.log(`Good ${time} ${name}`)
}
speakArg('Snigdha')
speakArg()

// function returning values

const calcArea = function (radius) {
    let area = 3.14 * radius**2
    return area
}

console.log(calcArea(3))

// Arrow functions

const calcAreaShort = (radius) => {
    return 3.14 * radius**2
}

// const calcAreaShort = radius => 3.14 * radius**2 // above function can be written in a shorter way if we have just one argument and single line return statement

console.log(calcAreaShort(3))


// callbacks & foreach

// callback functions are the functions which are passed as an argument to another function

const mainFunction = (callbackfunc) => { // callbackfunc here is a callback function
    let val = 50
    callbackfunc(val)
}

mainFunction(value => console.log(value))

let people = ['Himanshu', 'Snigdha', 'Vrinda']

people.forEach((person) => console.log(person))
people.forEach((person, index) => console.log(`${person} is at ${index} index.`))

const cbfunc = (person, index) => console.log(`${person} is at ${index} index.`)

people.forEach(cbfunc)

let ul = document.querySelector('.people')
let html = ''
people.forEach(person => html += `<li style="color: blue">${person}</li>`)

ul.innerHTML = html



//////// Objects

