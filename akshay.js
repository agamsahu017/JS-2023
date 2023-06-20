console.log("hi agam je")
//2- How JS is executed & Call Stack
var n = 2;
function square(num) {
 var ans = num * num;
 return ans;
}
var square2 = square(n);
var square4 = square(4);
console.log(square2)
console.log(square4)

//3- Hoisting in JavaScript (variables & functions)

getName(); //
console.log(x); // 
var x = 7;
function getName() {
 console.log("Namaste Javascript");
}

//2
getName(); // 
console.log(x); // 
console.log(getName); // f getName(){ console.log("Namaste JavaScript); }
function getName(){
    console.log("Namaste JavaScript");
}

//3
getName(); // Uncaught TypeError: getName is not a function
console.log(getName);
var getName = function () {
    console.log("Namaste JavaScript");
}
// The code won't execute as the first line itself throws an TypeError.

//4 self
console.log(getName);
var getName = function () {
    console.log("Namaste JavaScript");
}

//4-- Functions and Variable Environments

var x = 1;
a();
b(); // we are calling the functions before defining them. This will work properly, as seen in Hoisting.
console.log(x); // 

function a() {
  var x = 10; // localscope because of separate execution context
  console.log(x); // 
}

function b() {
  var x = 100;
  console.log(x); //
}
//5- Shortest JS Program, window & this keyword

var x = 10;
console.log(x); // 
console.log(this.x); // 
console.log(window.x); //

//6- Episode 6 : undefined vs not defined in JS
console.log(x); // 
var x = 25;
console.log(x); // 
console.log(a); // Uncaught ReferenceError: a is not defined

//7 The Scope Chain, Scope & Lexical Environment

// CASE 1
function a() {
    console.log(b); //
    // Instead of printing undefined it prints 10, So somehow this a function could access the variable b outside the function scope. 
}
var b = 10;
a();

// CASE 2
function a() {
    c();
    function c() {
        console.log(b); //100
    }
}
var b = 100;
a();

//or

function a() {
    function c() {
        console.log(b); //100
    }
    return c
}
var b = 100;
a()();

//or

function a() {
    return function c() {
        console.log(b); //100
    }
}
var b = 100;
a()();


// CASE 3
function a() {
    c();
    function c() {
        var b = 1000;
        console.log(b); //  1000
    }
}
var b = 10;
a();

//or

function a() {;
   return function c() {
        var b = 1000;
        console.log(b); //  1000
    }
}
var b = 10;
a()();

// CASE 4
function a() {
    var b = 10;
    c();
    function c() {
        console.log(b); // 
    }
}
a();
console.log(b); // Error, Not Defined

//or
function a() {
    var b = 10;
    function c() {
        console.log(b); // 
    }
    return c
}
a()();
console.log(b);

//

function a() {
    function c() {
        // logic here
    }
    c(); // c is lexically inside a
} // a is lexically inside global execution

Global {
    Outer {
        Inner
    }
}
// Inner is surrounded by lexical scope of Outer

//Episode 8 : let & const in JS, Temporal Dead Zone

console.log(a); //
console.log(b); //
let a = 10;
console.log(a); // 
var b = 15;
console.log(window.a); // 
console.log(window.b); // 


  let a = 10;
  let a = 100;  //this code is rejected upfront as SyntaxError. (duplicate declaration)
  ------------------
  let a = 10;
  var a = 100; // this code also rejected upfront as SyntaxError. (can't use same name in same scope)
  
  // error - Identifier 'a' has already been declared
  
let a;
a = 10;
console.log(a) // 10. Note declaration and assigning of a is in different lines.
------------------
const b;
b = 10;
console.log(b); // SyntaxError: Missing initializer in const declaration. (This type of declaration won't work with const. const b = 10 only will work)
------------------
const b = 100;
b = 1000; //this gives us TypeError: Assignment to constant variable. 

//Episode 9 : Block Scope & Shadowing in JS
{
    var a = 10;
    let b = 20;
    const c = 30;
    // Here let and const are hoisted in Block scope,
    // While, var is hoisted in Global scope.
}

