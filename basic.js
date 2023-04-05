// let person={name:"agam"}
// let name

// console.log(name);
// console.log(typeof name);

//1 Var Scope

// var count=1;
// var age=20

// function sum(a,b,c){
//     var count=2
//     return a+b+c
// }
// if(age>18){
//     var count=3;
//     console.log(count);
// }

//2 Let Scope

// let count=1;
// let age=20

// function sum(a,b,c){
//     let count=2
//     return a+b+c
// }
// if(age>18){
//     let count=3;
//     console.log(count);
// }

//3 String Literals
// let title="Mr."
// let name="Agam"

// let sentence=`Hi there ${title} ${name}`
// console.log(sentence);

// //String access character by index
// let education="graduate"

// console.log(education[0]);
// console.log(education[2]);

// //String length property like in array

// console.log(education.length);

// console.log(education.toUpperCase());
// console.log(education.toLowerCase());

// console.log(education.indexOf('u')); //4
// console.log(education.indexOf('z')); //-1

//Immutabilty of string
const text= "Hero"
// console.log(text[1]);
// text[2]="u"
// console.log(text);

//includes
// console.log(text.includes("e")); //t
// console.log(text.includes("f"));  //f

// const x="     Hi dear       "
// console.log(x);
// console.log(x.trim()); // remove white space at start and end

//slice - start index and end index excluded
// let words="Hello"
// console.log(words.slice(1,3));
// console.log(words.slice(1));
// console.log(words.slice(-1));

//split()
let newWords="Hello world"
console.log(newWords.split(" "));
console.log(newWords.split(""));
console.log(newWords.split("o"));

let word="Hello"
console.log(word.split(''));
console.log(word.split('l'));
console.log(word.split('o'));

