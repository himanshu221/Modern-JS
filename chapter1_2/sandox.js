// Simple pop up alert 
alert("Hello world !")

// put logs on console
console.log("Hey")

// define a variable
let a = 25
let year = 22
console.log(a,year)

// updating the variable
a = 33
console.log(a) 

// create a constant -> value cannot be updated
const constant = 200
// constant = 4455
console.log(constant)

// older way to create varibales using var
var sc = 76
console.log(sc)

/* 
NOTE : Variable names can have letters, number, _ , $
It should not start with a number
Cant use js reserved keywords for variable names
*/
// let 1av = 1;
// console.log(1av);

let $av = 1
console.log($av)

/* 
NOTE : JS datatypes:
Numbers -> 1,2,3,3.14
String -> 'heellp,rrfr' "dfsdf"
Boolean -> true/false
Null -> explicitly set varibale with no value
Undefines -> browsers sets the variable with no value automatically
Object - > Complex datastructures like Arrays, Dates, Literals
Symbols -> Used with objects
*/

/* 
JS is a loosely typed language because we dont define datatype 
of a variable while defining it and it can be interchanged as well
*/

let change = 3.14
console.log(change)

change = "Hello"
console.log(change)


/////////////////// Explore more on datatypes

// Strings
console.log('Hello','World')

// String concatination
 let fn = 'Himanshu'
 let ln = 'Bhushan'
 let email = 'himanshubhushan775@gmail.com'

 let fullName = fn + " " + ln
 console.log(fullName)

 // Extract charcter
console.log(fullName[0])

// String length
console.log(fullName.length)

// String methods
console.log(fullName.toUpperCase())
console.log(email.indexOf('h'))
console.log(email.lastIndexOf('o'))

console.log(email.slice(0,7)) // slice position from index 0 to 6
console.log(email.substr(5,7)) // provide substring from index 5 to 12

console.log(email.replace('h','k'))


///// Numbers

// math operator : +, - , *, /, **, %

console.log(10/3)
console.log(10%3) // provides the remainder

let pi = 3.14
let radius = 10
console.log(pi*radius**2) // (pi)(r^2)

// order of operations -> BODMAS
console.log(5 * (10-6)**2) // should be = 80

console.log(++radius)

radius += 10
// radius /= 2

console.log(radius)

// NaN - not a number -> some calculation that doesnt make sense

console.log(5 / 'Hello')

let result = 'The circle has ' + radius + ' radius'
console.log(result)

// template string

const climberName = 'Adam Ondra'
const activity = 'climber'

console.log(`${climberName} is the best ${activity} in the world`)


// Arrays

let ninja = ['Himanshu', 'Bhushan']
console.log(ninja[0]) // accessing an element
console.log(ninja.length)
ninja[0] = 'Cool'
console.log(ninja[0])

let arr = ['dddc', 2, 4.53]
console.log(arr)

// Arrays methods

console.log(ninja.push('Ghilaodia'))
console.log(ninja.pop())


// Null and Undefined

let age

console.log(age, age + 3, `This is my age : ${age}`) // -> undefined NaN 'This is my age : undefined'

let yt = null

console.log(yt, yt + 3, `the age is ${yt}`) // -> null 3 'the age is null'

//Comparison

console.log('shaun' > 'Shaun') // -> smallcase letters are considered larger than large case letters

// loose comparison ( different types can still be equal)
let num = 25
console.log(num == 25)
console.log(num == '25') // ->  js wil convert '25' into a number 25 and the compare

// strict comparison ( different types cannot be equal)

console.log(num === 25)
console.log(num === '25') 
console.log(num !== 25)

// type conversion
let score = '100'

console.log(score + 1) // -> 1001
console.log(Number(score) + 1) // -> 101

console.log(typeof score)
let na = Boolean(10)
let xero = Boolean(0)
let ng = Boolean(-13)
console.log(na, typeof na) // positive number and negative are trusice values while 0 is falsive value
console.log(xero, typeof xero)
console.log(ng, typeof ng)


let str = Boolean('abc')
let strEmpt = Boolean('')

console.log(str)
console.log(strEmpt) // String of any length is trusive value while string of zero length is falsive


