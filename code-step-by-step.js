
let str="Hello, how are you?"
console.log(str);
console.log([str]);
console.log([...str]);
console.log("17 ", str.split());
console.log("18 ", str.split(''));
console.log("19 ", str.split(' '));
console.log('20 ', str.split('a'));

let str="Hello, How are you?"
console.log(str.replace("H","_"));
console.log(str.replace(/H/g,"_"));

console.log(str);
console.log(str.substring(6, 13));
console.log(str.substring(1,str.length));
console.log(str.substring(0,str.length-1));

let temp=str.split('o')
console.log(temp);
console.log(temp[0]);

let str = "   Hello?           "
console.log("13 ", str);
console.log("14 ", str.trim())

let data=[4,7,1,4,9,2,4,1]
data.length=3
console.log(data);


// console.log("hi agam")
let data=[4,7,1,4,9,2,4,1]
data.length=7
console.log(data);

let sum=data.reduce((x,y)=>{
return  x+y
},0)
console.log("20 ", sum);

 let x=7, y=3;

 [x,y]=[y,x]

 console.log(x);
 console.log(y);

///////////

let data=[4,7,1,4,9,2,4,1]

const temp=new Set(data)
console.log(temp);
console.log([...temp])

let data=[4,7,1,4,9,2,4,1]
data.length=7
console.log(data);

let sum=data.reduce((x,y)=>{
return  x+y
},0)
console.log("18 ", sum);
let mul=data.reduce((x,y)=>{
  return  x*y
  })
console.log("22 ", mul);

let str1="  sagar  "
let str2="patel"

let str3= str1.concat(str2)
console.log(str3);
console.log(str1);
console.log(str1.trim());
console.log(str1.trimStart());
console.log(str1.trimEnd());

///////////////////////////////////////

let x=10;
x=(x++, x)
console.log(x);
let y=(36,58)
console.log(y);