{
    var a = 10;
    let b = 20;
    const c = 30;
}
console.log(a); //
console.log(b); // Uncaught ReferenceError: b is not defined

  var a = 100;
  {
      var a = 10; // same name as global var
      let b = 20;
      const c = 30;
      console.log(a); // 
      console.log(b); // 
      console.log(c); //  
  }
  console.log(a); // instead of the 100 we were expecting. So block "a" modified val of global "a" as well. In console, only b and c are in block space. a initially is in global space(a = 100), and when a = 10 line is run, a is not created in block space, but replaces 100 with 10 in global space itself. 
  
  //or
  
   var a = 100;
  function x(){
      var a = 10; // same name as global var
      let b = 20;
      const c = 30;
      console.log(a); // 10
      console.log(b); // 20
      console.log(c); // 30 
  }
  x()
  console.log(a); // 100
  
  let b = 100;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(b); // 
}
console.log(b); // 100, Both b's are in separate spaces (one in Block(20) and one in Script(another arbitrary mem space)(100)). Same is also true for *const* declarations.

// Same logic is true even for functions

const c = 100;
function x() {
    const c = 10;
    console.log(c); // 
}
x();
console.log(c); //

  let a = 20;
  {
      var a = 20;
  }
  // Uncaught SyntaxError: Identifier 'a' has already been declared
  
   var a = 20;
  {
      let a = 20;
  } // no error
  
  let a = 20;
function x() {
    var a = 20;
}

//Episode 10 : Closures in JS

function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    return y;
}
var z = x();
console.log(z);  // value of z is entire code of function y.

//0r
function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    return y;
}
x()();

//2
    function z() {
        var b = 900;
        function x() {
            var a=7;
            function y(){
                console.log(a,b);
            }
            y();
        }
        x();
    }
    z();    // 7 900
	
	//or
	function z() {
        var b = 900;
        function x() {
            var a=7;
            function y(){
                console.log(a,b);
            }
            return y;
        }
        return x;
    }
    z()()(); 


//Episode 11 : setTimeout + Closures Interview Question


function x() {
    var i = 1;
    setTimeout(function() {
        console.log(i);
    }, 3000);
    console.log("Namaste Javascript");
}
x();
// Output:
// Namaste Javascript
// 1 // after waiting 3 seconds

///

function x() {
for(var i = 1; i<=5; i++){
    setTimeout(function() {
    console.log(i);
    }, i*1000);
    }
    console.log("Namaste Javascript");
}
x();
// Output:
// Namaste Javascript
// 6
// 6
// 6
// 6
// 6

///

function x() {
for(let i = 1; i<=5; i++){
    setTimeout(function() {
    console.log(i);
    }, i*1000);
    }
    console.log("Namaste Javascript");
}
x();

//
function x() {
    for(var i = 1; i<=5; i++){
    function close(i) {
        setTimeout(function() {
        console.log(i);
        }, i*1000);
        // put the setT function inside new function close()
    }
    close(i); // everytime you call close(i) it creates new copy of i. Only this time, it is with var itself!
    }
    console.log("Namaste Javascript");
}
x();

// 12 Famous Interview Questions ft. Closures

function outer() {
    var a = 10;
    function inner() {
        console.log(a);
    } // inner forms a closure with outer
    return inner;
}
outer()(); // 10 // over here first `()` will return inner function and then using secong `()` to call inner function 

//////////
function outer() {
    function inner() {
        console.log(a);
    }
    var a = 10;
    return inner;
}
outer()(); // 10

///////////////

function outer() {
    let a = 10;
    function inner() {
        console.log(a);
    }
    return inner;
}
outer()(); // 10

//////////////

function outest() {
    var c = 20;
    function outer(str) {
        let a = 10;
        function inner() {
            console.log(a, c, str);
        }
        return inner;
    }
    return outer;
}
outest()("Hello There")(); // 10 20 "Hello There"

//
function outest() {
    var c = 20;
    function outer(str) {
        let a = 10;
        function inner() {
            console.log(a, c, str);
        }
        return inner;
    }
    return outer;
}
outest()("Hello There")(); // 10 20 "Hello There"

//
function outest() {
    var c = 20;
    function outer(str) {
        let a = 10;
        function inner() {
            console.log(a, c, str);
        }
        return inner;
    }
    return outer;
}
let a = 100;
outest()("Hello There")(); // 10 20 "Hello There"

//Discuss more on Data hiding and encapsulation?

// without closures
var count = 0;
function increment(){
  count++;
}
// in the above code, anyone can access count and change it. 

------------------------------------------------------------------

// (with closures) -> put everything into a function
function counter() {
  var count = 0;
  function increment(){
    count++;
  }
}
console.log(count); // this will give referenceError as count can't be accessed. So now we are able to achieve hiding of data


