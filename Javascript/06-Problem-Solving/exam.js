// group Anagrams
// const strs = ["eat","tea","tan","ate","nat","bat"]
// function groupAnagrams(str){

//     let map = new Map()
//    for(let char of strs){

//     map.set(char,(map.get(char)||0)+1)
//    }
//    console.log(map)
   
// }
// groupAnagrams(strs)

//sum of each column in a matrix
// let arr=
// [[1,2,3],
//  [4,5,6],
//  [7,8,9]]
// function sum(arr){
//     let ans = []
//     for(let j=0;j<arr.length;j++){
//       let sum = 0
//     for(let i=0;i<arr[j].length;i++){
//         sum += arr[i][j]
//     }
//     ans.push(sum)
    
//   }
//   console.log(ans)
// }
// sum(arr)

// let arr=
// [[1,2,3],
//  [4,5,6],
//  [7,8,9]]

// function matrixDiagonal(arr){
//     let sum = 0
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr[i].length;j++){
//             if(i===j || i+j==arr.length-1){
//                 sum += arr[i][j]
//             }
             
//         }
//     }
//     return sum
// }
// console.log(matrixDiagonal(arr))

// function fibonacciNumber(n){
//    let a= 0
//    let b =1
   
//    for(let i=0;i<n;i++){
//     let c = a + b
//        a = b
//        b = c
//    }
//    return a

// }
// let n = 4
// console.log(fibonacciNumber(n))


//find Missing Number
// let arr = [1,2,3,5,6]
// function miss(arr){
//     miss = -1
//     let left =0
//     let right = arr.length-1
//     while(left<=right){
//        let mid= Math.floor((left+right)/2)
//        if(arr[mid]>mid){
//           left = mid +1
//        }else{
//         right = mid -1
//        }
//     }return left
    
// }
// console.log(miss(arr


