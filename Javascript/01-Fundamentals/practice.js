// const name= "mani"
// console.log(name);

// const price = 22
// const quantity = 2
// console.log(price*quantity)

// let age = 21
// age = 23
// console.log(age);

// var city = "hyderabad"
// console.log(city);

// let studentName = "manideep"
// const course = "webDevelpoment"
// let marks = 89
// console.log(studentName,marks,course)

// const age = 21
// if(age>18){
//     console.log("Eligible to vote");
// }else{
//     console.log("No")
// }

// let number = 24
// if(number%2===0){
//     console.log("positive")
// }else{
//     console.log("Negative");
// }

// let marks = 20
// if(marks>40){
//     console.log("pass");
// }else{
//     console.log("fail");
// }

// const marks = 40
// if(marks>=80){
//    console.log("A");
// }else if(marks>=60 && marks<=79){
//     console.log("B");
// }else if(marks>=40 && marks<=59){
//     console.log("c");
// }else{
//     console.log("Fail");
// }

// let age = 21
// let hasLicense = false
// if(age>18){
//    if(hasLicense){
//      console.log("they can dirve");
//    }else{
//     console.log("Noo");
//    }
// }else{
//     console.log("NO");
// }

// let userName = "mani"
// const password = 1234
// if(userName === "manideep"){
//    if(password == "1234"){
//     console.log("correct");
//    }else{
//     console.log("noo");
//    }
// }else{
//     console.log("NO");
// }


// let marks = 21
// let attendence = 75
// if(marks>=40){
//     if(attendence>=75){
//         console.log("yes");
//     }
// }

//-------switch case-------
// let day = 4
// switch(day){
//     case 1:
//         console.log("sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//     default:
//         console.log("invalid");
// }

// let operator = "+"
// let num1 = 2
// let num2 = 3
// switch("+"){
//     case "+":
//         console.log(num1+num2);
//         break
//     case "-":
//         console.log(num1-num2);
//         break
    
// }

//-------function------
// function greet(){
//     console.log("HELLO JAVASCRIPT");
// }
// greet()

// function add(a,b){
//    return a+b
// }
// let a = 21
// let b = 100
// console.log(add(a,b));

// function isEven(num){
//      if(num%2==0){
//         return "even"
//      }else{
//         return "odd"
//      }
// }
// let num = 21
// console.log(isEven(num));

//-----------arrays------
// let arr = ["mani","praveen","deep","jeevan","surya"]
// console.log(arr);
// console.log(arr[0],arr[4]);

//  let arr = [1,2,3,4,5]
//  console.log(arr[0],arr[1]);
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// for(let i=1;i<21;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// let i=10
// while(i>0){
//     console.log(i);
//     i--;
// }

// let arr=[1,2,3,4,5]
// let sum =0
// for(let i=0;i<arr.length;i++){
//     sum += arr[i]
// }
// console.log(sum);

