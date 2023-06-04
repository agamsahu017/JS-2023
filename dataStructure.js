const isPalindrome=(x)=>{
return  x<0?false: x === +x.toString().split("").reverse().join("")
}
console.log(isPalindrome(11011))

//
const fib=(n)=>{
    const arr=[0,1];
    for(i=2;i<=n;i++){
        arr.push(arr[i-1]+arr[i-2]);
    }
    return arr
}
console.log(fib(8))

///////////////////

const fib=(n)=>{
    const arr=[0,1];
    for(i=2;i<=n;i++){
        arr.push(arr[i-1]+arr[i-2]);
    }
    return arr[n]
}
console.log(fib(8))

/////////////////////////
const fib=(n)=>{
 if(n<=1) return n
 return fib(n-1)+fib(n-2)
}
console.log(fib(3))

///////////////////////////////////////

const fib=(n)=> (n<=1 ? n : fib(n-1)+fib(n-2))
console.log(fib(8))

////////////////// valid Anagram

const isAnagram=(s,t)=>{
   s= s.split("").sort().join("")
   t= t.split("").sort().join("")
   return s === t
}
console.log(isAnagram("anagram","nagaram"));
console.log(isAnagram("rat","car"));
/////////////////////////////

const isAnagram=(s,t)=>{
if(s.length !== t.length) return false
//create a object
let obj1={};
let obj2={};

for (let i=0; i<s.length;i++){
  obj1[s[i]]=(obj1[s[i]] || 0)+1
  obj2[t[i]]=(obj2[t[i]] || 0)+1
}
for (const key in obj1){
  if(obj1[key] !== obj2[key]){
return false
  }
}

return true
}
console.log(isAnagram("anagram","nagaram"))
console.log(isAnagram("rat","car"))
console.log(isAnagram("rat","tar"))
console.log(isAnagram("ratu","taro"))
