

// function hashMap(nums){
// // create Hash map
// let map = new Map();

// // push elmts in the map
// for(let num of nums){
//  map.set(num,(map.get(num) || 0)+1)
// }

// let res= []
// for(let [key,val] of map){
//     if(val >= 4){
//         res.push(key)
//     }
// }
// return res
// }
// console.log(hashMap([1,2,1,2,1,2,1,3,4,5,6,3,4,3,2,3,1]));

// const arr = [1,2,3,4,5,6,4,2,3,2,1]
// const result = new Set()

// for(let nums of arr){
//     result.add(nums)
// }
// console.log(result);

// let string = "breech"
// const result = new Set()
// for(let char of string){
//     result.add(char)
// }
// let answer = ""

// for(let value of result){
//     answer += value
// }
  
// console.log(answer)


// //-------arr to set
// const arr = [1,2,3,4,4,3,2,2,1,4]
// const set = new Set(arr)
// //console.log(set.has(4))  // to check value
// console.log(set)

// // let answer = new Array(...set) // one method
// //      answer = [...set] // two method
// // console.log(answer)


// const objOne = {name:"nitesh",role:"developer"}
// const objTwo = objOne

// const unique = new Set()
// unique.add(objOne)
// unique.add(objTwo)
// console.log(unique)

// const arrone = [1,2,3,4,3,2,]
// const arrtwo = [1,2,3,4,2,3]
// const ans = new Set()
// ans.add(arrone)
// ans.add(arrtwo)
// console.log(ans);

// const map = new Map()
// map.set("name","nitesh")
// map.set("role","developer")

// console.log(map.get("role"))  // to get value of the key
// console.log(map.size)            // to know the size
// console.log(map.has("location"))  // to know value is present in map are not

// const map = new Map()

// map.set("apple",500)
// map.set("banana",600)
// console.log(map);
// console.log(map.size)
// map.delete("apple")

// console.log(map);

// let arr = [1,2,3,4,5,6]

// for(let i=0;i<arr.length;i++){
//     for(let j=i;j<arr.length;j++){
//         let subarr = []
          
//         for(let k=i;k<=j;k++){
//             subarr.push(arr[k])
//         }
//         console.log(subarr)
//     }
// }

// function getSubArray(arr){
//     let count = 0
//     for(let i=0;i<arr.length;i++){
//         for(let j=i;j<arr.length;j++){
//            let subArray = []

//            for(let k=i;k<=j;k++){
//                 subArray.push(arr[k])
//             }
//             console.log(subArray);
//         }
//     }
// }
// let arr = [1,2,3,4,]
// getSubArray(arr)

// let str = "aab"
// let string = "ccbbb"
// function hash(str,string){
// let map = new Map()
// let mapone = new Map()
// for(let i=0;i<str.length;i++){
//     if(map.has(str[i])){
//         map.set(str[i],map.get(str[i])+1)
//     }else{
//        map.set(str[i],1)
//     }
// }
// for(char of string){
//     if(mapone.has(char)){
//         mapone.set(char,mapone.get(char)+1)
//     }else{
//         mapone.set(char,1)
//     }

// }
// let count = 0
// for(let [key ,value] of map){
//     if(!mapone.has(key)){
//         count += value
//     }else{
//         count += Math.abs(mapone.get(key)- value)
//     }
// }
// for(let [key,value] of mapone){
//     if(!map.has(key)){
//         count += value
//     }
// }
// console.log(count);
// console.log(map,mapone);
// }
// hash(str,string)


// const first = "abcde"
// const second = "cdeab"
// function findAnagram(first,second){
    
//     let mapone = new Map()
//     let maptwo = new Map()
//     for(let char of first){
//        mapone.set(char,(mapone.get(char)||0)+1)
//     }

//       for(let char of second){
//        maptwo.set(char,(maptwo.get(char)||0)+1)
//     }
    
//     for(let [key ,value] of mapone){
//         if(!maptwo.has(key) ){
//             return false
//         }
//         if( value != maptwo.get(key) ) {
//             return false
//         }
        
//     }
//     for(let [key,value] of maptwo){
//         if(!mapone.has(key)) return false
//     }
// return true
// }
// console.log(findAnagram(first,second))

// let arr = [4,5,3,6,8] 
// let target = 9
// function model(arr,target){

//     for(let i=0;i<arr.length;i++){
//         let subarr = []
//       for(let j=i+1;j<arr.length;j++){
//         if(arr[i+j]===target){
//             subarr.push(i)
//         }
//     }
//     console.log(subarr);
//     }
// }
// model(arr,target)

// let arr = [4,5,3,6,8] 
// let target = 9
// function model(arr,target){

//     let map = new Map()
//     for(let i=0;i<arr.length;i++){
//       let ans = target - arr[i]
//       if(map.has(ans)){
//         return[map.get(ans),i]
//       }
//       map.set(arr[i],i)
//     }
//     return []
// }
// console.log(model(arr,target))