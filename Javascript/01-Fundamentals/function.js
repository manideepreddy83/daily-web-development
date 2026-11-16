// -------------------whenever i want to repate the logic/ whenever i want to repate the code
// console.log("before function")
// function addTwoNumbers(){
//     console.log("inside function")

//     console.log(2+5);
// }
// addTwoNumbers()
// console.log("after function");


//-----------------------------variables accessing through the funciton are called parameters
// function toGetTotalAmount(taxAmount,totalAmount){
//     // console.log(totalAmount+taxAmount)
//     // console.log(totalAmount ,'totalAmount')
//     // console.log(taxAmount ,'taxAmount')
//    return totalAmount + taxAmount
// }
// ----------------------------------------------------------------------NaN is typeof number

// ---------------------------------------------values passed from the function are argument 
// console.log(toGetTotalAmount(2000,30))
// toGetTotalAmount(3000,50)
// toGetTotalAmount(20,7)


// ---------------------------------when we want to print something then we use console.log()

// function add(a,b){
//     return a+b
// }

// let sum = add(120,20)

// function multiplication(a,b){
//      return a*b
// }

// let multiple = multiplication(20,6)

// function divison(a,b){
//       return a/b
// }

// let divide = divison(5,5)

// console.log(sum);
// console.log(multiple);
// console.log(divide);

// console.log(sum)

// let sum2 = add(30,40)
// console.log(sum2);

// let multiple2 = multiplication(3,6)
// console.log(multiple2);

//reference error is when ever we access something when we cannot intilize is know as reference error 


// function add(a,b){
//    let c = a+b
//    return c
// }
// let sum = add(1,6)
// console.log(sum)

// function product(a,b){
//     let d = a * b
//     return d
// }
// let multi = product(5,6)
// console.log(multi);

// const divide = Math.round(add(56,89)/ product(5,6))
// console.log(divide)


// function add(a,b){
//     let c = a + b
//     if(typeof a != "number"||typeof b != "number"){
//         return "pass the arguments"
//     }else{
//         return c
//     }

// }
// let sum = add(3,5)
// console.log(sum)

//console.log(typeof undefined,typeof NaN,typeof 22,typeof "ajak")

function totalAmount(a,b,c){
    let d = (a+b)-c
    // if(typeof a !="number"||typeof b!="number"||typeof c != "number"){
    //     return "pass valid input"
    // }
    return d
}

console.log(totalAmount(20,4,1))
 console.log(firstName);
var firstName = "nitesh"
// var firstName = "mani"
console.log(firstName)

//GLOBAL EXECUTION CONTEXT 
//MEMORY ALLOACTION , CODE EXCECUTION PHASE , TEMPORIAL DEAD ZONE