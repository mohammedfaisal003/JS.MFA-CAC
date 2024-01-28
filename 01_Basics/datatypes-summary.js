// data types are catagarised based on how they are stored and aceesed in the memory
// 1) primitive
//   string , boolean , bigInt , number , null , undefined , symbol. 
const score = 100
const scoreValue = 100.36

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')


console.log(id===anotherId);


// 2) reference(non primitive)
//   Array , Objects, Functions.

const ary = ["abubakar", "umar" , "osmaan" , "ali"]

const obj = {
    name: "MFA",
    Age : 29,
    city : Hyderabad
}

let myFunction = function(){}
 