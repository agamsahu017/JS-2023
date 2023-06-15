console.log("hi agam je")
//2- How JS is executed & Call Stack
var n = 2;
function square(num) {
 var ans = num * num;
 return ans;
}
var square2 = square(n);
var square4 = square(4);

//3- Hoisting in JavaScript (variables & functions)

getName(); //
console.log(x); // 
var x = 7;
function getName() {
 console.log("Namaste Javascript");
}

//
getName(); // 
console.log(x); // 
console.log(getName); // f getName(){ console.log("Namaste JavaScript); }
function getName(){
    console.log("Namaste JavaScript");
}

//
getName(); // Uncaught TypeError: getName is not a function
console.log(getName);
var getName = function () {
    console.log("Namaste JavaScript");
}
// The code won't execute as the first line itself throws an TypeError.

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
        console.log(b); //
    }
}
var b = 10;
a();

// CASE 3
function a() {
    c();
    function c() {
        var b = 100;
        console.log(b); // 
    }
}
var b = 10;
a();

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

console.log(a); // ReferenceError: Cannot access 'a' before initialization
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
  
  let b = 100;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(b); // 
}
console.log(b); // 100, Both b's are in separate spaces (one in Block(20) and one in Script(another arbitrary mem space)(100)). Same is also true for *const* declarations.

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

//
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

