// const outerDiv = document.getElementById('outer');
// const innerDiv = document.getElementById('inner');
// const button = document.getElementById('button');

// //Event bubbling

// outerDiv.addEventListener('click', function() {
//   console.log('Outer div clicked');
// });

// innerDiv.addEventListener('click', function(e) {
//     e.stopPropagation()
//   console.log('Inner div clicked');
// });

// button.addEventListener('click', function(e) {
    
//   console.log('Button clicked');
// })

//

// function xyz(event){
// alert("current Target "+event.currentTarget.tagName+" target "+event.target.tagName+" this "+this.tagName)
// }

// outerDiv.addEventListener('click', xyz);
  
// innerDiv.addEventListener('click',xyz);
  
// button.addEventListener('click',xyz)

//Event capturing or event trickling



// outerDiv.addEventListener('click', function() {
//   console.log('Outer div clicked');
// }, {
//     capture:true
// });

// innerDiv.addEventListener('click', function() {
//   console.log('Inner div clicked');
// },{
//     capture:true
// });

// button.addEventListener('click', function() {
//   console.log('Button clicked');
// },{
//     capture:true
// })

document.querySelector('.products').addEventListener('click', function(e){
    console.log(e);
    // if(e.target.tagName === "SPAN"){
    //     // window.alert("hi")
    //     window.location.href+= "/"+e.target.className
    // }

    if(e.target.closest("SPAN")){
        // window.alert("hi")
        window.location.href+= "/"+e.target.className
    }
})

//output question

const outerDiv = document.getElementById('outer');
const innerDiv = document.getElementById('inner');
const button = document.getElementById('button');

//Event bubbling

outerDiv.addEventListener('click', function() {
  console.log('Outer div clicked');
});

innerDiv.addEventListener('click', function(e) {
  console.log('Inner div clicked');
},{
    capture:true
});

button.addEventListener('click', function(e) {
    
  console.log('Button clicked');
})