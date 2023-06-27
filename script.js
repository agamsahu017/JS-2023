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

let cart = {
    fruits: ["apple", "orange"],
    total: 2
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


let areaWithC = (function (pi = 3.14) {
    return function area(r) {
        return pi * r * r
    }
})()
// console.log(areaWithC(3));

//Object entries

// let obj={name:"Agam", age:27}

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// let ent=Object.entries(obj)
// console.log(ent);

// for(let [k,v] of ent){
//     // console.log(k,v);
// }

//Rest parameters

function ad(...numbers) {
    // console.log(numbers);
}
ad(1, 3)

//split and join()
// const text="hi i am agam hru?"
// console.log(text.split(''));
// console.log(text.split(' ')); 
// console.log(text.split(' ').length);  //word count
// console.log(text.split('a').length-1);  //a count
// console.log(text.split(' ').join()); 
// console.log(text.split(' ').join(' ')); 

//splice and slice()
const arr2 = [1, 2, 4, 5, 6, 7]
// var x= arr2.splice(1, 3, 'x')  // modified orinigal array
// console.log(x);
// console.log(arr2);

//slice
// const x= arr2.slice(2,5)
// console.log(x);
// console.log(arr2);

// const arr3=[1,2,3,4,5]
// console.log(arr3);

// const x= arr3.__proto__
// console.log(x);

// Array.prototype.sum=function(){
//     return this.reduce((acc, it)=>
//         acc+it
//     ,0)
// }
// console.log(arr3.sum());


////////////////// React JS interview Question

//Deep Copy v/s Shallow copy 

{
    const originalArray = [1, 2, 3, 4, 5];
    const shallowCopyArray = [...originalArray];

    const originalObject = { name: 'John', age: 25 };
    const shallowCopyObject = { ...originalObject };
}
//

{
    const originalArray = [1, 2, 3, 4, 5];
    const shallowCopyArray = Object.assign([], originalArray);

    const originalObject = { name: 'John', age: 25 };
    const shallowCopyObject = Object.assign({}, originalObject);
}

{
    const originalArray = [1, 2, 3, 4, 5];
    const shallowCopyArray = Array.from(originalArray);
    console.log(shallowCopyArray);
    // Note: Array.from() doesn't work directly with objects. It is primarily used for arrays.

}

//lodash.cloneDeep()

//Map and forEach


const originalArray = [1, 2, 3, 4, 5];

// Using map()
const newArrayMap = originalArray.map((element) => element * 2);
// console.log(newArrayMap); // Output: [2, 4, 6, 8, 10]
// console.log(originalArray); // Output: [1, 2, 3, 4, 5]

// Using forEach()
const newArrayForEach = [];
originalArray.forEach((element) => {
    newArrayForEach.push(element * 2);
});
// console.log(newArrayForEach); // Output: [2, 4, 6, 8, 10]
// console.log(originalArray); // Output: [1, 2, 3, 4, 5]


//this keyword
{
    var name = "rishi"
    const obj = {
        name: 'John',
        greet: function () {
            // console.log(`Hello, ${this.name}!`);
        }
    };

    obj.greet(); // Output: Hello, John!

    const globalGreet = obj.greet;
    //  globalGreet(); // Output: Hello, undefined! (or Hello, [window object]! in browsers)
}



const obj = {
    name: 'John',
    greet: function () {
        const arrowGreet = () => {
            console.log(`Hello, ${this.name}!`);
        };

        arrowGreet();
    }
};

// obj.greet(); // Output: Hello, John!

const globalArrowGreet = obj.greet;
// globalArrowGreet(); // Output: Hello, John!


function say() {
    return this.name
}

const tell = () => {
    return this.name
}

var name = "Sanju"
const person = {
    name: "Akash",
    age: 23,
    tell,
    say
}

// console.log(person);
// console.log(person.say());
// console.log(person.tell());

//Faru Question

// x=8;
// console.log(x);
// const x;

// x=8;
// console.log(x);
// const x;

// x=8;
// console.log(x);
// var x;

// let x=8;
// x=10
// console.log(x);


// let a=34
// a=89;
// console.log(a);

// const a=34
// a=89;
// console.log(a);

//spread opr  -clone obj and merged obj

let obj1 = { x: "hi", y: "bye" }
let clonedObj = { ...obj1 }
// console.log(clonedObj);
let obj2 = { a: "Yes", b: "No" }

let mergedObj = { ...obj1, ...obj2 }

// console.log(mergedObj);

//Promoise- to handle async request

var p = new Promise((Resolve, Reject) => {

})
// console.log(p);

var p1 = new Promise((Resolve, Reject) => {
    Resolve("hi agam")
})
// console.log(p1);

// p1.then((data)=> console.log("417 ", data))

//Arrow function

function ag() {
    console.log("424", this);
}
// ag()

const ar = () => {
    console.log("429 ", this);
}
// ar()
//Array Sort

const arrx = [1, 3, 4, 1, 3, 10]
const arry = [1, 3, 4, 1, 3, 11]
const c = arrx.slice(2, 4)
// console.log(c);
// console.log(arrx);

// console.log(arrx.slice(1,4));

const arrs = ['adc', 'aaa', 'acb']
//asc
const out = arrs.sort((a, b) => {
    return a - b
})
// console.log(out);

//desc
const outd = arrs.sort((a, b) => {
    return b - a
})
// console.log(out);

//sort the alphabetics


//Rest Parameters

function add(...numbers) {
    let sum = 0
    for (num of numbers) {
        sum += num
    }
    // console.log(numbers);
    // console.log(sum);
}
add(1, 3, 9)

const outA = arrs.sort((a, b) => {
    return (a > b) - (a < b)
})
// console.log(outA);

const outB = arrs.sort((a, b) => {
    return (a < b) - (a > b)
})
// console.log(outB);

//Prototype

// console.log(arrx)

// console.log(arrx.__proto__)

Array.prototype.sumg = function () {
    return this.reduce((acc, it) =>
        acc + it, 0)
}
// console.log(arrx.sumg());
// console.log(arry.sumg());

//Object keys and values

// const personTwo={name:"agam", age:4}
// const ent=Object.entries(personTwo)
// console.log(ent);
// for(let [k,v] of ent){
//     console.log(k,v);
// }


//map and forEach

const arx = [2, 5, 3, 5, 7]

const arMap = arx.map(a => a + 2)

const arFor = arx.forEach((a, i) => {
    arx[i] = a + 3
})

// console.log(arMap);
// console.log(arFor);
// console.log(arx);



/**
 * 
 The Nodejs event loop implementation differs from the browser-based event loop one.

This is a huge point of confusion in the Nodejs community.

While Nodejs uses the Google V8 as it's runtime, it does not use V8 to implement the event loop.

Nodejs uses the Libuv library (written in C) to implement the event loop.

The digram you have above, which works for the JS event loop, is not the same for the Nodejs event loop.


 */

//Its Coding doctor

//1) Remove duplicates from string
const userName = "agam sahu gsj"
const uniqueName = [... new Set(userName)].join("")
// console.log(uniqueName);

//2 Reverse a string
const string = "This is a coding doctor"
const revStr = string.split(" ").reverse().join(" ")
// console.log(revStr);

//3 Find occurence of words in an array

const arrOcc = ["hello", "guys", "hello", "javascript", "react", "javascript"]

// const countWordOccurence=()=>{
//     const count={}

//     arrOcc.forEach((word)=>{
//         if(count[word]){
//             count[word]++
//         }else{
//             count[word] =1
//         }
//     })
//     return count
// }
// console.log(countWordOccurence())

//Find maximum number in array

// const arrMax=[1,10, 3,5, -4]

// const findMaxNum=(arr)=> arr.reduce((prev, curr)=> prev>curr ? prev : curr)

// console.log(findMaxNum(arrMax));

//Find unique value

// const arrU=[1,2,1,3,4,3]

// console.log([...new Set(arrU)]);

// const unique= arrU.filter((item, index, array)=> array.indexOf(item)=== index)

// console.log(unique);

const arrR = [1, 2, 3, 4]
//  console.log(arrR.reverse());

const reversed = arrR.reduceRight((acc, ele) => {
    acc.push(ele)
    return acc
}, [])

console.log(reversed);

//Remove falsy value

// const arrFal=[1,null, false,"coding", undefined]

// console.log(arrFal.filter(Boolean));

//Convert string to Number

const str="25"

// console.log(str)
// console.log(str - 0)
// console.log(+str)
// console.log(Number(str))
// console.log(parseInt(str))

//last n elements from the array

// const arrL=[1,2,3,4,5,6,7,8,9]

const extArr=(arr, n)=>{

// return arr.slice(arr.length -n)
return arr.slice(-n)
}
// console.log(extArr(arrL, 2));

//count negative number in a numbers array


const arrN=[1,-2,3,4,-5,6,7,-8,9]

console.log(arrN.filter((num)=> num <0))
console.log(arrN.filter((num)=> num <0).length)

//using reduce

const op= arrN.reduce((acc, cur)=> (cur < 0? acc+1: acc),0)

console.log(op);

//Check all elements in array are same

const numArr=[10,10,10,10]

console.log(new Set(numArr).size ===1);

console.log(numArr.every((val, i, arr)=>
    arr[0] === val
));

//Rename Object keys
const  objR={temp: 30, windSpeed:13}  //originbal

 const { temp: wa_temp, windSpeed: wa_windSpeed} =objR  //desc

// console.log(wa_temp)

console.log(Object.assign({}, {wa_temp, wa_windSpeed}));  //copy




































