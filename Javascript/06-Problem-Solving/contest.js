// const n = 600

// //exctrating year from give number 
// const year = Math.floor(n/365)

// //Getting remaning days after identifying the number of years 
// const remainingDaysInYear = n % 365

// //Getting month from remaining days after calculating year
// const month = Math.floor(remainingDaysInYear/30)

// //Getting remaining days from variable called reaminingDaysInYear
// const days = remainingDaysInYear % 30

// //printing the output in expected format 
// console.log(year,"year",month,"month",days,"days")

// 31 days (1,3,5,7,8,10,12)
// 30 days (4,6,9,11)

// const date = 29
// const month = 2
// const year = 2028

// // check for month who are having 30 days in a month
// if(month==4 || month == 6 || month == 9 || month == 11){
//     if(date>0 && date<31){
//         console.log("Date is valid")
//     }else{
//         console.log("Date is invalid");
//     }
// } else if(month==1 || month == 3 || month == 5 || month == 7 ||month == 8 || month == 10 || month == 12 ){
//     if(date>0 && date<32){
//         console.log("Date is valid")
//     }else{
//         console.log("Date is invalid");
//     }
// }else if ( month == 2){
//     if((year%4==0 && year%100!==0)||(year%400 == 0)){
//         if(date>0 && date<30){
//             console.log("Date is valid")
//         }
//     }else{
//         console.log("Date is invalid");
//     }
// }else{
//     if(date>0 && date <29){
//         console.log("Date is valid")
//     }else{
//         console.log("Date is invalid")
//     }
// }


// result = 5 + 10 *2 && (true||false)

// step 1 : Because brackets has high priority it will execute first the expression will become 
           // resutl = 5 + 10 * 2 && (true)


// step 2 : Because multipication will have  high priority in the above expression it will execute first the expression will become
           // resutl = 5 + 10 * 2 && (true)

           //result = false && true 

           // result = false

// const a = 10
// const b = 20 
// const c = 15 
// const d = 25

// let largest = - Infinity
// let secondLargest = -Infinity

// if(a>b && a>c && a>d){
//     largest = a
// }else if(b>a & b>c && b>d){
//     largest = b
// }else if(c>a && c>b && a>d){
//     largest = c
// }else {
//     largest = d
// }
// if(a<largest && (a >secondLargest)){
//     secondLargest = a
// }
// if(b<largest && (b >secondLargest)){
//     secondLargest = b
// }
// if(c<largest && (c >secondLargest)){
//     secondLargest = c
// }
// if(d<largest && (d >secondLargest)){
//     secondLargest = d
// }
// console.log(secondLargest)
// const student = "bhanu" 
// const lookingFor = "jai ram"
// console.log(student == lookingFor ? "student arrived":"student not arrived")

// console.log(student == "bhanu" || student == "jai ram"? "student arrived" : "student not arrived")

/* 
You will get two varaibles 
didStudentAttemptTest = true/false
studentScore = 35

If student attempted a test and scored above 40 print student pass
If student attempted a test and scored below 40 print student failed
If student did not attempt then say Student not attemnpted */



// turnary operator 



// const string = "abcdefaedadfa"
// const findchar = "a"
// let count = 0
// let i = 0
// while(i<string.length){
//     if(string[i]== findchar){
//         count++
//     }
//     i++
// }
// console.log(count );

// let arr = [1,2,3,4,5]
// let sum = 0
// let i = Math.floor(arr.length/2)

// while(i<arr.length){
   
//     sum = sum + arr[i]
//     i++
// }
// console.log(sum)

// do{
//     console.log("excute do while")
// }while(false)

// while(false){
//     console.log("execut while")
// }

// const number = "123421"
// let isPalindrome = true
// let i =  0
// let j =  number.length-1

// while(i<j){
//    if(number[i]!=number[j]){
//     isPalidrome = false
//     break
//    }
// i++
// j--
// }

// if(isPalindrome){
//     console.log("palindrome")
// }else{
//     console.log("Not palindrome");
// }