//Episode 13 : First Class Functions ft. Anonymous Functions

//Below way of creating function are function statement.

function a() {
  console.log("Hello");
}
a(); // Hello

//Function Expression?
//Assigning a function to a variable. Function acts like a value.

var b = function() {
  console.log("Hello");
}
b();

//

a(); // "Hello A"
b(); // TypeError
function a() {
  console.log("Hello A");
}
var b = function() {
  console.log("Hello B");
}
// Why? During mem creation phase a is created in memory and function assigned to a. But b is created like a variable (b:undefined) and until code reaches the function()  part, it is still undefined. So it cannot be called.

//Anonymous Function?

function () {

}// this is going to throw Syntax Error - Function Statement requires function name.

//Anonymous functions are used when functions are used as values eg. the code sample for function expression above


// Named Function Expression?
//Same as Function Expression but function has a name instead of being anonymous.

var b = function xyz() {
  console.log("b called");
}
b(); // "b called"
xyz(); // Throws ReferenceError:xyz is not defined.
// xyz function is not created in global scope. So it can't be called.

var b = function(param1, param2) { // labels/identifiers are parameters
  console.log("b called");
}
b(arg1, arg2); // arguments - values passed inside function call

//First Class Function aka First Class Citizens?

var b = function(param1) {
  console.log(param1); // prints " f() {} "
}
b(function(){});

// Other way of doing the same thing:
var b = function(param1) {
  console.log(param1);
}
function xyz(){
}
b(xyz); // same thing as prev code

// we can return a function from a function:
var b = function(param1) {
  return function() {
  }  
}
console.log(b()); //we log the entire fun within b. 

//0r

var b=function (param1){
   return function(){
       console.log("hi agam")
   }
}
b()()

// Episode 14 : Callback Functions in JS ft. Event Listeners

setTimeout(function () {
    console.log("Timer");
}, 1000) // first argument is callback function and second is timer.


//
setTimeout(function () {
  console.log("timer");
}, 5000);
function x(y) {
  console.log("x");
  y();
}
x(function y() {
  console.log("y");
});
// x y timer


// index.html
  <button id="clickMe">Click Me!</button>

// in index.js
document.getElementById("clickMe").addEventListener("click", function xyz(){ //when event click occurs, this callback function (xyz) is called into callstack
      console.log("Button clicked");
});


//Using global variable (not good as anyone can change it)

let count = 0;
document.getElementById("clickMe").addEventListener("click", function xyz(){ 
    console.log("Button clicked", ++count);
});

//Use closures for data abstraction

function attachEventList() {  //creating new function for closure
    let count = 0;
    document.getElementById("clickMe").addEventListener("click", function xyz(){ 
    console.log("Button clicked", ++count);  //now callback function forms closure with outer scope(count)
});
}
attachEventList();


//15 Episode 15 : Asynchronous JavaScript & EVENT LOOP from scratch

console.log("start");
setTimeout(function cb() {
    console.log("timer");
}, 3000);
console.log("end");
// start end timer

//EPISODE 18 : HIGHER-ORDER FUNCTIONS FT. FUNCTIONAL PROGRAMMING

function x() {
    console.log("Hi");
};
function y(x) {
    x();
};
y(x); // Hi
// y is a higher order function
// x is a callback function

//calculate Area
const radius=[1,2,3,4] 
const calculateArea=function(radius){
	const output=[]
	for(i=0; i<radius.length;i++){
		output.push(Math.PI * radius[i]*radius[i])
	}
	return output
}
console.log(calculateArea(radius))

// calculate array of circumference.

const radius=[1,2,3,4]
const calculateCircumference=function(radius){
	const output=[];
	for(i=0;i<radius.length;i++){
		output.push(2*Math.PI*radius[i])
	}
	return output
}
console.log(calculateCircumference(radius))


//calculate Area
const radiusArr=[1,2,3,4]

const area=function(radius){
	return Math.PI * radius*radius
}

const circumference=function(radius){
	return 2*Math.PI*radius
}

const calculate=function(radius, operation){
	const output=[]
	for(i=0;i<radius.length;i++){
		output.push(operation(radius[i]))
	}
	return output
}
calculate(radiusArr,area)
calculate(radiusArr,circumference)



// Episode 19 : map, filter & reduce

