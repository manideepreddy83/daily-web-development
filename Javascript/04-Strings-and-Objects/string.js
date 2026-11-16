// let string = "nitesh"

// string = string.split("")
// string[0] = "p"

// string = string.join("")


// console.log(string);

// function string(name){
  
//     const vowels = ["a","e","i","o","u"]
//     let result = ""

//     for (let i=0;i<name.length;i++){
//         const currentChar = name[i].toLowerCase()

//         if(vowels.includes(currentChar)){
//             continue
//         }

//         result += currentChar
//     }

//     return result
  
// }

// let name = "NITESH"
// console.log(string(name,"remove vowels"))

// const message = 'I\'m bu\sy today'
// console.log(message)

// const names = "my name is\n\t manideep"
// console.log(names);

// function getPercentage(marks,total){
    
//   let  percentage = Math.floor((marks/total)*100)
//   return percentage

// }
// let marks = 56
// let total = 100
// console.log(`student scored ${getPercentage(marks,total)} %`);

// const newString = "this is my sectence"
// // console.log(newString.charAt(5));

// function string(newString){
//     const vowels = ["a","e","i","o","u"]
//     const arr = []
//     for(let i=0;i<newString.length;i++){
//         if(vowels.includes(newString[i])){
//             arr.push()
//         }
//     }
//     return arr
// }
// console.log(string(newString));

// function reverseWords(str){
//     // write code here
//     // use console.log to print output
//     const array = str.split(" ")
//     let result = ""
//     for(let i=0;i<array.length;i++){
//     const char = array[i].split("").reverse().join("")
//     result += `${char}`
//     }
// }
// str = "Welcome to this Javascript Guide!"

// reverseWords(str)

// const string = "A"
// console.log(string.charCodeAt());

// for(let i=65; i<65+26;i++){

//     console.log(i,String.fromCharCode(i));
// }

// const string = "c"
// let string2 = string.toUpperCase()
// console.log(string2.charCodeAt())

function getCharCodeForUpperCase(string){
    return string.charCodeAt(0) - 32
}
console.log(getCharCodeForUpperCase("c"));

function findCase(string){
    if(string.charCodeAt(0)>=65 && string.charCodeAt(0)<=90){
        return true
    }else {
        return false
    }
}

console.log(findCase("a"));

function convertCase(string){
  
 let result = ""
 for(let i=0;i<string.length;i++){
    const currentChar = string[i]
    if(findCase(currentChar)){
        result += currentChar
    }else{
        const codeInUpperCase = getCharCodeForUpperCase(currentChar)

        const charInupperCase = String.fromCharCode(codeInUpperCase)
        

        result += charInupperCase
    }
 }
 return result
}
let string = "Hello"
console.log(convertCase(string));