

// const  userOne = { name : "manideep",dob:"21/09/2003", age:"22",gradeYear:2026}
// const userTwo = {name : "Mani",dob:"33/21/321", age :"23",gradeYear:2023}
// const userThree = {name : "praveen",dob:"33/21/321", age :"22",gradeYear:2020}
// const userFour = {name : "manoj",dob:"33/21/321", age :"23",gradeYear:2024}
// const userFive = {name : "harsh",dob:"33/21/321", age :"23",gradeYear:2021}

// const key1 = "age"
// console.log(userOne[key1]);

// function createKey(obj,key){
    //     return obj[key]
    // }
    // const obj = {name : "mani", age: "21", gender:"male"}
    // const key2 = "gender"
    // console.log(createKey(obj,key2));
    //if we have to delete the data we have use to delete
// delete userOne.dob
// console.log(userOne);
// let value = userOne.dob
// // const obj = {
//     name : "Acciojob",
//     center : "Hyderabad",
//     batches : 13
// }

// const jsonFormat = JSON.stringify(obj)
// const convertToObject = JSON.parse(jsonFormat)

// console.log( typeof convertToObject);
// console.log(typeof obj);

// const arr =[1,2,4,45,43,23]
// const json = JSON.stringify(arr)
// console.log(typeof json)
// console.log(json);

// const studentOne = {
//     name : "mani",
//     marks : 0,
//     phoneNumber : 9299304940,
//     address : {
//         area : "Near bus stop",
//         city : "hyd",
//         pincode : 243432
//     }
// }
//          console.log(studentOne["address"]["city"]);

              
//     const studentTwo = {
//     name : "surya",
//     phoneNumber : 9299304940,
//     address : {
//         area : "Near bus stop",
//         city : "chennai",
//         pincode : 243432
//     }
// }
// const studentThree = {
//     name : "vipolve",
//     phoneNumber : 9299304940,
//     address : {
//         area : "Near bus stop",
//         city : "delhi",
//         pincode : 243432
//     }
// }

// console.log(studentOne.marks);
// if(studentOne.hasOwnProperty("marks")){
//     console.log("true");
// }else{
//     console.log("false");
// }

// const students = [studentOne,studentTwo,studentThree]

// function getstudent(students, city){
    
//     let arr = []
//    for(let student  of students){
//       if(student.address.city === city){
//         arr.push(student)
//       }
//    }
//    return arr
// }

// console.log(getstudent(students,"hyd"))

// const user = {firstName : "Nitesh", role : "developer",age : 27,d:"this value of d"}
// const {firstName} = user
// const {role:occupation} = user
// console.log(occupation);

// const objOne = {a:10,b:20}
// const objTwo = JSON.parse(JSON.stringify(objOne))

// objTwo.b = 50
// console.log(objOne,objTwo);

// const user ={ name:"nitesh", role:"developer"}
// const userAdress = { city : "Hyd", street:"manikonda"}

// function mergeObject (obj1,obj2){
//  const newobj= {}
//  for(let key in obj1){
//   newobj[key] = obj1[key]
//  }
//   for(let key in obj2){
//    newobj[key] = obj2[key]
//   }
// }

function evenOdd(arr){
  let obj = {}
  let even = []
  let odd = []
  for(let i=0;i<arr.length;i++){
    if(arr[i]%2===0){
        even.push(arr[i])
    }else{
        odd.push(arr[i])
    }
    
  }
  return obj
}
console.log(evenOdd([1,3,4,5,3,2,3,2]));

function doubleObj(obj){
    let result  = {}
    for(let value in obj){
     result[value] = obj[value]*2
    }

    return result
}
const obj = {a:2,b:5}
console.log(doubleObj(obj));