const arr = [5, 1, 3, 2, 6];
// Task 1: Double the array element: [10, 2, 6, 4, 12]
function double(x) {
  return x * 2;
}
const doubleArr = arr.map(double); // Internally map will run double function for each element of array and create a new array and returns it.
console.log(doubleArr); // [10, 2, 6, 4, 12]

// Task 2: Triple the array element
const arr = [5, 1, 3, 2, 6];
// Transformation logic
function triple(x) {
  return x * 3;
}
const tripleArr = arr.map(triple);
console.log(tripleArr); // [15, 3, 9, 6, 18]

// Task 3: Convert array elements to binary
const arr = [5, 1, 3, 2, 6];
// Transformation logic:
function binary(x) {
	return x.toString(2);
}
const binaryArr = arr.map(binary);

// The above code can be rewritten as :
const binaryArr = arr.map(function binary(x) {
	return x.toString(2);
}

// OR -> Arrow function
const binaryArr = arr.map((x) => x.toString(2));

//Filter function

const array = [5, 1, 3, 2, 6];
// filter odd values
function isOdd(x) {
  return x % 2;
}
const oddArr = array.filter(isOdd); // [5,1,3]

// Other way of writing the above:
const oddArr = arr.filter((x) => x % 2);

//Reduce function
const array = [5, 1, 3, 2, 6];
// Calculate sum of elements of array - Non functional programming way
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(findSum(array)); // 17

// reduce function way
const sumOfElem = arr.reduce(function (accumulator, current) {
  // current represent the value of array
  // accumulator is used the result from element of array.
  // In comparison to previous code snippet, *sum* variable is *accumulator* and *arr[i]* is *current*
  accumulator = accumulator + current;
  return accumulator;
}, 0); //In above example sum was initialized with 0, so over here accumulator also needs to be initialized, so the second argument to reduce function represent the initialization value.
console.log(sumOfElem); // 17

// find max inside array: Non functional programming way:
const array = [5, 1, 3, 2, 6];
function findMax(arr) {
    let max = 0;
    for(let i = 0; i < arr.length; i++ {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}
console.log(findMax(array)); // 6

// using reduce
const output = arr.reduce((acc, current) => {
	if (current > acc ) {
		acc = current;
	}
	return acc;
}, 0);
console.log(output); // 6

// acc is just a label which represent the accumulated value till now,
// so we can also label it as max in this case
const output = arr.reduce((max, current) => {
	if (current > max) {
		max= current;
	}
	return max;
}, 0);
console.log(output); // 6

const users = [
	{ firstName: "Alok", lastName: "Raj", age: 23 },
	{ firstName: "Ashish", lastName: "Kumar", age: 29 },
	{ firstName: "Ankit", lastName: "Roy", age: 29 },
	{ firstName: "Pranav", lastName: "Mukherjee", age: 50 },
];
// Get array of full name : ["Alok Raj", "Ashish Kumar", ...]

function fullName(x){
	return x.firstName+' '+x.lastName
}

const fullNamePerson= users.map(fullName)
console.log(fullNamePerson)


// Get the count/report of how many unique people with unique age are there
// like: {29 : 2, 75 : 1, 50 : 1}
// We should use reduce, why? we want to deduce some information from the array. Basically we want to get a single object as output
const report = users.reduce((acc, curr) => {
	if(acc[curr.age]) {
		acc[curr.age] = ++ acc[curr.age] ;
	} else {
		acc[curr.age] = 1;
	}

	return acc;  //to every time return update object
}, {})
console.log(report) // {29 : 2, 75 : 1, 50 : 1}

// function chaining


// First name of all people whose age is less than 30
const users = [
  { firstName: "Alok", lastName: "Raj", age: 23 },
  { firstName: "Ashish", lastName: "Kumar", age: 29 },
  { firstName: "Ankit", lastName: "Roy", age: 29 },
  { firstName: "Pranav", lastName: "Mukherjee", age: 50 },
];

// function chaining
const output = users
  .filter((user) => user.age < 30)
  .map((user) => user.firstName);
console.log(output); // ["Alok", "Ashish", "Ankit"]

// Homework challenge: Implement the same logic using reduce
const output = users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);
console.log(output); // ["Alok", "Ashish", "Ankit"]


//Episode 20 (Season 2 : Episode 1) : Callback

console.log("Namaste");
console.log("JavaScript");
console.log("Season 2");
// Namaste
// JavaScript
// Season 2


console.log("Namaste");
setTimeout(function () {
  console.log("JavaScript");
}, 5000);
console.log("Season 2");
// Namaste
// Season 2
// JavaScript

// 💡 Here we are delaying the execution using callback approach of setTimeout.



 //e-Commerce web app situation
 
 const cart = ["shoes", "pants", "kurta"];
// Two steps to place a order
// 1. Create a Order
// 2. Proceed to Payment

// It could look something like this:
api.createOrder();
api.proceedToPayment();

api.createOrder(cart, function () {
  api.proceedToPayment();
});
// 💡 Over here `createOrder` api is first creating a order then it is responsible to call `api.proceedToPayment()` as part of callback approach.

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary();
  });
});

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});
// 💡 Callback Hell


