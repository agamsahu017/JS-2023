console.log("es6");

// let items=[2,3,4,5,6]
// const [a,b,c,d,e]=items
// console.log(items);
// console.log(a);
// console.log(b);
// console.log(c);

// let hotel={
//     name:"hotel1",
//     location:"street No xyz Delhi",
//     categories:["chinese", "italian", "English"],
// }
// let [first, ,third]= hotel.categories
// console.log("chin, english ",first, third);

//switch the category
// let temp=first;
// first=third;
// third=temp
// console.log("eng chin ",first, third);

//Swapping

// [third, first]=[first, third]  //chin eng
// console.log("chin",third);
// console.log("eng ",first);

//Destructuring of nested arrays

// let nums=[2,3,[6,9]]
// let [a,,[b,f]]= nums
// console.log(a,b,f);

//Object desctructing

let hotel={
    name:"Agam hotel",
    location:"xyz gomti nagar",
    categories:["chinease","italian", "english"],
    mainMenu:["FoodA","FoodB","FoodC"],
    starterMenu:["SpecialFoodA","SpecialFoodB","SpecialFoodC"],
    openingHours:{
        sunday:{open:"09:00AM", close:"09:00PM"},
        monday:{open:"10:00AM", close:"10:00PM"},
        wednesday:{open:"11:00AM", close:"09:00PM"},
        tuesday:{open:"11:00AM", close:"09:00PM"},
    }
}
// let {name, location, mainMenu}=hotel

// console.log(name);
// console.log(location);
// console.log(mainMenu);
// console.log(name);

//Set customize name to object property

// let {name:hotelName, location:hotelLocation, mainMenu}=hotel

// console.log(hotelName);
// console.log(hotelLocation);
// console.log(mainMenu);

//setting default values

// let {name, Menu=[], categories=[]}= hotel

// console.log(name);
//  console.log(Menu);
//  console.log(categories);

//desctructing nested objects

let {name, openingHours:{sunday:{open, close}, monday}}= hotel

// console.log(name);
// // console.log(sunday);
// console.log(open);
// console.log(close);

let nums=[2,3,5,7,8,9]
// console.log(...nums);
// console.log(2,3,5,7);
//1
let newArray=[9,10,...nums]
// console.log(newArray);

let updatedMenu=[ ...hotel.mainMenu, "FoodE","FoodF"]
// console.log(updatedMenu);

//Shallow Copy 
//create a shallow copy using spread operator

let copyArray=[...updatedMenu]
copyArray[1]="UpdatedFood"
// console.log(copyArray);

//Spread(...) operator RHS


//we can also use operator on strings 
let passion="programming"
// console.log(...passion);


//Rest pattern and parameter 
//Syntax of REST (...) (LHS) - get elements and packed into the array

let [a,b, ...x]= nums

// console.log(a);
// console.log(b);
// console.log(x);

let {wednesday, ...weekDays}=hotel.openingHours
// console.log(sunday);
// console.log(weekDays);
// console.log(wednesday);

//Short circuit

// let result1= 5000 && 0
// let result= null && 0
// let result= 0 && null
// let result= "" && "coders"
// let result= "aga" && "coders"
// let result= "aga" && "" && "coders"
// let result= "aga" && 0 && "coders"
// && -> last true vale
//OR  -> first true value

// let result= "Coders" || 0
// let result= "Coders" || "programmers"
// let result= "" || "programmers"
// let result= "" || null

// console.log(result); //last values comes
//nullish coalesing operator (??) only null and undefined
// 0 is a valid value

// let numGuests=0
// let result= numGuests || 10 //default assignment
// let result1= numGuests ?? 10 //default assignment
// console.log(result);
// console.log(result1);
//0 is a not a nullish value

//For of loop ->array

let menu=[...hotel.mainMenu, ...hotel.starterMenu]
console.log(menu);

for(let elem of menu){
    // console.log(elem);
}

// for(let item of menu.entries()){
// // console.log(item);
// console.log(`${item[0]+1} : ${item[1]}`);
// }

for(let [k,v] of menu.entries()){
    //  console.log(k);
     console.log(`${k+1} : ${v}`);
    }
