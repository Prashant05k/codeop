//https://www.linkedin.com/pulse/tricky-equations-javascript-zahid-hasan-emran?trk=pulse-article

var a=5+true;
console.log(a)

//--------------------------------------
const sum = (a, ...o) => {
    // console.log(a, o)
    if(o.length){
        return a+o[0]
    }else{
       return (b) => {
        return a+b
    } 
    }
    
}

console.log(sum(2,3))
console.log(sum(2)(3))


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
console.log(2 + '2') //22
console.log(2 - '2') //0
console.log(1 +  "2" + "2"); // 122
console.log(1 +  +"2" + "2"); //32
console.log(1 +  -"1" + "2"); //02
console.log(+"1" +  "1" + "2"); //112
console.log( "A" - "B" + "2"); // NaN2
console.log( "A" - "B" + 2);  // NaN

console.log("0 || 1 = "+(0 || 1)); //1
console.log("1 || 2 = "+(1 || 2));  // 1
console.log("0 && 1 = "+(0 && 1)); //0
console.log("1 && 2 = "+(1 && 2)); // 2

console.log(false == '0') // true
console.log(false === '0') // false

//----------------------------------------------------------------

let nums = [2, 4, 5, 7, 7, 6, 4] //Remove duplicacy
console.log([...new Set(nums)]) //[2, 4, 5, 7, 6]

//----------------------------------------------------------------

console.log((function(a, b){return a + b})(2, 4)) //IIFE

//----------------------------------------------------------------

let func = function(){ 
    {
      let a = 'let';
      var b = 'var';
    }
    console.log(b) //var 
    console.log(a) //not defined
    
  }
  //var has functional scope, let has block scope
  func();

  //the var should not print value
//   let func = function(){

//     (function(){
//       let a = 'let';
//       var b = 'var';
//     })()
//     // {
//     //   let a = 'let';
//     //   var b = 'var';
//     // }
//     console.log(b) //var
//     console.log(a) //not defined
    
//   }
//   //var has functional scope, let has block scope
//   func();
  
//---------------------------------------------------------------

console.log(5 < 6 < 7); //true
console.log(7 > 6 > 5); //false

//--------------------------------------------------------------

let a = () => arguments;
console.log(a('Hi')) //arguments is not defined

function a () { return arguments }
console.log(a('Hi')) //Arguments ['Hi', callee: ƒ, Symbol(Symbol.iterator): ƒ]

//-------------------------------------------------------------

// let x = function(){
//     return  //;
//     {
//       msg: 'HI'
//     }
//   }
  
//   console.log(x()) //undefined

//---------------------------------------------------------------

let profile = {
    name: 'Prash'
  }

  profile.age = 24;

  console.log(profile) //prevent user from adding new property to object profile // {name: 'Prash', age: 24}



  let profile = {
    name: 'Prash'
  }
  Object.freeze(profile)
  profile.age = 24;
  console.log(profile) //{name: 'Prash'}



  let profile = {
    name: 'Prash'
  }
  Object.seal(profile)
  
  profile.name = 'Gupta'
  profile.age = 24;
  
  console.log(profile) //{name: 'Gupta'}

//----------------------------------------------------------------

console.log(Math.max()) //-Infinity //'coz it compares something to present value