api.createOrder(cart, function () {
  api.proceedToPayment();
});

// 💡 So over here, we are creating a order and then we are blindly trusting `createOrder` to call `proceedToPayment`.

// 💡 It is risky, as `proceedToPayment` is important part of code and we are blindly trusting `createOrder` to call it and handle it.

// 💡 When we pass a function as a callback, basically we are dependant on our parent function that it is his responsibility to run that function. This is called `inversion of control` because we are dependant on that function. What if parent function stopped working, what if it was developed by another programmer or callback runs two times or never run at all.
// 💡 In next session, we will see how we can fix such problems.

// Episode 21 (Season 2 : Episode 2) : Promises

const cart = ["shoes", "pants", "kurta"];

// Below two functions are asynchronous and dependent on each other
const orderId = createOrder(cart);
proceedToPayment(orderId);

// with Callback (Before Promise)
// Below here, it is the responsibility of createOrder function to first create the order then call the callback function
createOrder(cart, function () {
  proceedToPayment(orderId);
});
// Above there is the issue of `Inversion of Control`

const cart = ["shoes", "pants", "kurta"];

const promiseRef = createOrder(cart);
// this promiseRef has access to `then`

// {data: undefined}
// Initially it will be undefined so below code won't trigger
// After some time, when execution has finished and promiseRef has the data then automatically the below line will get triggered.

promiseRef.then(function () {
  proceedToPayment(orderId);
});


//

// We will be calling public github api to fetch data
const URL = "https://api.github.com/users/alok722";
const user = fetch(URL);
// User above will be a promise.
console.log(user); // Promise {<Pending>}

/** OBSERVATIONS:
 * If we will deep dive and see, this `promise` object has 3 things
 * `prototype`, `promiseState` & `promiseResult`
 * & this `promiseResult` is the same data which we talked earlier as data
 * & initially `promiseResult` is `undefined`
 *
 * `promiseResult` will store data returned from API call
 * `promiseState` will tell in which state the promise is currently, initially it will be in `pending` state and later it will become `fulfilled`
 */

/**
 * When above line is executed, `fetch` makes API call and return a `promise` instantly which is in `Pending` state and Javascript doesn't wait to get it `fulfilled`
 * And in next line it console out the `pending promise`.
 * NOTE: chrome browser has some in-consistency, the moment console happens it shows in pending state but if you will expand that it will show fulfilled because chrome updated the log when promise get fulfilled.
 * Once fulfilled data is there in promiseResult and it is inside body in ReadableStream format and there is a way to extract data.
 */
 
 const URL = "https://api.github.com/users/alok722";
const user = fetch(URL);

user.then(function (data) {
  console.log(data);
});
// And this is how Promise is used.
// It guarantees that it could be resolved only once, either it could be `success` or `failure`
/**
    A Promise is in one of these states:

    pending: initial state, neither fulfilled nor rejected.
    fulfilled: meaning that the operation was completed successfully.
    rejected: meaning that the operation failed.
 */
 
 
 // Callback Hell Example
createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInf) {
    showOrderSummary(paymentInf, function (balance) {
      updateWalletBalance(balance);
    });
  });
});
// And now above code is expanding horizontally and this is called pyramid of doom.
// Callback hell is ugly and hard to maintain.

// 💡 Promise fixes this issue too using `Promise Chaining`
// Example Below is a Promise Chaining
createOrder(cart)
  .then(function (orderId) {
    proceedToPayment(orderId);
  })
  .then(function (paymentInf) {
    showOrderSummary(paymentInf);
  })
  .then(function (balance) {
    updateWalletBalance(balance);
  });

// ⚠️ Common PitFall
// We forget to return promise in Promise Chaining
// The idea is promise/data returned from one .then become data for next .then
// So,
createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInf) {
    return showOrderSummary(paymentInf);
  })
  .then(function (balance) {
    return updateWalletBalance(balance);
  });

