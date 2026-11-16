const persons = ["bhanu","mani","reddy","dshsh","haha"]
// persons.push("sall")
// persons.push("sohail")
// for(let i=0; i<persons.length;i++){
//     console.log(persons[i])
// }
// console.log(persons)
// console.log(persons)
// for(let i=0;i<persons.length;i++){
//     persons.pop()
// }
// console.log(persons);

// while(persons.length>2){
//     persons.pop()
// }
// // console.log(persons);
// persons.unshift("nitesh")
// persons.unshift("rahul")
// console.log(persons);
// persons.shift()
// console.log(persons);

// const arr = ["mani","manoj",]
// console.log(arr,"original arr");
// //pop method returns the element which is being removed or popping out 
// console.log(arr.pop(),"pop")

// //push method returns the length of the array after adding value/element
// console.log(arr.push("praveen"),"push")

// console.log(arr,"arr")


// //unshift method returns the lenth of the array after adding the value
// console.log(arr.unshift("viplove"))
// console.log(arr)

// //shift method returns the element which is being removed 
// console.log(arr.shift(),"shift")
// console.log(arr)


//slice returns 

// function customSlice(arr,startIndex,lastIndex){
//     const newArr = []
//     for(let i=startIndex;i<lastIndex;i++){
//         newArr.push(arr[i])
//     }
//     return newArr
// }
// const arr = ["mani","bhanu","reddy","praksh","surya","devi"]
// console.log(customSlice(arr,2,3)

// );



// const arr=["nitesh","bhanu","priya","chetan","rahul"]
// // console.log(arr.slice(1,3),arr)
// const arrayFromSplice = arr.splice(-2)

// console.log(arrayFromSplice,arr)

//write a function  to update same array and 2 new values "a" & "b" 
//ex: ["c","d","e"]==>["c","d","e","a","b"]
// function updateArray(arr,first,second){
//     arr.splice(arr.length-1,1,first,second)
//     return arr
// }
// const arr=["c","d","e"]
// console.log(updateArray(arr,"a","b"));

// function reverseArray(arr){
//     let i=0
//     let j=arr.length-1
//     while(i<j){
//         const temp = arr[i]
//       arr[i]=arr[j]
//       arr[j] = temp
      

//       i++
//       j--
//     }
//     return arr
// }

// console.log(reverseArray(["a","b","c","d"]))


// const string ="how are you doing today"
// console.log(string.split(' '))

// const stringTwo = "nitesh"
// console.log(stringTwo.split(''))

// const stringThree = "Nitesh,Pawan,Harish,Rahul"
// console.log(stringThree.split(',',2));

// let arr=[1,2,4,3,1,2,5,6,9,8,11,10]
// let largest = -Infinity
// let secondLargest = -Infinity
// let thirdLargest = -Infinity
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>largest){
//         thirdLargest = secondLargest
//         secondLargest = largest
//         largest = arr[i]
//     }else if(arr[i]<largest && arr[i]>secondLargest){
//         thirdLargest = secondLargest
//         secondLargest = arr[i]
//     }else if (arr[i]<largest && arr[i]>thirdLargest){
//         thirdLargest = arr[i]
//     }
// }
// console.log(secondLargest);

// let arr = "249 443 695 725 3308 109 804"
// function findthe(arr){
// let arr2 = arr.split(" ").map(Number)
// console.log(arr2)
// let n = arr2.length
// let large = -Infinity
// for(let i=0;i<n;i++){
//  if(arr2[i]>large){
//     large = arr2[i]
//  }
// }
// for(let i =0;i<n;i++){
//     if(arr2[i]!==large && large < 2*arr2[i]){
//        return -1
//     }
//     }
// return 1
// }
// console.log(findthe(arr));


// function findIndexs(array,target){
//    for(let i=0;i<array.length;i++){
//       if(array[i]==target){
//          return i
//       }
//    }
//    return -1
// }
// let array = [1,3,2,4,5,7]
// let target = 5
// console.log(findIndexs(array,target))

// function customIncludes(names,target){
//    for(let i=0;i<names.length;i++){
//      if(names[i]==target){
//        return true
//      }
//    }
//    return false
// }
// const names = ["nitesh","minhaj","bhanu","priya"]
// let target = "nitesh"
// console.log(customIncludes(names,target));

// const arrOne = [1,2,3]
// const arrTwo = [4,5,6]
// function customConcat(arrOne,arrTwo){
//    for(let i=0;i<arrTwo.length;i++){
//    arrOne.unshift(arrTwo[i])
   
//    }
//    console.log(arrTwo)
//    console.log(arrOne);
//    return arrOne
// }
// console.log(customConcat(arrOne,arrTwo));

// const arr1 = [1,2,3]
// const arr2 = [4,5,6,7,8]
// const arr3 = [10,20,30,50]
// const target = 10

// function customConcat(arr1,arr2,arr3,target){
   
//    if(arr1.includes(target)){
//       console.log("First array is having target at index",arr1.indexOf(target))
//    }else if(arr2.includes(target)){
//       console.log("second array is having target at index",arr2.indexOf(target));
//    }else if(arr3.includes(target)){
//       console.log("third array is having target at index",arr3.indexOf(target));
//    }else{
//       console.log("given array is not present");
//    }
   
// }
// customConcat(arr1,arr2,arr3,target)


// function newArray(arr){
//    let array=[]
//    for(let i=0;i<arr.length;i++){
//       array.push(arr[i])
//    }
//    return array
// }
// let arr = [1,2,3,4,5]
// console.log(newArray(arr))


// const numbers = [10,20,30,40]
// const copy = newArray(numbers)
// copy[0] = 0
// console.log(copy,numbers)
//----------------------map
// 169
// 136
// 217
// 229

let arr = [1,2,3,4,5]
function addNumber(arr){
    let newArray = []
    let sum = 0
    let sum2 = 0
    for(let i=0;i<arr.length;i++){
        sum += arr[i]
    }
    for(let i=0;i<arr.length;i++){
        sum2 = sum - arr[i]
        newArray.push(sum2)
    }

    return newArray
}
console.log(addNumber(arr));