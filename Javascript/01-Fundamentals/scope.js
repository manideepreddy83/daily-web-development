
// // Hoisting : Moving declearation to top of its scope : var, let and const are hoisted,let and 
// // Var is function scope, let and const are block scope

// console.log(name)
// var name="mani"
// // this is output is undefined because it store in memory allocation when we try to do the code execution first it don't have
// // the value to variale

// console.log(firstName)
// let firstName = "sunketa"
// // the output will give the reference error 
// // because the first name is store in temporary dead zone
// // so it cannot accessed

// console.log(secondName)
// let secondName = "deep"
// // same as the above 
// // this are know as the 

// function displayName(){
//     var role = "Inscrutor"
//     console.log(role)
//     let name = "mani"
//     console.log(name);
//     const number = 12
//     console.log(number);

//     if(true){
//         let email = "mani123@"
       
//     console.log(email);
//         var firstName = "mani"
//         const num = 23
//         console.log(num)
//     }
//     console.log(firstName);
    
// }

// displayName()

// for( i=0;i<5;i++){

// }
// console.log(i)

// function first(){
//     function second(){
//         return 10
//     }
// }




//

// function findAllPrimeNumbers(n){
//     for(let i=2;i<=n;i++){
//         let isprime = true
//         for(let j=2;j<i;j++){
//             if(i%j===0){
//                 isprime = false
//                 break
//             }
//         }
//        if(isprime){
//         console.log(i)
//        }   
//     }
//     }
// findAllPrimeNumbers(10)




// function findEvenOrOdd(n){
//     if(n%2===0){
//        return "Even"
//     }else{
//         return "ODD"
//     }
// }
// console.log(findEvenOrOdd(6))



// function printAllEvenNumbers(n){
//     for(i=2;i<n;i++){
        
//         if(i%2===0){
//            console.log(i)
//         }
      
//     }
// }
// printAllEvenNumbers(10)




// function powerValue(a,b){
//     let pow = 1
//     for(let i=1;i<=b;i++){
//         pow = a* pow
//     }
//     return pow
// }
// console.log(powerValue(3,4))


function findSumOfCubes(number){
    const numberInString = number.toString()
    let result = 0
    for(let i=0;i<numberInString.length;i++){
       result += Math.pow(Number(numberInString[i]),3)
    }
 return result   
}
console.log(findSumOfCubes(123))
//---------------------------------------------------------------------------------
function  abc(number){
    let result = 0
    while(number>0){
        let reminder = number%10
        number = Math.floor(number/10)
         result +=  Math.pow(reminder,3)
       
    }
    return result
}
console.log(abc(123))