// To improve readability you can use arrow function instead of regular function


// Episode 22 (Season 2 : Episode 3) : Creating a Promise, Chaining & Error Handling


const cart = ["shoes", "pants", "kurta"];

// Consumer part of promise
const promise = createOrder(cart); // orderId
// Our expectation is above function is going to return me a promise.

promise.then(function (orderId) {
  proceedToPayment(orderId);
});

// Above snippet we have observed in our previous lecture itself.
// Now we will see, how createOrder is implemented so that it is returning a promise
// In short we will see, "How we can create Promise" and then return it.

// Producer part of Promise
function createOrder(cart) {
  // JS provides a Promise constructor through which we can create promise
  // It accepts a callback function with two parameter `resolve` & `reject`
  const promise = new Promise(function (resolve, reject) {
    // What is this `resolve` and `reject`?
    // These are function which are passed by javascript to us in order to handle success and failure of function call.
    // Now we will write logic to `createOrder`
    /** Mock logic steps
     * 1. validateCart
     * 2. Insert in DB and get an orderId
     */
    // We are assuming in real world scenario, validateCart would be defined
    if (!validateCart(cart)) {
      // If cart not valid, reject the promise
      const err = new Error("Cart is not Valid");
      reject(err);
    }
    const orderId = "12345"; // We got this id by calling to db (Assumption)
    if (orderId) {
      // Success scenario
      resolve(orderId);
    }
  });
  return promise;
}

//

const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart); // orderId
// ❓ What will be printed in below line?
// It prints Promise {<pending>}, but why?
// Because above createOrder is going to take sometime to get resolved, so pending state. But once the promise is resolved, `.then` would be executed for callback.
console.log(promise);

promise.then(function (orderId) {
  proceedToPayment(orderId);
});

function createOrder(cart) {
  const promise = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not Valid");
      reject(err);
    }
    const orderId = "12345";
    if (orderId) {
      resolve(orderId);
    }
  });
  return promise;
}

//

const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart); // orderId

// Here we are consuming Promise and will try to catch promise error
promise
  .then(function (orderId) {
    // ✅ success aka resolved promise handling
    proceedToPayment(orderId);
  })
  .catch(function (err) {
    // ⚠️ failure aka reject handling
    console.log(err);
  });

// Here we are creating Promise
function createOrder(cart) {
  const promise = new Promise(function (resolve, reject) {
    // Assume below `validateCart` return false then the promise will be rejected
    // And then our browser is going to throw the error.
    if (!validateCart(cart)) {
      const err = new Error("Cart is not Valid");
      reject(err);
    }
    const orderId = "12345";
    if (orderId) {
      resolve(orderId);
    }
  });
  return promise;
}

const cart = ["shoes", "pants", "kurta"];

createOrder(cart)
  .then(function (orderId) {
    // ✅ success aka resolved promise handling
    proceedToPayment(orderId);
    return orderId;
  })
  .then(function (orderId) {
    // Promise chaining
    // 💡 we will make sure that `proceedToPayment` returns a promise too
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    // from above, `proceedToPayment` is returning a promise so we can consume using `.then`
    console.log(paymentInfo);
  })
  .catch(function (err) {
    // ⚠️ failure aka reject handling
    console.log(err);
  });

// Here we are creating Promise
function createOrder(cart) {
  const promise = new Promise(function (resolve, reject) {
    // Assume below `validateCart` return false then the promise will be rejected
    // And then our browser is going to throw the error.
    if (!validateCart(cart)) {
      const err = new Error("Cart is not Valid");
      reject(err);
    }
    const orderId = "12345";
    if (orderId) {
      resolve(orderId);
    }
  });
  return promise;
}

function proceedToPayment(cart) {
  return new Promise(function (resolve, reject) {
    // For time being, we are simply `resolving` promise
    resolve("Payment Successful");
  });
}

createOrder(cart)
  .then(function (orderId) {
    // ✅ success aka resolved promise handling
    proceedToPayment(orderId);
    return orderId;
  })
    .catch(function (err) {
    // ⚠️ Whatever fails below it, catch wont care
    // this block is responsible for code block above it.
    console.log(err);
  });
  .then(function (orderId) {
    // Promise chaining
    // 💡 we will make sure that `proceedToPayment` returns a promise too
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    // from above, `proceedToPayment` is returning a promise so we can consume using `.then`
    console.log(paymentInfo);
  })

