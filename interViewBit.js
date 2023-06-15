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
