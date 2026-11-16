
//bubbling 
// function bubblesort(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length-i-1;j++){



//             //swap
//             if(arr[j]>arr[j+1]){
//            [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//             }
//         }
//         }
//         return arr
//     }

// console.log(bubblesort([8,9,4,6,2,1,7,3]));

// function decsort(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length-i-1;j++){
//             //sort
//             if(arr[j]<arr[j+1]){
//                 const temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }
//     return arr
// }
// console.log(decsort([1,2,3,6,4,2,7]));


// function selectionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let min = i
//         for(let j=i+1; j<arr.length; j++){
//             //sort
//             if(arr[j]<arr[min]){
//                 min = j
//             }
//         }
//         [arr[i],arr[min]] = [arr[min],arr[i]]

//     }

//     return arr
// }
// console.log(selectionSort([1,2,3,6,4,7]));


// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//        let temp  = arr[i]
//        let j  = i-1
    
//      while(j>=0 && arr[j]>temp){
//         arr[j+1] = arr[j]
//         j--
//      }
//        arr[j+1] = temp
//     }
//     return arr
// }
// console.log(insertionSort([1,2,3,6,4,7]));

// function mergeArray(arrone,arrtwo){
//    let i=0
//    let j=0
//    let newarr = []
//   while(i<arrone.length && j<arrtwo.length){
//    if(arrone[i]<arrtwo[j]){
//       newarr.push(arrone[i])
//       i++
//    }else{
//       newarr.push(arrtwo[j])
//       j++
//    }
    
   

//   }

//   while(i<arrone.length){
//    newarr.push(arrone[i++]) 
// }
// while(j<arrtwo.length){
//    newarr.push(arrtwo[j++])
// }
//    return newarr


// }
// console.log(mergeArray([2,4,8],[1,3,5,6,7]))

// function mergesort(arr=[1,3,5,6,7]){
   
//    console.log(arr,'arr');
 
//    if(arr.length<=1) return arr

//    const mid = Math.floor(arr.length/2)
//    let left = arr.slice(0,mid)
//    let right = arr.slice(mid)

//    left = mergesort(left)
//    right = mergesort(right)

   

//    console.log(left,right);
// }
// mergesort()

//quick sort
// function quickSort(arr,left,right){
  

//   if(left >= right) return arr
//   const pivotIndex = findPivotIndex(arr,left,right)
//   quickSort(arr,left,pivotIndex-1)

//   quickSort(arr,pivotIndex+1,right)
//   console.log(pivotIndex,arr,left,right);
 
//   return arr

// }

// function findPivotIndex(arr,left,right){
// const pivot = arr[right]
// let i = left-1
// for(let j=left; j<right;j++){
//    if(arr[i]<pivot){
//       i++
//       const temp = arr[i]
//       arr[i] = arr[j]
//       arr[j] = temp
//    }
// }   
// i++
// const temp = arr[i]
//   arr[i] = pivot
//   arr[right] = temp
//  return i
  
// }
// const arr = [6,1,4,2,3,5,7]
// console.log(quickSort(arr,0,arr.length-1))


//---------call back-----------
// function explore(param){
//    console.log(param());
// }
// function callback(){

// }
// explore(callback)                        

//-------------hof(higher oder function)------
// const explore = () => {


// }

// const hof = () => {

// }
// explore(hof)