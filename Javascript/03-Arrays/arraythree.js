// const arr=["a","b",["c","d","e",["f","g"]]]
// console.log(arr[2][3][0]);

// const a = [1,2,3,[1,2,3]] 
// const copyofA = [...a]
// copyofA[2] = 10
// console.log(a,copyofA)

//if we update the main array it will update both the arrays

// const arr=[1,[2,[3,[4,[5]]]]]

// const copy = [...arr]

// copy[1] = "nitesh" 
// console.log(arr,copy);


// console.log(arr.flat(Infinity));

//structured clone-----------------

// function addNumbers(arr,arrTwo){
  
//     let sum = 0
//     let copyArr = arr[1][1]
//     let secondArr = arrTwo[1][1]
//     for(let i=0;i<copyArr.length;i++){
//         sum+=copyArr[i] 
//     }
//     for(let i=0;i<secondArr.length;i++){
//         sum+=secondArr[i]
//     }
    
//     return sum
// }
// const arr =[1,[2,[3,45]]]
// const arrTwo = [10,[40,[5]]]
// console.log(addNumbers(arr,arrTwo));


//-------------destructuring array------------
// const names = ["mani","harsh","praveen"]

// const [firstName,secondName] = names

// console.log(firstName,secondName);

