// function findFibonacci(n){
//     //base case
//    if(n==0) return 0
//    if(n==1) return 1

//    return findFibonacci(n-1) + findFibonacci(n-2)

// }

// function getfibonacci(n){
//     const arr = []
//     for(let i=0;i<n;i++){
//         arr.push(findFibonacci(i))
//     }
//     console.log(arr);
// }
// getfibonacci(5)


// function getFibonnaci(n){
//     let a =0
//     let b = 1
//     let sum =0
//     let arr = []
//     for(let i=0;i<n;i++){
//         arr.push(a)
//          sum = a + b
//          a = b
//          b = sum
//     }

//     console.log(arr)   
// }
// getFibonnaci(10)


// function fib(n,arr=[0,1],i=2){
//     if(n==0) return [0]
//     if(n==1) return [0,1]
//     if(n==i) return arr
//     let f = arr[i-1] + arr[i-2]
//     arr.push(f)
//     return fib(n,arr,i)
// }