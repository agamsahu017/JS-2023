// //Reverse - Mutate the original array

// let letters=["a","b","c","d"]
// const x=letters.reverse()
// console.log(x);
// console.log(letters);

// //concat
// let nums=[1,2,3,4]
// let concated= nums.concat(letters)
// console.log(concated); //non mutating
// console.log([...nums, ...letters]);

// //join //Non mutating
// console.log(typeof letters);
// let joined= letters.join(' ')
// console.log(joined);
// console.log(typeof joined);
// //changes into string and data type also

// let num=[3,5,7,9,8,3,4]
// let extractedArray=num.slice(1,4)
// let extractedArray=num.slice(2) //till the last index
// let extractedArray=num.slice(-3,-1) //till the last index
// console.log(num);
// console.log(extractedArray);

// let updated= num.splice(1,2,-89) //mutated
// let updated= num.splice(1,0,-89,56) //mutated
// console.log(num);
// console.log(updated);

//at()
// console.log(num[0]);

// const x=num.at(-2) //getting the last element of the array
// console.log(x);
//Find the last item from the array

// console.log(num[num.length-1]);
// console.log(num.splice(-2));
// let t=num.splice(-2)
//  console.log(t[1]);

//at method also work on strings

// let name="Roshan"
// console.log(name.at(2));
// console.log(name.at(-2));

const salaries=[3000,5000,8000,9000]

const newSalries=salaries.map((salary)=>{
    let incrementedSalary=salary/2
    return salary+incrementedSalary
})
// console.log(newSalries);

const gifts=["watch", "ring","chocolates","teddy bear","pen","watch","iphone"]

// const filteredGifts=gifts.filter((gift)=>
// {
//     return gift === "ring" || gift === "watch"
// }
// )
// console.log(filteredGifts);

// const filteredGifts=gifts.filter((gift)=>
// {
//     if( gift == "ring" || gift =="watch")
//     return true
// }
// )
// console.log(filteredGifts);

// let num1=[1,4,6,9,10]

// const sum=num1.reduce((total, cValue)=>{
//    return total=total+cValue
// }, 0)

// console.log(sum);

 let students=[{id:1, name:"agam"}, {id:2, name:"vijay"}, {id:1, name:"gita"}]

// const result=students.find((student)=>{
//    return student.id == 1
// })
// console.log(result);
//return undefined , if no result found

//findIndex method
// execute function for each array element
//It return "index" of that array element  who first pass the test

// const ages=[11,12,16,3]

// let result= ages.findIndex((age)=>{
//     return age<4
// })

// const result= students.findIndex((student)=>{
//     return student.id === 1
// })
// console.log(result);

// console.log(result);

//some method
// let scores=[25,33,56,23,89,12]

// let result= scores.some((score)=>{
//     return score <33
// })
// // console.log(result);

// let newResult= scores.every((score)=>{
//     return score <78
// })
// console.log(newResult);

//every method

//flat method
// let arr=[1,2,3,[4,5,[6,7,8]]]

// // console.log(arr);

// const result= arr.flat(2)  //by default 1 value
// //no effect on the original array
// // console.log(result);

// let cart=[{
//     name:"Mobile Phone",
//     qty:2,
//     price:500
// },
// {
//     name:"Tablet",
//     qty:1,
//     price:1000
// }
// ]

// let newCart=cart.flatMap((item)=>{
//    if(item.name === "Mobile Phone"){
//     return [item,{
//         name:"Screen protector",
//         qty:1,
//         price:100
//     }
//     ]
//    }else{
//     return item
//    }
// })
// console.log(newCart);

//Sorting

// let s=['r','t','q','a','b','c','c','a']
// console.log(s.sort());
// console.log(s.reverse());

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
// console.log(fruits);
fruits.reverse()
// console.log(fruits);

// const points = [40, 100, 1, 5, 25, 10];
const points = [40, 100, 1, 5, -25, -10];
// points.sort(function(a,b){ return a-b})

//asc order
points.sort((a,b)=> a-b)
//desc order
// points.sort((a,b)=> b-a)
// console.log(points);

//chain of methods
let num=[1,2,3,4,5,6,7]

let result=num.slice(0,3).splice(2,1,89).push(56,46,90)
console.log(num, result);

