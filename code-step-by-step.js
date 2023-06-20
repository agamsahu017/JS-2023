//1
let a=[];
let b=[]
console.log(a == b)    //memory location compare hote hai, jo different hai
console.log(a === b)

//2
let a=[];
let b= a;
console.log(a == b)   //ab34y# same memory location is case me
console.log(a === b)  //ab34y#

//3
let a=[20]
let b=[20]
console.log(a[0] == b[0])   //value compare hoge
console.log(a[0] === b[0]) 

//or

let a=[20]
let b=['20']
console.log(a[0] == b[0])   //value compare hoge
console.log(a[0] === b[0])

//4
let z=[1,2,3,4]
let a={name:"anil"}
console.log(...z)  //1,2,3,4

//5
console.log(typeof NaN)  //number

//or
var x="agam"/2
console.log(typeof x)


//6
let data= 10 - -10
console.log(data)

//7
const set= new Set([1,1,2,3,4])
console.log(set) //[1,2,3,4]

//8
let data={ name: "Anil"}
console.log(delete data.name)  // true
console.log(data) 


//9
let data={ name: "Anil"}
console.log(delete data)  //false

//10
const data=["Peter", "anil", "sam"]
const [y]=data
console.log(y)

//11 -Find the second element
const data=["Peter", "anil", "sam"]
const [,y]=data
console.log(y)

//12
const data={ name: "anil", age:29, skill:"JS"}
//get property name w/o dot . operator 
const {age}= data;
console.log(age)
console.log(data["skill"])

//13
//merge two objects

const data={ name: "anil", age:29, skill:"JS"}
let info={ city:"Noida", mail:"anil@test.com"}

let d= {...data, ...info}
console.log(d)


//14
//merge two objects

const data={ name: "anil", age:29, skill:"JS"}
let info={ city:"Noida", mail:"anil@test.com"}

let d= {data, ...info}
console.log(d)

//15

const data={ name: "anil", age:29, skill:"JS"}
let info={ city:"Noida", skill:"Node"}

let d= {...data, ...info}
console.log(d)

//16
const name="Anil"
console.log(name());  //name is not a function

//17
const result= false || {} || null  // first positive value  // {}
console.log(result)

const result= false && {} && null  // first positive value  // false
console.log(result)

//18

const result= null || false || ''  // if all false then in this case last option
console.log(result)

//19
const result= [] || 0 || true  // if all false then in this case last option
console.log(result)

//20
console.log(Promise.resolve(5))  //Promise {<fulfilled>: 5}

//21
console.log("dil"==="dil")  // unicode comparision takes place

//22 
JSON.parse()
==> Parses JSON to a JS value

//23

let name="agam"

function getName(){
	console.log(name)
	let name="agam"
}
getName()  // Cannot access 'name' before initialization


var name="agam"

function getName(){
	console.log(name)
	var name="agam"
}
getName() 

//24

let name="anil Sadhu"
function getName(){
	console.log(name)
}
getName() 


//26) o/p should be 6

function sumValues(x,y,z){
	return x+y+z
}
sumValues(...[1,2,3]) 

//27

console.log(`${(x=>x)('I love')} to program`)

//28
const name="Agam Sa"
console.log(!typeof name === "object")
console.log(!typeof name === "string")
console.log(!typeof name === false)

//29
const name="Agam Sa"
const age=21
console.log(isNaN(name))   //t
console.log(isNaN(age))     //f

//30

let person={name:"Anil"}
//what can modify person object
Object.seal(person)
person.age=32
console.log(person)

//31 Remove first element
let data=[2,9,0,10]
data.shift()
console.log(data)


//31 Remove last element
let data=[2,9,0,10]
data.pop()
console.log(data)

//32
let a=31
console.log(a%2)
//check for any value is odd or even

//33
let data="true"
//convert  data to boolean false value

console.warn( typeof !data)

var x=!data
console.log(x)

