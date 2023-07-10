console.log("hi agam je");

//reduce function
const nums = [1, 2, 3, 4]

const res = nums.reduce((acc, cur, i) => {
    console.log(acc, cur, i);
    return acc + cur
}, 9)

console.log(res);

//Pollyfill for map

Array.prototype.myMap = function (cb) {
    let temp = []
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this))
    }
    return temp
}

const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);


const map2 = array1.myMap(x => x * 2);

console.log(map2);


//Polyfill for filter

Array.prototype.myFilter = function () {
    let temp = []
    for (let i = 0; i < this; i++) {
        if (cb(this[i], i, this)) {
            temp.push(this[i])
        }
    }
    return temp
}

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);

const result1 = words.filter(word => word.length > 6);

console.log(result1);

//Reduce method Polyfill

//arr.reduce((acc, curr, i, arr)=>{}, initialValue)

Array.prototype.myReduce = function (cb, initialValue) {
    var accumulator = initialValue
    for (let i = 0; i < this.length; i++) {

        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i]
    }
    return accumulator
}


const array2 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array2.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);

//
const initialValue = 10;
const sumWithInitial = array2.myReduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);

console.log(sumWithInitial);

//Map and forEach

const mapResult = array2.map((num) => num * 2)
const forEachResult = array2.forEach((num) => num * 3)
const forEachResult2 = array2.forEach((num, i) => {
    array2[i] = num * 4
})

console.log(mapResult);
console.log(forEachResult);
console.log(forEachResult2);
console.log(array2);


//MAP, filter and reduce

let students = [
    { name: "Kapil", rollNumber: 31, marks: 80 },
    { name: "Jenny", rollNumber: 15, marks: 69 },
    { name: "Kausal", rollNumber: 16, marks: 35 },
    { name: "Dilpreet", rollNumber: 7, marks: 55 },
]


//1) 
let names = [];
for (let i = 0; i < students.length; i++) {
    names.push(students[i].name.toUpperCase())
}

console.log(names);
//6

let output = students.map(stu => {
    if (stu.marks < 60) {
        stu.marks += 20
    } else {
        stu.marks
    }
    return stu
}).filter(x => x.marks > 60).reduce((acc, cur) => acc + cur.marks, 0)
console.log(output);

//function
//spread operator

// function multiply(num1, num2){
//     console.log(num1*num2);
// }
// var arr=[8,9]
// multiply(...arr)

//rest operator

function multiply(...nums) {
    console.log(nums[0] * nums[1]);
}
var arr = [6, 8]
multiply(...arr)

//cb fun

function greeting(name) {
    alert(`Hello, ${name}`);
}

// function processUserInput(callback) {

//     // console.log("160 ", name);
//     callback(name);
//     const name = prompt("Please enter your name.");
// }

// processUserInput(greeting);

//Computed Objects

const property = "firstName";
const username = "agam sahu"

// const user={
//     property:username
// }

const user = {
    [property]: username
}
console.log(user);

// mulBy2(obj)

let numsOne = {
    a: 100,
    b: 200,
    title: "my nums"
}

multiplyByTwo(numsOne)

function multiplyByTwo(obj) {
for(key in obj){
if(typeof obj[key]=== "number"){
    obj[key]*=2
}
}
}
console.log(nums);


//for in loop

const userA={
    name:"agam",
    age:13,
}
for(key in userA){
    console.log(userA[key]);
}