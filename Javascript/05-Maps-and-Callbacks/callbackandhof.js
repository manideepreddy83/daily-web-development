// function callback(){
//     return " i am a call back"
// }
// function explore(callback){
//     console.log(callback)
// }

// explore(callback())

// function add(a,b){
//     return a+b
// }
// function sub(a,b){
//     return a-b
// }
// function multi(a,b){
//     return a*b
// }

// function operation(a,b,callback){
//   return callback(a,b)
// }
// console.log(operation(2,7,multi(a,b)))
// function operations(a,b,callbackone,callbacktwo){
//     return callbackone(a,b) + callbacktwo(a,b)

// }

// console.log(operations(2,8,(a,b)=>a+b,(a,b)=>a+b));

// function child(){
//     return 1
// }
// function parent(){
//     return function(a,b){
//         return child()
//     }
// }
// let store = parent()
// console.log(store);

// let arr=[1,2,3,4,5]
// let double = arr.map((value,index)=>{
//     console.log(value,index)
//     return value * value
// })
// console.log(double);

//-------------------------------------------------------------------------------------------
// const user = [{name:"venkat"},{name:"vipolove"},{name:"mani"}]
// const doubleNumbers = user.map((value,h)=> {
//         value.age = h
//         console.log(value);
//     } )
    
    
// const arr= [1,2,3,4,5]
// let result = []
// for(let i=0;i<user.length;i++){
//     result.push(explore(user[i],i))
// }
// console.log(result);
// function explore(value,index){
//     value.age = index
//     return value
//     // return value + value
// }


// function customMap(arr,callback){
//  const result = new Array(arr.length).fill(undefined)
 
//  for(let i=0;i<arr.length;i++){
//      result[i] = callback(arr[i],i)
//  }

  
//  return result
// }
// const arr = [1,2,3,4,5,6]
//  const newmap = customMap(arr,(value,index)=>{
//       return value
// });

// const resultMap = arr.map((value,index)=>{
//       return value
// })
// console.log(newmap,"for function");
// console.log(resultMap , "for inbuilt");

// const arr = [1,2,3,4,5,6,7,8]

// const evenNumbers = arr.filter((value,index)=>value%2==0)
// console.log(evenNumbers);

// const oddNumbers = arr.filter((value,index)=>{
//     return
// })
// console.log(oddNumbers);


// function filter(arr,callback){
// let result = []
// for(let i=0;i<arr.length;i++){
//    if(callback(arr[i],i)){ 
//     result.push(arr[i])
//    }
// }
// return result
// }
// const newfilter = filter(arr,(value,index)=>{
//     return value%2==0
// })
// console.log(newfilter);

// const newarr = arr.filter((value,index)=>value%2==0)
// console.log(newarr);

// const employees = [
//     {name:"minhaj",pay:60000},
//     {name: "mani",pay:40000},
//     {name:"durga",pay:80000}
// ]
// const result = employees.filter((v)=>v.pay > 50000).map((value)=>{
//     value.pay = value.pay-20000
//     return value
// })
// console.log(result);

//reduce-----------------
// const arr = [1,1,1,1,1]

// const result = arr.reduce((total,value)=>{
//     return total+value;
// },0)
// console.log(result);

// var foo = function(){

// }
// console.log(typeof foo);


// let arr = [10, 15, 20, 25, 30, 35, 40];
// let result = arr.filter((num)=>{
//     return num>25
// })
// console.log(result);

// let arr2 = [2, 4, 6, 8, 10];
// let ans = arr2.map((num)=>{
//     return num *3
// })
// console.log(ans);

// let arr3 = [5, 10, 15, 20, 25];
// let res = arr3.reduce((acc,num)=>{
//     return acc + num
// },0)
// console.log(res);

// let arr = [2, 5, 8, 10, 13, 16, 20];
// let res = arr.filter((num)=>{
//     return num % 2 == 0})
//     .map((res)=>{
//     return res*2})
//     .reduce((acc,num)=>{
//       return acc + num },0)

//  console.log(res);

// let students = [
//     { name: "Mani", marks: 85, age: 21 },
//     { name: "Ravi", marks: 42, age: 20 },
//     { name: "Kiran", marks: 92, age: 22 },
//     { name: "Arun", marks: 35, age: 19 },
//     { name: "Priya", marks: 76, age: 21 },
//     { name: "Rahul", marks: 58, age: 23 },
//     { name: "Sneha", marks: 95, age: 20 }
// ];
// let res = students.filter((value)=>{
//     return value.marks>=70})
//  let ans = res.map((value)=>{
//         return value.name
//     })
//     console.log(ans);
    
//   let final=   res.reduce((acc,res)=>{
//         return acc + res.marks
//     },0)
// console.log(final);

// let products = [
//     { name: "Laptop", price: 50000, quantity: 2, category: "Electronics" },
//     { name: "Phone", price: 20000, quantity: 3, category: "Electronics" },
//     { name: "Shoes", price: 3000, quantity: 4, category: "Fashion" },
//     { name: "Watch", price: 5000, quantity: 2, category: "Fashion" },
//     { name: "Tablet", price: 15000, quantity: 1, category: "Electronics" }
// ];

// let res = products.filter((value)=>{
//     return value.category === "Electronics"
// })
// .map((value)=>{
//    return value.price * value.quantity
// })
// .reduce((acc,value)=>{
//     return acc + value
// },0)
// console.log(res);