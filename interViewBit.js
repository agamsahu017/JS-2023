// Hoisting takes place in the local scope as well
function doSomething(){
  x = 33;
  console.log(x);
  var x;
}
doSomething()

//Variable initializations are not hoisted, only variable declarations are hoisted:

var x;
console.log(x); // Outputs "undefined" since the initialization of "x" is not hoisted
x = 23;

//  Type Coercion in javascript - String coercion

var x = 3;
var y = "3";
x + y // Returns "33"

var x = 24;
var y = "Hello";
x + y // Returns "24Hello";

var x = 3;
Var y = "3";
x - y    //Returns 0 since the variable y (string type) is converted to a number type.

//All values except false, 0, 0n, -0, “”, null, undefined, and NaN are truthy values.

var x = 0;
var y = 23;
       
if(x) { console.log(x) }   // The code inside this block will not run since the value of x is 0(Falsy)  
       
if(y) { console.log(y) }  

//

var x = 220;
var y = "Hello";
var z = undefined;
       
x | | y    // Returns 220 since the first value is truthy
       
x | | z   // Returns 220 since the first value is truthy
       
x && y    // Returns "Hello" since both the values are truthy
       
y && z   // Returns undefined since the second value is falsy
       
if( x && y ){
  console.log("Code runs" ); // This block runs because x && y returns "Hello" (Truthy)
}  
       
if( x || z ){
  console.log("Code runs");  // This block runs because x || y returns 220(Truthy)
}
//

//JavaScript is a dynamically typed language. In a dynamically typed language, the type of a variable is checked during run-time in contrast to a statically typed language, where the type of a variable is checked during compile-time.
// javascript is a loosely(dynamically) typed language, 

NaN property represents the “Not-a-Number” value. It indicates a value that is not a legal number.

typeof of NaN will return a Number.

To check if a value is NaN, we use the isNaN() function

//
// In JavaScript, primitive data types are passed by value and non-primitive data types are passed by reference.

IIFY) is a function that runs as soon as it is defined.

(function(){
	console.log("hi ")
})()

// Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.

//The value of the “this” keyword will always depend on the object that is invoking the function.

//the function is invoked in the global context, the function is a property of the global object.

//Therefore, the output of the above code will be the global object. Since we ran the above code inside the browser, the global object is the window object



 at the time of invocation, the getName function is a property of the object obj , therefore, this keyword will refer to the object obj, and hence the output will be “vivek”.
 
 
 var person={
    age:23,
    getAge(){
       return this.age
    }
}
var person2={age:56}

person.getAge.call(person2)

console.log(person.getAge.call(person2))
/////////////////////
var person={
    age:23,
    getAge(){
       return this.age
    }
}
var person2={age:56}

person.getAge.call(person2)

console.log(person.getAge())


function sayHello(){
    return "hello "+this.name
}
var obj={name:"agam"}
sayHello.call(obj)

///////////////////

function saySomething(message){
    return this.name+ "is "+message
}
var person4= {name:"Agam"}

saySomething.call(person4, "hi sexy")

//

function saySomething(message){
    return this.name+ "is "+message
}
var person4= {name:"Gourav"}

saySomething.apply(person4, ["hi sexy boy"])

///////

function saySomething(message, city){
    return this.name+ " is "+message+"  "+city
}
var person4= {name:"Gourav"}

// call() method takes arguments separately whereas, apply() method takes arguments as an array.

 //bind():

//This method returns a new function, where the value of “this” keyword will be bound to the owner object, which is provided as a parameter.

// Currying is an advanced technique to transform a function of arguments n, to n functions of one or fewer arguments.

function multiply(a,b){
    return a*b
}

function currying(fn){
    return function(a){
        return function(b){
            return fn(a,b)
        }
    }
}
const curriedValue= currying(multiply)
console.log(curriedValue(5)(6))

////////////////

There are three types of scopes in JS:

Global Scope
Local or Function Scope
Block Scope

saySomething.apply(person4, ["hi sexy boy", "jaipur"])


var y = 24;

function favFunction(){
  var x = 667;
  var anotherFavFunction = function(){
    console.log(x); 
  }

  var yetAnotherFavFunction = function(){
    console.log(y);
  }

  anotherFavFunction();
  yetAnotherFavFunction();
}
favFunction();

//As you can see in the code above, if the javascript engine does not find the variable in local scope, it tries to check for the variable in the outer scope. If the variable does not exist in the outer scope, it tries to find the variable in the global scope..

//Closures are an ability of a function to remember the variables and functions that are declared in its outer scope.

 //The ability of a function to store a variable for further reference even after it is executed is called Closure.
