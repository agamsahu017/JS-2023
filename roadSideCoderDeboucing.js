console.log("hi aganm")

//Debounce

// const btn = document.querySelector(".increment_btn");
// const btnPress = document.querySelector(".increment_pressed");
// const count = document.querySelector(".increment_count");

// let pressedCount = 0;
// let triggerCount = 0;

// const debouncedFn= _.debounce(()=>{
//     count.innerHTML = ++triggerCount;
// }, 800)

// btn.addEventListener("click", () => {
//   // console.log("hi preessed");
//   btnPress.innerHTML = ++pressedCount;
//   debouncedFn()
// });

//Throttle

// const btn = document.querySelector(".increment_btn");
// const btnPress = document.querySelector(".increment_pressed");
// const count = document.querySelector(".increment_count");

// let pressedCount = 0;
// let triggerCount = 0;

// const start= new Date().getTime()

// const throttleFn= _.throttle(()=>{
//     const now= new Date().getTime()
//     console.log(now - start);
//     count.innerHTML = ++triggerCount;
// }, 1000)

// btn.addEventListener("click", () => {
//     // console.log("hi preessed");
//     btnPress.innerHTML = ++pressedCount;
//     throttleFn()
//   });

//DEBOUNCE POLYFILL

// const btn = document.querySelector(".increment_btn");
// const btnPress = document.querySelector(".increment_pressed");
// const count = document.querySelector(".increment_count");

// let pressedCount = 0;
// let triggerCount = 0;

// const myDebounce = (cb, d) => {
//     let timer;
//     return function (...args) {
//         if (timer) clearTimeout(timer)
//         timer = setTimeout(() => {
//             cb(...args)
//         }, d)
//     }
// }

// const debouncedFn = myDebounce(() => {
//     count.innerHTML = ++triggerCount;
// }, 800)

// btn.addEventListener("click", () => {
//     // console.log("hi preessed");
//     btnPress.innerHTML = ++pressedCount;
//     debouncedFn()
// });

//Throttle Polyfill

const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

let pressedCount = 0;
let triggerCount = 0;

const myThrottle = (cb, d) => {
    let last = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - last < d) return
        last = now
        cb(...args)
    }
}

const throttledFn = myThrottle(() => {
    count.innerHTML = ++triggerCount;
}, 800)

btn.addEventListener("click", () => {
    // console.log("hi preessed");
    btnPress.innerHTML = ++pressedCount;
    throttledFn()
});

// console.log("start");