// let arr=[10,30,56,78,99,20,30,40]
// let count = 0
// let count2 = 0

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>40){
//         count++
//     }else{
//         count2++
//     }
// }
// console.log(count,"students are passed",count2,"students are failed");


// let arr=[1,2,3,4,5,6]
// let count = 0
// for(let i=0; i<arr.length;i++){
//     count++
// }
// console.log(count);

// let arr=[1,22,34,45,42,534]
// let largest = -Infinity
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>largest){
//         largest = arr[i]
//     }
// }
// console.log(largest);

// let arr=[2,3,3,5,6,1,67,23]
// let smallest = Infinity
// for(let i=0;i<arr.length;i++){
//     if(arr[i]<smallest){
//         smallest = arr[i]
//     }
// }
// console.log(smallest);

// let arr = [1,-2,4,6,-7,8,-10,12,-3]
// let count = 0
// let count2 = 0
// for(let i=0; i<arr.length; i++){
//     if(arr[i]<0){
//         count++
//     }else if(arr[i]>0){
//         count2++
//     }
// }
// console.log(count,count2);


// let arr = [21,34,56,75,43]
// let sum = 0
// for(let i=0;i<arr.length;i++){
//      sum += arr[i]
// }
// let avg = Math.floor(sum/arr.length)
// console.log(avg);



// function findNumber(arr,T){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==T){
//             return "found" 
//     }
    
// }
// return "Not found"
// }
// let arr=[1,2,3,4,5,67,7,5,3,545]
// let T = 6
// console.log(findNumber(arr,T))

// function findRepatedNumber(arr,t){
//     let count =0
//  for(let i=0;i<arr.length;i++){
//     if(arr[i]===t){
//         count++
//     }
//  }
//  return count
// }
// let arr=[1,23,44,2,2,2,2,2,4]
// let t = 2
// console.log(findRepatedNumber(arr,t));



// function reverseArray(arr){
//   let newArr = []
//   for(let i=arr.length-1;i>=0;i--){
//     newArr.push(arr[i])
//   }
//   return newArr
// }
// let arr=[1,2,3,4,5,6]
// console.log(reverseArray(arr));

// function evenNumbers(arr){
//     let newarray = []
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2==0){
//             newarray.push(arr[i])
//         }
//     }
//     return newarray
// }
// let arr = [1,2,3,4,5,6,7,8,2,3,4]
// console.log(evenNumbers(arr));

// const string = "a"
// console.log(string.charCodeAt(0));

// function reverseString(string){
//     let reverse = ""
//     for(let i=string.length-1;i>=0;i--){
//        reverse += string[i]
//     }
//     return reverse
// }
// const string = "hello"
// console.log(reverseString(string));

// function palindrome(string){

//     for(let i=0;i<string.length;i++){
//         let digit = 
//     }
// }
// const string = "madam"
// console.log(palindrome(string));

// function vowels(string){
//     let vowels = ["a","e","i","o","u"]
//     let count1 = 0
//     let count2 = 0
//     for(let i=0;i<string.length;i++){
//         if(vowels.includes(string[i])){
//             count1++
//         }else{
//             count2++
//         }
//     }return  [count1 , count2]


// }
// const string = "javascript"
// console.log(vowels(string));


// function factorial(num){
//     let fact = 1
//   for(let i=num;i>1;i--){
//     fact = fact*i
//   }
//   return fact
// }
// let  num = 6
// console.log(factorial(num));

//prime number 

// function isPrime(num){
//     if(num < 2){
//         return false
//     }
//  for(let i=2; i<num; i++){
//     if(num % i === 0){
//        return false
//     }
// }
// return true
// }
// let num = 8
// console.log(isPrime(num));


// function isprime(num){
//     if(num <= 1)return false
//     if(num == 2) return true
//     if(num%2 === 0) return false
//     for(let i=3;i*i<=num;i+=2){
//      if(num%i===0){
//         return false
//      }
//     }
//     return true
// }
// function primeNumber(a,b){
//  let arr=[]
//  for(let i=a;i<=b;i++){
//     if(isprime(i)){
//         arr.push(i)
//     }
//  }
// return arr
// }
// let a=20,b=100
// console.log(primeNumber(a,b));


// function squarePattern(num){
 
//     for(let i=0;i<num;i++){
//         let squ = ""
//         for(let j=0;j<num;j++){
//             squ += "*"
//         }
//         console.log(squ)
//     }
// }
// let num =4
// squarePattern(num)

// function rightTriangle(num){
//     for(let i=1;i<=num;i++){
//         let squ = ""
//         for(let j=1;j<=i;j++){
//             squ += "*"
//         }
//         console.log(squ)
//     }
// }
// let num = 4
// rightTriangle(num)

function inverted(num){
    for(let i=0;i<num;i++){
        let line = ""
        for(let j=num;j>i;j--){
            line += "* "
        }
        return line
    }
}
console.log(inverted(5))