//34 convert data to boolean true value

let data="true"
console.log(!!data)

//35
let data=["anil", "peter", "bruce"]
delete data[1]
console.log(data)
console.log(data.length)

//36 
let a=[1,2,3]
let b=[4,5,6]
let c=[...a, ...b]
console.log(c)

//37

let a=[1,2,3,4]
let b=[4,5,6]
let c=[...a, ...b]
console.log(c)

//38

let c= 3**3
console.log(c)

//39

let a=2
setTimeout(()=>{
	console.log(a)
},0)
a=100


//40

let a=2
let A=30
console.log(A)

//41

let A10="like"
let 10A="ok"
console.log(A10)

//42

let a="like"
let b= `like`
console.log(a === b)

//43

let a=1;
let c=2
console.log(--c === a)

//44

let a=1;
let b=1
let c=2
console.log(a ===b === -c)

//45
console.log(3*3)
console.log(3**3)
console.log(3***3)

//51

function fruit(){
	console.log(name)
	console.log(price)
	
	var name="Apple";
	let price=20
}
fruit()

//52
for(var i=0; i<3; i++){
	setTimeout(()=> console.log(i), 1)
}

//53
for(let i=0; i<3; i++){
	setTimeout(()=> console.log(i), 1)
}

//54

console.log(+true)
console.log(typeof  +true)


//55
console.log(!"anil")
console.log( typeof "anil")


//56

let data="size"
const bird={
	size:"small"
}

console.log(bird[data])
console.log(bird["size"])
console.log(bird.size)  //small
console.log(bird.data)  // undefined


//57
let c={ name:"peter"}
let d;

d=c;
c.name="anil"
console.log(d.name)

//58
var x;
var x=10;
console.log(x)

//59

var x;
let x=10;
console.log(x)

//60

let a=3;
let b= new Number(3)

console.log(a == b)
console.log(a === b)

//61

let name;
console.log(name)

//62

function fruit(){
	console.log("woof")
}
fruit.name="apple"

fruit()

//64

let number=0;

console.log(number++)
console.log(++number)
console.log(number)

//65
function getAge(...args){
	console.log( args)
	console.log(typeof args)
}
getAge(21)


//66 toDo

//67
const sum=eval('10*10+5')
console.log(sum)  //error

//69

const obj={1:"a", 2:"b", 3:"c"}
console.log(obj.hasOwnProperty("1"))
console.log(obj.hasOwnProperty(1))

//74
const person={ name: "anil"}
function sayHi(age){
	return `${this.name} is ${age}`
}
console.log(sayHi.call(person, 23))
console.log(sayHi.bind(person, 26)())

//75

function sayHi(){
	return(()=> 0)()
}
console.log(typeof sayHi())

//76

function sayHi(){
	return()=> 0
}
console.log(typeof sayHi())

//or
function sayHi(){
	return()=> 0
}
console.log(typeof sayHi()())

//77

console.log(typeof typeof 1)

//80
Everything in JS is either a primitive or object

//81

console.log(!!null)
console.log(!!"")
console.log(!!1)

//83
console.log([..."agam"])


//84 to do


//85
let person= {name:"Peter"};
const members=[person]
person= null
console.log(members)

//86

const person={
	name:"agam",
	age:21
}
for(const item in person){
	console.log(item)
}

//or
const person={
	name:"agam",
	age:21
}
for(const item in person){
	console.log(item)
}

//or
const person={
	name:"agam",
	age:21
}
for(const item in person){
	console.log(person[item])
}

//88

console.log(typeof 3+4+'5')

//89

console.log(typeof (3+4+ +'5'))

//90

console.log([] == [])
console.log({} == {})

//91 toDo


//92

function getInfo(member){
	member.name="agam"
}
const person={ name: "Sarah"}

//99
console.log(!true -true)

//100

console.log(true + +"10")

getInfo(person)
console.log(person)
