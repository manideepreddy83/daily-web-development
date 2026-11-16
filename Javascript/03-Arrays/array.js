

// const names = ["mani","mahi","radha"]
// const newNames  = ["viplove","manoj","pandu"]

// console.log(names[1])
// console.log(names[0])
// console.log(names[2])


// for(let  i=0; i<names.length; i++){
//   names[i] = newNames[2-i]
// }
// console.log(names,newNames)

// names.push("nitesh")
// console.log(names)

// names.pop(-1)
// console.log(names)

// names.push("nitesh")
// console.log(names)

// const arrOne = []
// const arrTwo = [1,2,3,4,5]

// let length = arrTwo.length
// for (let i=0; i<length; i++){
//   arrOne.push(arrTwo[i])
//   arrTwo.pop()
  
// }
// console.log(arrOne)
// console.log(arrTwo)
// task 1 take value from arr2 then add in arr1 in same order using for loop 


// let input = [10,20,30,40,]
// for(let i=0;i<input.length; i++){
//   console.log(input[i])
// }

//--sum---
// let input = [2,4,6,8]
// let sum = 0
// for (let i=0; i<input.length;i++){
//     sum = sum + input[i]
// }
// console.log(sum)
//-- avg---
// let ans =[10,20,30]
// let sum = 0
// for(let i=0; i<ans.length; i++){
//     sum = sum + ans[i]
// }
// let avg = sum/ans.length
// console.log(avg)

// largest element in array--
// let input = [5,8,2,10,3]
// let largest = 0
// for(let i=0; i<input.length; i++){
//    if(input[i] > largest){
//     largest = input[i]
//    }
// }
// console.log(largest)

//---- smallest element in array---
// let arr = [5,8,2,10,3]
// let smallest = arr[0]
// for(let i=0; i<arr.length; i++){
//     if(arr[i]<smallest ){
//      smallest = arr[i]
//     }
// }
// console.log(smallest)

//---------count even number----------
// let even = [2,5,8,7,10]
// let count = 0
// for(let i=0;i<even.length;i++){
//     if(even[i]%2==0){
//         count ++
//     }
// }
// console.log(count)
//-----------count odd number---------
// let odd = [2,5,8,7,10]
// let count = 0
// for(let i=0; i<odd.length; i++){
//     if(odd[i]%2!=0){
//         count++
//     }
// }
// console.log(count)

//----count positive and negative 
// let num = [-2,5,-1,7,-8,]
// let positive = 0
// let negative = 0
// for(let i=0; i<num.length; i++){
//     if(num[i]<0){
//         negative++
//     }else if(num[i]>0){
//         positive++
//     }
// }
// console.log("positive =",positive,"negative =",negative)

//-------------search element------
// let num = [5,10,15,20]
// let search = 15
// for (let i=0; i<num.length; i++){
//     if(num[i] === search){
//         console.log("found");
//     }
// }

//--------count occurrences---
// let arr =[1,2,3,2,5,2]
// let count = 0
// let search = 2
// for (let i=0; i<arr.length; i++){
//     if(arr[i]==search){
//         count++
//     }
// }
// console.log(count)

//-------reverse print------
// let input=[1,2,3,4]
// for (let i=input.length-1; i>=0; i--){
//     console.log(input[i])
// }
//-------product-----------
// let arr= [2,3,4]
// multi = 1
// for(let i=0;i<arr.length;i++){
//     multi *= arr[i]
// }
// console.log(multi);

// -------Even indexes------
// let input = [10,20,30,40,50]
// for(let i=0; i<input.length; i+=2){
//     console.log(input[i]);
// }


//------second largest-----
// let input=[4,8,1,10,6]
// let largest = input[0]
// let secondLargest = 0
// for(let i=0;i<input.length;i++){
//     if(input[i]>largest){
//         secondLargest = largest
//         largest = input[i]
//     }else{
        
//     }
// }console.log(secondLargest);

//--------second smallest-----

// let input = [4,8,1,10,6]
// let small = input[0]
// let secondSmall = 0
// for(let i=0;i<input.length;i++){
//     if(input[i]<input[0]){
//         secondSmall = small
//         small = input[i]
//     }else if (input[i]<secondSmall){
//         secondSmall = input[i]
//     }
// }
// console.log(secondSmall);

// reverse array--------------------------------------------------
// let arr = [1,2,3,4]
// console.log(arr.reverse())

//check sorted---------------------------
// let arr=[1,2,3,5]
// let sorted = true
// for(let i=0; i<arr.length; i++){
//     if(arr[i] > arr[i+1]){
//        sorted = false
//        break
// }
// }
// if(sorted){
//     console.log("Yes");
// }else{
//     console.log("No");

// }

//----------count duplicates values---------------
// function countDuplicatesValues(arr){
//     let count = 0 
//      for(let i=0;i<arr.length-1;i++){
//         if(arr[i]===arr[i+1]){
//             count++
//         }
//      }
//      return count
// }
// const arr = [1,2,2,3,4,4,5]
// console.log(countDuplicatesValues(arr));

//-----------------remove duplicates------------------
// function removeduplicates(arr){
       
// }
// function checkEqualArrays(arr1,arr2){
//     if(arr1.length!==arr2.length){
//         return "NO"
//     }
//     for(let i=0;i<arr1.length;i++){
//          if(arr1[i] !== arr2[i]){
//                 return "NO"
//             }
//         }
//         return "YES"
//     }

// let arr1 = [1,2,3]
// let arr2 = [1,2,3]
// console.log(checkEqualArrays(arr1,arr2))

//------------------------
// function mergeArrays(arr1,arr2){
//     let arr3 = []
//     for(let i=0;i<arr1.length;i++){
//     arr3.push(arr1[i])
//     }
//     for (let i=0;i<arr2.length;i++){
        
//         arr3.push(arr2[i])
//     }
//     return arr3
// }
// let arr1 = [1,2]
// let arr2 = [3,4]
// console.log(mergeArrays(arr1,arr2));

//---------------------missing numbers---------------
function findMissingNumber(arr){
 let expected = 1
for(let i=0;i<arr.length;i++){
    if(arr[i] !== expected)
        return expected
    expected++
}
}
let arr = [1,2,4,5,6,7,9]
console.log(findMissingNumber(arr));