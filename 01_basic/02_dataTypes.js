"use strict"; //treat all JS code as newer version

// alert(3+3) // 6 we are using nodejs so alert will not work here, it is used in browser

console.log(3+3) // 6 code readibility should be good, so we are using console.log instead of alert
console.log("Sayanti Das") // Sayanti Das

let name = "Sayanti Das" // string
let age = 22 // number
let isLoggedIn = false //boolean value can be true or false
let state = null // null is a standalone value

// Primitives => number, bigint, string, boolean, null, undefined, symbol

//number =>2 to power 53
// bigint
// string=>""
// boolean=>true/false
// null=> standalone value
// undefined => not assigned a value yet
// symbol => unique and cannot be changed
// object => key value pair

console.log(typeof "Sayanti Das") // string
console.log(typeof 22) // number
console.log(typeof false) // boolean
console.log(typeof null) // object
console.log(typeof undefined) // undefined
console.log(typeof Symbol("id")) // symbol;
