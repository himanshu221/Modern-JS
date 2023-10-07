// DOM Document Object Model

// the broswer created an html document object when it loads all the content onto the webpage 
// and it has a lot of methods we could use to manipulate the content using JS

// this document object can be used for changing, addding and removing content onto the page

/*
Various methods :
document.url
document.getElementById
document.querySelector
document.querySelectorAll
....
*/

////////////// Query Selectors

// document.querySelector(<CSS tag>)
// document.querySelectorAll(<CSS tag>)

const para= document.querySelector('p')
console.log(para)

const email = document.querySelector('.email')
console.log(email)


let arr  = document.querySelectorAll('p')
arr.forEach(tag => console.log(tag))

// get an element by Id
const ele = document.getElementById('id1')
console.log(ele)

// get element by thier class name
const emails = document.getElementsByClassName('email')

// emails.forEach(email => console.log(email)) -> cant use 'forEach' on HtmlCollection
console.log(emails[1])

// getting elements by their tag names

const pp = document.getElementsByTagName('p')

console.log(pp[1])

// changing content

let paras = document.querySelectorAll('p')
paras.forEach(para => para.innerText += ' new txt added')

const htmlText = document.querySelector('.divTwo')
htmlText.innerHTML += '<p>This is the fourth para</p>'

// chaning an attribute of an html tag

const link = document.querySelector('a')

console.log(link.getAttribute('href'))
link.setAttribute('href','https://www.google.com/search?q=boulderbox')
link.innerText = 'This is link to boulderbox' 

// Append style attributes to html elements

const heading = document.querySelector('h1')
heading.style.color='green'
heading.style.fontSize='300px' // propeties names which have - like font-size are used in JS using camel casing
