
// //0-1-2 sorting with two pointers ------------------- 

// // function zero_one_two_sorting(arr) {
// //   // Write your code here
// //   let left = 0
// //   let right = arr.length-1
// //   while(left<right){
  
// //   while(left<right&&arr[left]==0){
// //     left++
// //   }
// //   while(left<right&&arr[right]!=0){
// //     right--
// //   }
// //    [arr[left],arr[right]] = [arr[right],arr[left]]
// //   }
// //    left =0
// //    right = arr.length-1
// //   while(left<right){
// //    while(left<right && arr[left]!=2){
// //     left++
// //    }

// //   while(left<right && arr[right]==2){
// //     right--
// //   }
// //   [arr[left],arr[right]]=[arr[right],arr[left]]
// //   left++
// //   right--
// //   }
// //   return arr
   
// // }

// //0-1-2 sorting with three  pointers ------------------- 

// // const str = "ABcdefghijklmnopqrstuvwxyzafvafklle"
// // function panagram(str){
// //     let set = new Set()
    
// //     for(let  i=0;i<str.length;i++){
// //            let char = str[i].toLowerCase()
// //         if(char>="a"&&char<="z"){
// //         set.add(char)
// //         }
// //     }
// //     console.log(set);
// //      return (set.size===26)
// // }
// // console.log(panagram(str))


// // function panagram(str){
// //     const alphabet = "abcdefghijklmnopqrstuvwxyz"

// //     for(let char of alphabet){
// //         if(!str.includes(char)) return false
// //     }

// //     return true
// // }
// // console.log(panagram(str));


// // function factorial(n){
// //  if(n==1) return 1

// //  return n * factorial(n-1)
// // }
// // let n = 5
// // console.log(factorial(n))

// function recursion(n,divisior=2){
//     if(n<2) return false

//     if(divisior==n ) return true

//     if(n%divisior==0) return false

//     return recursion(n,divisior+1)
// }

// console.log(recursion(10,divisior=2));

// function printprime(start,end){
//    if (start > end) return
//    if(recursion(start)){
//     console.log(start);
//    }
//    printprime(start+1,end)
// }
// printprime(20,40)


// let arr = [1,2,3,4]
// function subarray(arr){
//     for(let i=0;i<arr.length;i++){
//         let sum =0
//         for(let j=i;j<arr.length;j++){
//            sum += arr[j]
//         }
//         return sum
//     }
// }
// console.log(subarray(arr))

// for(let i=0;i<=4;i++){
//     let row = ""
//     for(let j=0;j<=i;j++){
//         row += "*"
//     }
//     console.log(row);
// }

// function dectra(n){
//     for(let i=0;i<n;i++){
//         let row = ""
//         for(let j=i;j<n;j++){
//             row += "*"
//         }
//         console.log(row);
//     }
// }
// let n=4
// dectra(n)

// function opp(n){
//   for(let i=1;i<=n;i++){
//     let str = ""
//     for(let j=1;j<=n-i;j++){
//         str += " "
//     }
//     for(let k=1;k<=i;k++){
//         str+="*"
//     }
//     console.log(str);
//   }

// }
// let n=4
// opp(n)

// function pyramid(n){

//     for(let i=1;i<=n;i++){
//         let str =""
//         for(let j=1;j<=n-i;j++){
//             str+=" "
//         }
//         for(let k=1;k<=2*i-1;k++){
//             str+="*"
//         }
//         console.log(str);
//     }
// }
// let n=5
// pyramid(n)

// function inverted(n){
//     for(let i=1;i<=n;i++){
//          let str = ""
//         for(let j=1;j<=i-1;j++){
//           str += " "
//         }
//         for(let k=1;k<=2*n-2*i+1;k++){
//             str += "*"
//         }
//        console.log(str);
        
// //     }
// // }
// // let n= 5

// // inverted(n)


// let mat=[
// [1,2,3],
// [4,5,6],
// [7,8,9]
// ]

// function sum(mat){
  
