const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}
console.log(person.fullName.call(person1))

const person = {
  fullName: function(city, state) {
    return this.firstName + " " + this.lastName+ " -- "+city+ " -- "+state;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

console.log(person.fullName.call(person1, "Lucknow", "up"))

const person = {
  fullName: function(city, state) {
    return this.firstName + " " + this.lastName+ " -- "+city+ " -- "+state;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}
console.log(person.fullName.apply(person1, ["Lucknow", "up"]))

/ //call
// const person1={
//     getName:function(){
//         this.firstName+' '+this.lastName
//     }
// }
// const person2={
//     firstName:"Agam",
//     lastName:"Sahu"
// }
// const person3={
//     firstName:"Raj",
//     lastName:"Singh"
// }

// // let p= 
// console.log(person1.getName.call(person2));

// const person={
//     fullName:function(){
//         return this.firstName+' '+this.lastName
//     }
// }

// const person1={
//     firstName:"Agam",
//     lastName:"Sahu"
// }
// const person2={
//     firstName:"John",
//     lastName:"Doe"
// }
// console.log(person.fullName.call(person1));
// console.log(person.fullName.call(person2));

//Call method with arguements

// const person={
//     fullName:function(city,state){
//         return this.firstName+' '+this.lastName+' '+city+' '+state
//     }
// }

// const person1={
//     firstName:"Agam",
//     lastName:"Sahu"
// }
// const person2={
//     firstName:"John",
//     lastName:"Doe"
// }
// console.log(person.fullName.call(person1,"new delhi","delhi"));
// console.log(person.fullName.call(person2));


// const person={
//     fullName:function(){
//         return this.firstName+' '+this.lastName
//     }
// }

// const person1={
//     firstName:"Agam",
//     lastName:"Sahu"
// }
// const person2={
//     firstName:"John",
//     lastName:"Doe"
// }
// console.log(person.fullName.apply(person1));
// console.log(person.fullName.apply(person2));


// const person={
//     fullName:function(city,state){
//         return this.firstName+' '+this.lastName+' '+city+' '+state
//     }
// }

// const person1={
//     firstName:"Agam",
//     lastName:"Sahu"
// }
// const person2={
//     firstName:"John",
//     lastName:"Doe"
// }
// console.log(person.fullName.apply(person1,["new delhi","delhi"]));
// console.log(person.fullName.apply(person2,['lko','up']));

//Bind

// const person = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function () {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   const member = {
//     firstName:"Hege",
//     lastName: "Nilsen",
//   }
  
//   let fullName = person.fullName.bind(member);
//   console.log(fullName());

// const module = {
//     x: 42,
//     getX: function() {
//       return this.x;
//     }
//   };
// //   console.log(module.getX());

// const unboundGetX = module.getX;
// console.log(unboundGetX()); 

// const person={
//     name:"p1",
//     getName:function(){
//         return this.name
//     }
// }
// const p2={name:"p2"}
// let x=person.getName.bind(p2)
// console.log(x());

//call by reference 

//For in loop

const person = {fname:"John", lname:"Doe", age:25};

for (let x in person){
    console.log(person[x]);
}
