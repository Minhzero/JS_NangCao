// String
const firstName = 'Sara';

// Number
const age = 30;
const temp = 98.9;

// Boolean
const hasKids = true;

// Null
const aptNumber = null;

//phan biet null vs undefined

// Undefined
// let score;
const score = undefined;

// Symbol
const id = Symbol('id');

// BigInt
const n = 9007199254740991n;

// Reference Types

const numbers = [1, 2, 3, 4];

const person = {
  name: 'Brad',
};

function sayHello() {  
  // ten funcion: bat dau dong tu , +Danh tu bo nghia : getProductList,delete
  console.log('Xin chào');
}
sayHello();

// const output = sayHello;

// console.log(output, typeof output);

// // More info on why typeof null == object
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

// //  More info on the "function object" type
// // https://262.ecma-international.org/5.1/#sec-11.4.3