//     let top =0
//     let right = mat[0].length-1
//     let left = 0
//     let bottom = mat.length-1

//     while(top<=bottom && left<=right){

//          for(let i=top;i<=bottom;i++){
//             console.log(mat[i][left]);
//         }
//        left++
//         for(let i=left;i<=right;i++){
//             console.log(mat[bottom][i])
           
//         }
//        bottom--
//        for(let i=bottom;i>=top;i--){
//             console.log(mat[i][right]);
//         }
//         right--
//         for(let i=right;i>=left;i--){
//                 console.log(mat[top][i]);
//             }
//         top++
           

//     }

// }
// sum(mat)

// let arr = [10, 20, 20, 20, 30, 40, 50];
// let tar = 20;
// function binary(arr,tar){
//     let left =0
//     let right = arr.length-1
//     let count=0
//     while(left<=right){
//         let mid = Math.floor((left+right)/2)
//          if(arr[mid]==tar){
//            count++
//            right=mid-1
//         }
//         else if(arr[mid]<tar) {
//             left = mid +1
//         }else{
//             right = mid-1
//         }

        
//     }
//     return count
// }
// console.log(binary(arr,tar));

// let arr = ["eat", "tea", "tan", "ate", "nat", "bat"]
// function groupAnagrams(arr) {
//     // write your code
//     let map = new Map()
//     for(let i=0;i<arr.length;i++){
//         let key = arr[i].split("").sort().join("")
//         if(!map.has(key)){
//             map.set(key,[arr[i]])
//         }else{
//             map.get(key).push(arr[i])
//         }
//     }
//     return map
    
// }
// console.log(groupAnagrams(arr));

// function mergesort(arr){
//     if(arr.length<=1) return arr

//     let mid = Math.floor(arr.length/2)

//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid)

//     left = mergesort(left)
//     right = mergesort(right)

//     return  merge(left,right)

// }
// function merge(left,right){
//     let result = []
//     let i=0
//     let j=0
//     while(i<left.length && j<right.length){
//         if(left[i]<right[j]){
//             result.push(left[i])
//             i++
//         }else{
//             result.push(right[j])
//             j++
//         }

//     }
//     while(i<left.length){
//         result.push(left[i++])
//     }
//     while(j<right.length){
//         result.push(right[j++])
//     }
//     return result
// }
// let arr=[38,27,43,3,9,82,10,7]
// console.log(mergesort(arr).join(" "))


// function subarrays(arr){

//     for(let i=0;i<arr.length;i++){
     
//         for(let j=i;j<arr.length;j++){
//            let subarr = arr.slice(i,j+1)
//            console.log(subarr); 
//         }
        
//     }
// }
// let arr= [1,2,3,4]
// subarrays(arr)

// function subsum(arr){
//     let res = []
//     for(let i=0;i<arr.length;i++){

//     }
// }

// function isprime(n,divisor=2){

//     if(n<2) return false
//     if(divisor*divisor>n) return true
//     if(n%divisor===0) return false
//     return isprime(n,divisor+1)

// }
// // console.log(isprime(9));
// function printprime(start,end){
//     if(start>end) return 
//     if(isprime(start)){
//         console.log(start);
//     }
//     return printprime(start+1,end)
// }
// printprime(20,40)


//qucik sort ------------------


// function quicksort(arr,left,right){

//     if(left<right){
//         let pivotIndex = findpivotIndex(arr,left,right)

//         quicksort(arr,left,pivotIndex-1)
//         quicksort(arr,pivotIndex+1,right)
//     }

//     return arr
// }
// function findpivotIndex(arr,left,right){
//     let pivot = arr[right]
//     let i = left-1
//     for(let j=left;j<right;j++){
//         if(arr[j]<pivot){
//             i++
//             [arr[i],arr[j]] = [arr[j],arr[i]]
//         }
//     }
//     [arr[i+1],arr[right]] = [arr[right],arr[i+1]]
    
//     return i+1
// }
// let arr = [7, 3, 8, 2, 5];
// console.log(quicksort(arr,0,arr.length-1));
