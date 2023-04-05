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
// let newWords="Hello world"
// console.log(newWords.split(" "));
// console.log(newWords.split(""));
// console.log(newWords.split("o"));

// let word="Hello"
// console.log(word.split(''));
// console.log(word.split('l'));
// console.log(word.split('o'));

// let a=5
// let b=6;
// let c= a%b;
// console.log(c);

//Airthmetic operators

// console.log(a++); //
// console.log(a+2);  
// console.log(a--); //
// console.log(a-2);/

//Loose equality
// let age="20"
// if(age == 20){
//     console.log("it works");
// }else{
//     console.log("it does not works");
// }

// //strict equality

// if(age === 20){
//     console.log("it works");
// }else{
//     console.log("it does not works");
// }

//Type  coercion
// let a=5
let b="6"

// console.log(a+b);
// console.log(a*b);
// console.log(a-b);

let c=5;
let d="hi"

// console.log(c+d);
// console.log(c-d);
// console.log(c*d); //NaN Not a number
// console.log(c+d);

//Type conversion
// console.log(b);
// console.log(typeof b);
// b=Number(b)
// console.log(typeof b);

//Arrays
// let numbers=[3,11,18,4,40,25]
// console.log(numbers[3]);  //Reading array
// console.log(numbers[1]);

// //writing array
// numbers[9]=56
// console.log(numbers);
// //array length
// console.log(numbers.length);

//Array push function return the array length
// let x=numbers.push(89)
// let y=numbers.push(93)
// console.log(x);
// console.log(y);

// let t=numbers.pop()
// let u=numbers.pop()
// console.log(t);
// console.log(u);

// //indexOf()
 let animals=['cat','dog','goat']
// console.log(animals.indexOf('goat'));
// console.log(animals.indexOf('fox'));

//concat function
let birds=["owl","hawk", "spa"]

console.log(animals.concat(birds));
var code="pak"
//switch
switch(code){
    case "in":
        console.log("hi india")
        break;
    case "pak":
        console.log("hi pak")
        break;
    case "usa":
      console.log("hi usa")
      break;
      default:
      console.log("hi default")
}
// console.log(birds.concat(animals));

//While loop

 let arr=[31,62,73,54]
// let i=0

// while(i<arr.length){
// console.log(arr[i]);
// i++
// }

//Break

// let i=0;
// console.log(i);

// while(i<arr.length){
// console.log(arr[i]);
// i++
// }

// let i=0;
// while(i<arr.length){
//     if(i==2){
//         break;
//     }
// i++
// }
// console.log(i);
// console.log(arr[i]);

// Continue

 let str="";

// for(let i=0; i<10; i++){
//     if(i==7){
//         continue
//     }
//     str=str+i
// }
// console.log(str);


// let i=0
// while(i<10){
// if(i==6){
// continue 
// }
// str=str+i 
// i++
// }
// console.log(str);

//Truthy Values

let age=23
if(age){
    console.log("hi priented");
}
