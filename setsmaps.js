// console.log("set");

// //sets are just collection of unique values
// let items=[1,2,3,1,4,5,6,5]
// console.log(items);
// let itemSet=new Set(items)
// console.log(itemSet);
// console.log(itemSet.size);
// console.log(itemSet.has(8));
// itemSet.add(9)
// itemSet.add(2)
// itemSet.delete(9)
// console.log(itemSet[2]);
// console.log(itemSet);
// //Set are also iterables
// for(let item of itemSet){
//     console.log(item);
// }
// let name="agam sahu"
// let nameSet=new Set(name)
// console.log(nameSet);
// console.log(nameSet.size);

//Map - Its a data structure which is used to map any values into keys
//Map is like object
//It is like hashmap

let restaurantMap=  new Map()
//adding values

restaurantMap.set("name","Agam")
restaurantMap.set(1,"Address1")
restaurantMap.set(2,"Address2").set(true,"we are open today").set(false,"we are closed today")
console.log(restaurantMap);
console.log(restaurantMap.size);

console.log(restaurantMap.get(2));
