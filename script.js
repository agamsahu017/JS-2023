//1
function add() {
    let sum = 0;
    // console.log(arguments)
    for (let arg of arguments) {
        sum += arg
    }
    return sum
}
// console.log(add(3,5,8,9))

//2
const arr = [1, 2, 3, 4]
// console.log(arr.length)

arr.length = 8;
// console.log(arr)

arr.length = 2;
// console.log(arr)


//3 String to array

let st = "hello"
const newVal = Array.from(st)
// console.log(newVal);
//set to Array
let s = new Set([1, 3, 6])
// console.log(s);
// console.log(Array.from(s));

//Arrow function

// function say(){
//     return this.name
// }

// const tell=()=>{
//     return this.name
// }

// var name="Sanju"
// const person={
//     name:"Akash",
//     age:23,
//     tell,
//     say
// }

// console.log(person);
// console.log(person.say());
// console.log(person.tell());

//Bind Call Apply

// var name="x"

// function say(title="mr") {
//     return title+' '+this.name
// }

// const person={
//         name:"Akash",
//         age:23
//     }

// let nf= say.bind(person)

// console.log(nf);
// console.log(nf());

// console.log(say.call());
// console.log(say.call(person));
// console.log(say.call(person,"mrs"));
// console.log(say.apply(person,["mrs"]));

//closure

function outer(i = 0) {
    return function inner() {
        return i++
    }
}

let closure = outer()
// console.log(closure());
// console.log(closure());
// console.log(closure());

function init(multipier) {
    return function (input) {
        return multipier * input
    }
}
// console.log(init(4)(5));
// console.log(init(3)(2));


//

// for(var i = 1; i<=5; i++){
//     setTimeout(function() {
//     console.log(i);
//     }, i*1000);
//     }


// for (var i = 1; i <= 5; i++) {
//     (function (x) {
//         setTimeout(function () {
//             console.log(x);
//         }, x * 1000);
//     })(i)
// }

//shallow copy

let cart={
    fruits:["apple", "orange"],
    total:2
}
// console.log(cart);

// const items= cart
// console.log(items);
// items.total=6
// console.log(items, cart);

// const items= {...cart}
// console.log(items);
// items.total=6
// items.fruits.pop()
// console.log(items, cart);

// const deep= JSON.parse(JSON.stringify(cart))
// cart.total=9
// cart.fruits.pop()
// console.log(cart);
// console.log(deep);

// Object.prototype.age=10
// var employee={
//     company:"xyz",
//     name:"abc"
// }

// console.log(employee);
// delete employee.name
// console.log(employee);
// console.log(employee.age);

//Destructure Array

// const Newarr=[2,6,9,8,9,4,7]
// const [a,b, ...c]=Newarr

// console.log(a);
// console.log(b);
// console.log(c);

// const obj={a:2, b:69, c:9}
// const {b, ...rem }= obj

// console.log(b);
// console.log(rem);

// // 
// let val=null
// console.log(!!val);

//Enumerable property
//for in for Enumerable

// let obj={
//     a:1,
//     b:9,
//     c:4
// }

// for(let o in obj){
//     console.log(o);
// }

//Unique

// const arrOne=[1,3,5,6,1,9,4,7,9,4,5]
// const sU= new Set(arrOne)
// console.log(sU);
// const newA= [...sU]
// console.log(newA);


//IIFE
// (function sayHi(){
//     console.log("agam is goog");
// })()
// sayHi()

// IIFE ex is Closeures


let areaWithC= (function(pi=3.14){
    return function  area(r){
        return pi*r*r
    }
})()
console.log(areaWithC(3));

//Object entries

let obj={name:"Agam", age:27}

console.log(Object.keys(obj));
console.log(Object.values(obj));
let ent=Object.entries(obj)
console.log(ent);

for(let [k,v] of ent){
    console.log(k,v);
}

//Rest parameters

function ad(...numbers){
console.log(numbers);
}
ad(1,3)










//TASK , for-in and for of






































