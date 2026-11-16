// function strToObj(str){
//      let freq={}
//      for(let char of str){
//          freq[char]=(freq[char]||0)+1
//      }
//      return freq
// }
// let str="apple"
// console.log(strToObj(str))

// const obj={}
// const obj=new Object()
// obj.name="abc"
// obj.age=20
// console.log(obj)

// accessing properties
// const obj={a:1,b:2}
// console.log(obj.b)//dot notation
// console.log(obj[a])

// const obj={a:1,b:2}
// const obj1={...obj}
// obj1.a=2
// console.log(obj)

// const obj={
//      a:{
//          b:{
//              c:10
//          }
//      }
// }
// console.log(obj.a.b)

// const key="name"
// const user={[key]:"lohit"}
// console.log(user)
// key->"name"
// ["name"]->user
// name:"lohith"



// inbuilt methods in objects
// const obj={
//      name:"abc",
//      age:25,
//      // sayHello:function(){console.log("sayHello")},
//      // say:()=>{console.log("say")}
// }
// obj.sayHello()
// obj.say()
// console.log(Object.entries(obj)) // entries in obj
// console.log(Object.keys(obj)) //return keys in obj
// console.log(Object.values(obj)) // returns the values

// checking property
// in method
// console.log("isStudent" in obj) // true if it is present
// .hasOwn
// console.log(Object.hasOwn(obj,"name")) // true or false
// console.log(Object.hasOwn(obj,"bio"))
// hasownproperty
// console.log(obj.hasOwnProperty("name"))
// console.log(obj.hasOwnProperty("about"))

// destructors
// const obj={a:1,b:2}
// const {a:x,b:y}=obj
// console.log(x+y)

// const obj={
//     name:"abc",
//     age:25,
//     // sayHello:function(){console.log("sayHello")},
//     // say:()=>{console.log("say")}
// }
// for(let key in obj){
//      console.log(key,obj[key])
// }
// for(let [key,val] of Object.entries(obj)){
//      console.log(key,val)
// }