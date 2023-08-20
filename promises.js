//1

// console.log("start");
// function importantAction(username) {
//   setTimeout(() => {
//     return `Subscribe to ${username}`;
//   }, 1000);
// }
// //  const message = importantAction("agam");

// console.log(message);
// console.log("end");

//2

// console.log("start");
// function importantAction(username, cb) {
//   setTimeout(() => {
//     cb(`Subscribe to ${username}`);
//   }, 1000);
// }
// const message = importantAction("agam", function (message) {
//   console.log(message);
// });

// console.log("end");

//3

// console.log("start");

// function importantAction(username, cb) {
//     setTimeout(() => {
//         cb(`Subscribe to ${username}`);
//     }, 1000);
// }
// function likeTheVideo(video, cb) {
//     setTimeout(() => {
//         cb(`Like the  ${video} video`);
//     }, 1000);
// }

// function shareTheVideo(video, cb) {
//   setTimeout(() => {
//     cb(`shared the  ${video} video`);
//   }, 3000);
// }

// importantAction("agam", function (message) {
//     console.log(message);
//     likeTheVideo("my fav video ", function (action) {
//         console.log(action);
//     })
//     shareTheVideo("new vid found shared ", function (x){
//               console.log(x);
//             })
// });
// // likeTheVideo("my fav video ", function (action){
// //     console.log(action);
// //   })
// console.log("end");

//4 Promises

// console.log("start");

// const sub = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let result = true
//         if (result) resolve("i am resolved")
//         else reject(" i am wrong")

//     }, 2000)
// })

// console.log(sub);
// sub.then((res) => {
//     console.log(res);
// }).catch((err) => console.log(err))
// console.log("end");

//5 
// console.log("Start");
// console.log(Promise.resolve("hi there agam"))
// const sub = Promise.resolve("hi there");
// const sub1 = Promise.reject("this reject");



// sub.then((res) => {
//     console.log(res);
// })

// sub1.then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })

// console.log("end");
/////////////////

// //6

// console.log("start");

// function importantAction(username, cb) {
//     setTimeout(() => {
//         cb(`Subscribe to ${username}`);
//     }, 500);
// }
// function likeTheVideo(video, cb) {
//     setTimeout(() => {
//         cb(`Like the  ${video} video`);
//     }, 1000);
// }

// function shareTheVideo(video, cb) {
//     setTimeout(() => {
//         cb(`shared the  ${video} video`);
//     }, 1500);
// }

// importantAction("agam", function (message) {
//     console.log(message);
//     likeTheVideo("my fav video ", function (action) {
//         console.log(action);
//         shareTheVideo("new vid found shared ", function (x) {
//             console.log(x);
//         })
//     })
// });
// console.log("end");

//7 - with promises


console.log("start");

function importantAction(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Subscribe to ${username}`);
        }, 500);
    })
}
function likeTheVideo(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Like the  ${video} video`);
        }, 1000);
    })
}

function shareTheVideo(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`shared the  ${video} video`);
        }, 1500);
    })
}

// importantAction("Agam S").then((res) => {
//     console.log(res)
//     likeTheVideo("my second promise").then((res) => {
//         console.log(res);
//         shareTheVideo("my third video").then((res) => {
//             console.log(res);
//         })
//     })
// }).catch((err) => console.log(err))


// //8 Promise chaining

// importantAction("Agam S").then((res) => {
//     console.log(res)
//     return likeTheVideo("prmose 2")
// }).then((res) => {
//     console.log(res);
//     return shareTheVideo("promos 3")
// }).then((res) => {
//     console.log(res);
// }).catch ((err) => console.log(err))
// console.log("end");

//9 Promise chaining

importantAction("Agam S").then((res) => {
    console.log(res)
    return likeTheVideo("prmose 2")
}).then((res) => {
    console.log(res);
    return shareTheVideo("promos 3")
}).then((res) => {
    console.log(res);
}).catch ((err) => console.log(err))
console.log("end");