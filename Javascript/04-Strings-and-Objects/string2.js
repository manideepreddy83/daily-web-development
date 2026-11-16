// const array = new Array(100).fill(0)
// console.log(array);

// function createArray(length,fill){
//     const array = []
//     for(let i=0;i<length;i++){
//          array.push(fill)
//     }
//     return array
// }
// console.log(createArray(100,1));



// function explore(string){
//     const array = new Array(256).fill(-1)
//     let result = ""
//     for(let i=0;i<string.length;i++){
//        const char = string[i]
//        const code = char.charCodeAt(0)
//         if(array[code]===-1){

//             array[code] = 1
//             result += char
//         }
//     }
//     return result
// }
// console.log(explore("array"))

// let numbers = "1234"
// for(let number of numbers){
//    console.log(number);
// }

// const string1 = "https://acciojob.com"
// const string2 = "nitesh@gmail.com"
// console.log(string1.startsWith("https"));
// console.log(string2.endsWith("gmail.com"));

//create custom method for startswith and endswith,replace,replaceall
//  const string = "ababbabb"
// console.log(string.replace("a","b"));
// console.log(string.replaceAll("a","b"));

// const sentence = "      good good   "

// console.log(sentence.trimStart(),sentence.length);

// const generateOtp = "hi"
// console.log(generateOtp.padStart(6,"123"));
// console.log(generateOtp.padEnd(6,"123"));


//--------startswith-------------
// const string = "manideep"
// const result = "mane"
// function customStartSwith(){
//  for(let i=0;i<result.length;i++){
//      if(string[i]!==result[i]){
//         return false
//      }
     
//     }
//     return true
// }
// console.log(customStartSwith(string,result))

// ----------endswith----------
function customEndsWith(names,result){
let start = names.length - result.length;

for(let i=0;i<result.length;i++){
    if(names[start+i] !== result[i]){
        return false
    }
}
return true
}

const names = "Manideep"
let result = "deep"

console.log(customEndsWith(names,result))






