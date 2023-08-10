console.log("hi agam")


//25 javascript interview question

//Callback fun

function modifiedArray(arr, cb){
    arr.push(100)
    cb()
}
var arr=[1,2,3,4,5]

modifiedArray(arr, function(){
    console.log("array has been modified ", arr);
})

//2 Given a string, reverse each word

// const string= "Welcome to this javasctipt guide"

// var reverseEntireSentence= reverseBySeparator(string, "")

// var reverseEntireSentence= reverseBy


var string = "Welcome to this Javascript Guide!";

// Output becomes !ediuG tpircsavaJ siht ot emocleW
// var reverseEntireSentence = reverseBySeparator(string, "");

// Output becomes emocleW ot siht tpircsavaJ !ediuG
// var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}
console.log(reverseBySeparator(string,""));

/*

var arr = [1, 2, 3, 4, 5];

function cb(){
     console.log("array has been modified", arr);
}
function modifyArray(arr, callback) {
  // do something to arr here
  arr.push(100);
  // then execute the callback function that was passed
  callback();
}

modifyArray(arr,cb);
var arrayList = ['a', 'b', 'c', 'd', 'e', 'f']; // Created array
var anotherArrayList = arrayList;  // Referenced arrayList by another variable
arrayList.splice(0, arrayList.length); // Empty the array by setting length to 0
console.log(anotherArrayList)
console.log(arrayList)

/*

var words = ["the", "quick", "brown", "fox"];
var wordLengths = words.map(word => word.length);
console.log(wordLengths)

var words = ["the", "quick", "brown", "fox"];
var wordLengths2 = [];
words.forEach(word => wordLengths2.push(word.length));
console.log(wordLengths2)

var words = ["the", "quick", "brown", "fox"];
var wordLengths3 = [];
var i;
for (i = 0; i< words.length; i++) {
    var word = words[i];
    wordLengths3.push(word.length);
}
console.log(wordLengths3)

const nums = [1, 2, 3, 4, 5];
const summer = (a, b) => a + b;
const sum = nums.reduce(summer, 0);
console.log(sum)

function greeter(greeting) {
    return function (greetee) {
      console.log(greeting + ", " + greetee + "!");
    }
  }
  greeter("Hello")("Candidate")


(function(){
    var a = b = 42;
  })();
   
  console.log(typeof a);
  console.log(typeof b);
*/


function createBase(baseNumber) {
  return function(N) {
    return baseNumber + N;
  }
}

var addSix = createBase(6);
console.log("10 ",addSix)
console.log("11 ",addSix())
console.log("12 ",addSix(3))
console.log(" 13",addSix(9)(5))
addSix(10);