// const matrix = [[1,2,3],[4,5,6],[7,8,9]]
//  let left = []
//  let right = []
// for(let i=0;i<matrix.length;i++){
//     for(let j=0;j<matrix[i].length;j++){
//        if(i==j){
//        left.push(matrix[i][j])
//        }
//        if(i+j == matrix.length-1){
//         right.push(matrix[i][j])
//        }
//     }
// }
// console.log(left,right)

//-----------------------------------------------------
// function isValdeMatrix(matrix){
//     for(let i=0;i<matrix.length;i++){
//         for(let j=0;j<matrix[i].length;j++){
//             if(i==j || i+j==matrix.length-1 ){
//                 if(matrix[i][j]==0) return false
//             }else{
//                 if(matrix[i][j] !== 0)
//                     return false
//             }
//         }
//     }
//     return true
// }
// const matrix = [[1,0,2],[0,2,0],[1,0,4]]
// console.log(isValdeMatrix(matrix));
//----------------------------

//  for(let i=0;i<mat.length;i++){
//     for(let j=0;j<mat[i].length;j++){
//       if(mat[i][j]==mat[j][i]){
//         mat[i][j]=mat[j][i]
//       }
//     }
//   }
//   console.log(mat)
// }

// ----------
// function star(row){
//   for(let i=1;i<=row;i++){
//     let str =""
//     for(let j=1;j<=i;j++){
//       str += j
//     }
//     console.log(str)
//   }
// }
// star(5)

// function star(row){
//   for(let i=1;i<=row;i++){
//     let str =""
//     for(let j=row;j>=i;j--){
//       str += j + " "
//     }
//     console.log(str)
//   }
// }
// star(5)

// function traingle(row){
//   for(let i=1;i<=row;i++){
//     let star = ""
//     for(let j=row-i;j>0;j--){
//       star += " "
//     }
//     for(let k=1;k<=i;k++){
//       star += "*"
//     }
//     console.log(star);
//   }
// }
// traingle(5)

// function triangle(row){
//   for(let i=1;i<row;i++){
//   let line = ""
//   for(let k=row-i+1;k>0;k--){
//     line += "*"
//   }
//   for(let j=1;j<=i;j++){
//     line += " "
//   }
//   console.log(line);
//   }
// }
// triangle(5)


// let arr = [
// [1,2,3],
// [4,5,6],
// [7,8,9]
// ]
// function spiral(arr,row,col){
//   let top = 0
//   let bottom = row-1
//   let left = 0
//   let right = col-1
//   while(top <= bottom && left <= right){
//      // move top to bottom
//     for(let i=top;i<=bottom;i++){
//       console.log(arr[i][left])
//     }left++
//     // move left to right
//     for(let i=left;i<=right;i++){
//       console.log(arr[bottom][i])
//     }bottom--
//     //move bottom to top
//     for(let i=bottom;i>=top;i--){
//       console.log(arr[i][right])
//     }right--
//     // move right to left
//     for(let i=right;i>=left;i--){
//       console.log(arr[top][i])
//     }top++
   
//   }
// }
// spiral(arr,3,3)

// function reflection(arr){
 
//   let minX = Infinity
//   let maxX = -Infinity
//   for(let i=0;i<arr.length;i++){
//       minX = Math.min(minX,arr[i][0])
//       maxX = Math.max(maxX,arr[i][0])
//   }
//   let sum = minX + maxX
//   for(let i=0;i<arr.length;i++){
//     let x = arr[i][0]
//     let y = arr[i][1]
//     let found = false
//     for(let j=0;j<arr.length;j++){
//       let nx = arr[j][0]
//       let ny = arr[j][1]
//       if(sum -x == nx && y== ny){
//         found = true
//       }
      
//     }
//     if(!found){
//     return "NO"
//     }
//   }
//   return "YES"
// }
// let arr = [[1,1],[-1,1],[-6,6],[6,6]]
// console.log(reflection(arr))

// const alphabets = "abcd"
// alphabets += "e"
// console.log(alphabets)

  // function duplicates(arr){
  //   let arr1 = []
  //   let obj = {}
  //   for(let i=0;i<arr.length;i++){
  //     if(!obj.hasOwnProperty(arr[i])){
  //       obj[arr[i]] = 1
  //       arr1.push(arr[i])
  //     }
  //   }
  //   return arr1
  // }
  // console.log(duplicates([1,2,3,3,4,2,1]))