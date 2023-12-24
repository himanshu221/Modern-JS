/////////////////////////// Loops

for(let i = 0; i < 10; ++i)
    console.log(i)

let i = 0
while(i < 5){
    console.log(i)
    ++i
}

// Logical operator : OR ( || ) , AND ( && ), NOT (!)
// Note: A variable defined as var has function scope i.e it will be available throughout the function
// A variable defined as let, const has block scope , it will be scope within {}.

/*
eg -
https://josephcardillo.medium.com/the-difference-between-function-and-block-scope-in-javascript-4296b2322abe
*/

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
4. Variables declared with let or const are hoisted WITHOUT a default initialization. So accessing them before the line they were declared throws ReferenceError: Cannot access 'variable' before initialization.
    But variables declared with var are hoisted WITH a default initialization of undefined. So accessing them before the line they were declared returns undefined.
eg for var :
console.log(number)
// undefined

var number = 10

console.log(number)
// 10

eg for let/const:
console.log(number)
// ReferenceError: Cannot access 'number' before initialization

let number = 10

console.log(number)

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

// object literals

let user = {
    name: 'Himanshu', // property as a key value pair
    age: 25,
    email: 'himanshubhushan775@gmail.com',
    location: 'Delhi',
    interests: ['Climbing', 'Dance', 'Running'],

    login: () => console.log(`User ${this.name} has logged in.`),
    
    // getInterests: () => this.interests.forEach((interest) => console.log(interest)) : we cannot do this as when we use arrow functions, 'this' context is not set to the user object, hence it remains set to window object
    getInterests(){
        this.interests.forEach((interest) => console.log(interest))
    }
}

console.log(user)
console.log(user.name) // accessing an object property
console.log(user['name']) // accessing an object property

user.name = 'Krishna'
user['name'] = 'Banku' // setting a property

console.log(user)

console.log(typeof user) // -> object

user.login()

// 'this' refers to the current context in the code, if 'this' is present at the root then it refers to the window object
console.log(this)

// 'this' is set to the object from which it is called,  that means when we do user.getInterest(), 'this' inside this function will be set to user object
user.getInterests()


// Math object

console.log(Math)
console.log(Math.PI)
console.log(Math.round(7.49999))

const random = Math.random()

console.log(random)

// Number, String, boolean, null, undefined, symbols are promotive datatypes on JS while all objects are reference datatypes

// primitive types are stored in memory in stack while reference datatypes are stored in heaps in memory

/* the data of reference types is stored in heap and its reference with its accessor is stored in stack which points to the heap location
let arr = [1,2,3,4]
here [1,2,3,4] will  be stored in heap while a pointer with accessor name arr will be stoed in stack pointing to the heap momeory location
*/

/* a copy of a primtive datatype will create a new variable with the value in stack while when we create copy of a referenced type variable
it creates a new pointer and points to the same heap memory, so if we change the value using one variable (pointer) it will change the value
associated with the other variable (pointer)  */ 

let score1 = 50
let score2 = score1

score1 = 100

console.log(`score1 : ${score1}, score2: ${score2}`)

let arr1 = [1,2,3,4]
let arr2 = arr1

arr1[0] = 100

console.log(`arr1: ${arr1}, arr2: ${arr2}`)
