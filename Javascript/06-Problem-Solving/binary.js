// function binary(arr,T){
    
//     let l = 0
//     let r = arr.length-1
//     while(l <= r){
//          let m = Math.floor((l+r)/2)
//         if(arr[m]==T) return m
            
        
//         if(arr[m]<T){
//            l = m + 1
//         }else{
//             r = m-1
//         }
    
//      }
//      return -1
// }
// let arr = [1,2,3,4,5,6,7,8,9]
// let T = 1
// console.log(binary(arr,T))

// function firstOccurence(arr,T){
    
//     let left = 0
//     let right = arr.length-1
//     let occurence = -1
//     while(left <= right){
//         let middle = Math.floor((left+right)/2)
//         if(arr[middle]==T){
//             occurence = middle
//         }

//         if(arr[middle]>=T){
//             right = middle-1
//         }else{
//             left = middle +1
//         }
//     }
//     return occurence
// }
// let arr = [1,2,2,2,3,4,5,6,7]
// let T = 2
// console.log(firstOccurence(arr,T))

// function lastOccurence(arr,t){
//     let left =0
//     let right = arr.length-1
//     let last = -1
//     while(left <= right){
//           let middle = Math.floor((left+right)/2)
//         if(arr[middle]==t){
//             last = middle
//         }

//         if(arr[middle]<=t){
//             left = middle +1
//         }else{
//             right = middle-1
//         }
//     }
//     return last
    
// }
// let arr = [1,2,2,2,3,4,5,6,7]
// let t= 2
// console.log(lastOccurence(arr,t))


// const arr= [1,2,3,4,6,7,8]
// const t = 5
// function firstGreatest(arr,t){
//     let left =0
//     let right = arr.length-1
//     let o = -1
//     while(left<=right){
//      let middle = Math.floor((left+right)/2)
    

//     if(arr[middle] < t){
//         left = middle+1
//     }else{
//          o = middle
//          right = middle -1
//     }

//     }
//     return o

// }
// console.log(firstGreatest(arr,t))

// function findSmall(arr,t){
//      let left =0
//     let right = arr.length-1
//     let o = -1
//     while(left<=right){
//      let middle = Math.floor((left+right)/2)
    

//     if(arr[middle] < t){
//         o = middle
//         left = middle+1
//     }else{
//          right = middle -1
//     }

//     }
//     return o
// }
// console.log(findSmall(arr,t))

// function findAnagram(str1,str2){


//    str1 =  str1.split("").sort().join("")
//    str2 =  str2.split("").sort().join("")
//     if(str1 == str2){
//         return true
//     }else{
//         return false
//     }
// }
// let str1 = "car"
// let str2 = "rac"
// console.log(findAnagram(str1,str2))

// function findAnagram(str1,str2){
 
//     str1 = str1.split("")
//     str2 = str2.split("")
//     let obj1 = {}
//     let obj2 = {}
//     for(let i=0;i<str1.length;i++){
//           if(obj1[str1[i]] == undefined){
//             obj1[str1[i]] = 1
//           }else{
//             obj1[str1[i]]++
//           }
//     }
//    for(let i=0;i<str2.length;i++){
//     if(obj2[str2[i]]==undefined){
//         obj2[str2[i]] = 1
//     }else{
//         obj2[str2[i]]++
//     }
//    }
//       for(let key in obj1){
//     if(obj1[key] != obj2[key]){
//         return false
//     }
// }

// return true

// }
// let str1 = "car"
// let str2 = "rac"
// console.log(findAnagram(str1,str2))

// function firstOccurrence(arr, T) {
//     let l = 0
//     let r = arr.length - 1
//     let answer = -1

//     while (l <= r) {
//         let m = Math.floor((l + r) / 2)

//        if(arr[m]==T){
//         answer = m
       
//        }
//        if(arr[m]>=T){
//            r = m -1
//         }else{
//            l = m + 1
//        }
//     }

//     return answer
// }
// let arr = [1, 2, 2, 2, 3, 4]
// let T = 2

// console.log(firstOccurrence(arr, T))

