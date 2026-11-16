// const arr = [[1,2,3],[4,5,6]]

// for(let i=0;i<arr.length;i++){


//     const nestedArr = arr[i]
//     for(let j=0;j<nestedArr.length;j++){
//         console.log(nestedArr[j]);
//     }
// }


//----------reversing the nested array
// const arr = [[1,2,3],[4,5,6]]
// for(let i=arr.length-1;i>=0;i--){
//     const reverse = arr[i]
//     for(let j=reverse.length-1;j>=0;j--){
//         console.log(reverse[j]);
//     }
// }

// function printStars(row,column){
    
//     for(let i=1;i<=row;i++){
//          let string = " "
//         for(let j=1;j<=column;j++){
//           string += "* "
//         }

//         console.log(string);
//     }
// }
// printStars(5,5)


// function rightAngledTriangle(row,column){

//   for(let i=1;i<=row;i++){
//         // let str = " "              
//     for(let j=1;j<=i;j++){
//           // str += "* "                     
         
//     }
    
//     console.log(str); 
//   }
//  console.log("=> rightangled triangle")
// }
// rightAngledTriangle(6,6)


// function pyramidTriangle(row,column){

//   for(let i=1;i<=row;i++){
//     let str = " "
//     for(let j=row-i;j>0;j--){
//         str += " " 
//       }
//       for(let k=1;k<=i-1;k++){
//         str += "* "
//       }
//       console.log(str);
//   }
// }
// pyramidTriangle(5,4)

// function array(arr){
//      let arrsum = []
//     for(let i=0;i<arr.length;i++){
//      if(arr[i])
//     }

// }
// const array = [[1,2,3],[-3,2,5],[6,8,9]]
// console.log(array(arr));

// function opposite(row){
//     for(let i=1;i<=row;i++){
//         let line = ""
//         for(let j=1;j<=row-i;j++){
//           line += " "     
//         }
//         for(let k=1;k<=i;k++){
//             line +=" *"
//         }
//         console.log(line);
//     }
// }
// let row = 5
// opposite(row)

// function triangle(row){
//     for(let i=1;i<=row;i++){
//         let str = ""
//         for(let j=1;j<=row-i;j++){
//             str += " "
//         }
//         for(let k=1;k<=i;k++){
//             str += " *"
//         }
//         console.log(str)
//     }

// }

// function oppisiteTriangle(row){
//     for(let i=row;i>0;i++){
//         let line = ""
//         for(let j=1;j<=row-i;j++){
//             line += " "
//         }
//         for(let k=1;k<=i;k++){
//             line += " *"
//         }
//         console.log(line);
//     }
// }
// triangle(4)
// oppisiteTriangle(5)

// function reversearr(arr){

//     for(let i=0;i<arr;i++){
//        return arr[i]
//     }
// }
// let arr = [[1,2,3],[4,5,6],[7,8,9]]
// console.log(reversearr());
