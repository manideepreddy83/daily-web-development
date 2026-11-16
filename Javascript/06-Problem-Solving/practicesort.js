// function bubblesort(arr){
    
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length-i-1;j++){
//            if(arr[j]>arr[j+1]){
//             let temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp  
//            }
//         }
//     }
//     return arr
// }
// let arr = [5,3,8,1,2]
// console.log(bubblesort(arr));

// selection sort -------------
// let arr = [5,3,8,1,2]
// function selectionSort(arr) {
    
// for(let i=0;i<arr.length;i++){
//     let min = i
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[j]<arr[min]){
//             min = j
//         }
//     }
//     let temp = arr[i]
//     arr[i] = arr[min]
//     arr[min] = temp
// }
// return arr
// }
// console.log(selectionSort(arr));

// insertion sort --------------
// let arr = [5,3,8,1,2]
// function insertionSort(arr){
// for(let i=1;i<arr.length;i++){
//     let key = arr[i]
//     let j = i-1
//     while(j>=0 && arr[j]>key){
//        arr[j+1] = arr[j]
//        j--
//     }
//     arr[j+1] = key
// }
// return arr
// }
// console.log(insertionSort(arr))

// function insertionsort(arr){
//     for(let i=1;i<arr.length;i++){
//         let key = arr[i]
//         let  j= i-1
//         while(j>=0 && arr[j]>key){
//             arr[j+1] = arr[j]
//             j--
//         }
//         arr[j+1] = key
//     }
//     return arr
// }
// let arr = [5,3,8,1,2]
// console.log(insertionsort(arr))

function mergesort(arr){
    if(arr.length<=1){
        return arr
    }

    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
     
    left = mergesort(left)
    right = mergesort(right)

    return merge(left ,right)
}

function merge(left,right){
    let i = 0
    let j = 0
    let newarr= []
    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            newarr.push(left[i])
            i++
        }else{
            newarr.push(right[j])
            j++
        }
    }

    while(i<left.length){
        newarr.push(left[i++])
    }
    while(j<right.length){
        newarr.push(right[j++])
    }

    return newarr
}
let arr = [3,5,1,8]
console.log(mergesort(arr));