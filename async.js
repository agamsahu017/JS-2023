// console.log(1)
// console.log(2)
// setTimeout(()=>{
//   console.log("i am callback function");

// }, 3000)
// console.log(3)
// console.log(4)
// import data from
const toDO = (callBack) => {
    //Making HTTP request
    let request = new XMLHttpRequest()
    console.log(request);
    console.log(request.readyState);

    request.addEventListener('readystatechange', () => {
        // console.log("15", request, request.readyState);
        if (request.readyState == 4 && request.status == 200) {
            // console.log(request.responseText);
            // console.log(typeof request.responseText);
            let data=JSON.parse(request.responseText)
            // callBack(undefined, request.responseText)
            callBack(undefined, data)
        } else if (request.readyState === 4) {
            console.log("Data could not be feteched");
            callBack("some error in the data ", undefined)
        }
    })

    //setup the request
    // request.open('get', 'https://jsonplaceholder.typicode.com/users')
    request.open('get', "./data.json")


    //sending the request

    request.send()
}

console.log(1);
console.log(2);
toDO((error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
    console.log("i am inside the toDo function");
})
console.log(3);
console.log(4);
