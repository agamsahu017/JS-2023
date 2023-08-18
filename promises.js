console.log("start");
// console.log(Promise.resolve("hi there"))
const sub = Promise.resolve("hi there");
const sub1 = Promise.reject("this reject");

console.log("7 ", sub);
console.log("8 ", sub1);

sub.then((res)=>{
    console.log(res);
})

sub1.then((res)=>{
    console.log(res);
}).catch((x)=>{
    console.log(x);
})

console.log("end");