// CHAPTER # 21-25, TASK # 1

// var firstName = prompt("Enter your First Name");
// var secondName = prompt("Enter your Second Name");
// var fullName = firstName + " " + secondName;
// alert("Hello " + fullName);





// CHAPTER # 21-25, TASK # 2

// var mobile  = prompt("Enter your favorite mobile phone model");
// var length = mobile.length;
// document.write("My favorite phone is: " + mobile + "<br/>");
// document.write("Length of string is: " + length);






// CHAPTER # 21-25, TASK # 3

// var country = "Pakistani";
// var index = country.indexOf('n');
// document.write("String: " + country + "<br/>");
// document.write("Index of 'n': " + index + "<br/>");








// CHAPTER # 21-25, TASK # 4


// var a = "Hello World";
// var index = a.lastIndexOf('l');
// document.write("String: " + a + "<br/>");
// document.write("Last Index of 'l': " + index + "<br/>");








// CHAPTER # 21-25, TASK # 5

// var country = "Pakistani"
// var index = country.charAt(3);
// document.write("String: " + country + "<br/>");
// document.write("Character at index 3: " + index + "<br/>");






// CHAPTER # 21-25, TASK # 6

// var firstName = prompt("Enter your First Name");
// var secondName = prompt("Enter your Second Name");
// var fullName = firstName.concat(secondName);
// alert("Hello " + fullName);







// CHAPTER # 21-25, TASK # 7

// var text = "Hyderabad";
// var text1 = text.replace("Hyder","Islam");
// document.write("City: " + text + "<br/>");
// document.write("After replacement: " + text1 + "<br/>");






// CHAPTER # 21-25, TASK # 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var message1 = message.replace("and","&");
// var message2 = message1.replace("and","&");
// document.write("Original Message: " + message + "<br/>");
// document.write("After replacement: " + message2);






// CHAPTER # 21-25, TASK # 9

// var value = "472";
// document.write("Value: " + value + "<br/>");
// document.write("Type: " + typeof value + "<br/>");
// var value1 = 472
// document.write("Value: " + value1 + "<br/>");
// document.write("Type: " + typeof value1 + "<br/>");





// CHAPTER # 21-25, TASK # 10

// var userInput = prompt("Enter anything");
// var capital = userInput.toUpperCase();
// document.write("User Input: " + userInput + "<br/>");
// document.write("Upper Case: " + capital + "<br/>");





// CHAPTER # 21-25, TASK # 11

// var userInput = prompt("Enter anything");
// var title = userInput.slice(0,1);
// var title = title.toUpperCase();
// var title1 = userInput.slice(1,userInput.length);
// document.write("User Input: " + userInput + "<br/>");
// document.write("Title Case: " + title + title1 + "<br/>");






// CHAPTER # 21-25, TASK # 12

// var num = 35.36;
// var result = num.toString().replace(".","");
// document.write("Number: " + num + "<br/>");
// document.write("Result: " + result + "<br/>");





// CHAPTER # 21-25, TASK # 16

// var university = "University of Karachi";
// for(var i = 0; i<university.length; i++){
//     var uni = university.charAt(i);
//     document.write(uni + "<br/>");
// }






// CHAPTER # 21-25, TASK # 17

// var input = "Pakistan";
// var lastChar = input.charAt(input.length-1);
// alert(lastChar)





// CHAPTER # 26-30, TASK # 1

// var number = +prompt("Enter any positive integer");
// var round = Math.round(number);
// var floor = Math.floor(number);
// var ceil = Math.ceil(number);
// document.write("number: " + number + "<br/>");
// document.write("round off value: " + round + "<br/>");
// document.write("floor value: " + floor + "<br/>");
// document.write("ceil value: " + ceil + "<br/>");






// CHAPTER # 26-30, TASK # 2

// var number = +prompt("Enter any negative floating point");
// var round = Math.round(number);
// var floor = Math.floor(number);
// var ceil = Math.ceil(number);
// document.write("number: " + number + "<br/>");
// document.write("round off value: " + round + "<br/>");
// document.write("floor value: " + floor + "<br/>");
// document.write("ceil value: " + ceil + "<br/>");






// CHAPTER # 26-30, TASK # 3

// var number = +prompt("Enter any number");
// var a = Math.abs(number);
// document.write("Absolute Value: " + a);




// CHAPTER # 26-30, TASK # 4

// var a = Math.random();
// var b = (a * 6) + 1;
// var c = Math.floor(b);
// document.write("random dice value: " + c);







// CHAPTER # 26-30, TASK # 5

// var a = Math.random();
// var b = (a*2)+1;
// var c = Math.floor(b);
// if(c===1){
//     document.write("random coin value: Heads");
// }
// else{
//     document.write("random coin value: Tails");

// }





// CHAPTER # 26-30, TASK # 6

// var a = Math.random();
// var b = (a*100)+1;
// var c = Math.floor(b);
// document.write("random number between 1 and 100: " + c);





// CHAPTER # 26-30, TASK # 8

// var a = Math.random();
// var b = (a*10)+1;
// var c = Math.floor(b);

 
// var secretNumber = +prompt("Enter a number between and inlcuding 1 and 10");
 

// if (c===secretNumber){
//     alert("Congratulations!");
// }
// else{
//     alert("Try again!");
// }





// CHAPTER # 31-34, TASK # 1

// var date = new Date();
// document.write(date);





// CHAPTER # 31-34, TASK # 2

// var monthNames = ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"];
// var now = new Date();
// var theMonth = now.getMonth();
// var nameOfMonth = monthNames[5];
// document.write("Current Month: " + nameOfMonth);





// CHAPTER # 31-34, TASK # 3

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[2];
// document.write("Today is " + nameOfToday);





// CHAPTER # 31-34, TASK # 4

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[0];
// if(nameOfToday==="Sun" || nameOfToday==="Sat")
// {
//  document.write("It's Fun Day");

// }





// CHAPTER # 31-34, TASK # 6

// var hours = new Date().getHours();
// var hours = (hours+24-2)%24;

// if(hours==0){ 
//     document.write("It's AM")
// }
// else if(hours>12)
// {
//  document.write("It's PM")
// }







// CHAPTER # 31-34, TASK # 9

// var date = new Date("April 25, 2020");
// var today = new Date();
// var Today = today.getTime();
// var date1 = date.getTime();
// var diff =  Today - date1;
// var diff1 = diff / (1000 * 60 * 60 * 24);
// var diff1 = Math.round(diff1);
// document.write(diff1);





// CHAPTER # 31-34, TASK # 10

// var date = new Date("December 05, 2015");
// var today = new Date();
// var date1 = date.getTime();
// var today1 = today.getTime();
// var diff = today1 - date1;
// var diff1 = diff / 1000;
// document.write( diff1 + " " + "seconds had passed since beginning of 2015");







// CHAPTER # 31-34, TASK # 11

// var date = new Date();
// var hour = date.getHours();
// var newHour = date.setMinutes(60); 
// newHour = new Date();
// document.write("current date: " + date + "<br/>" + "1 hour ago, it was " + newHour);





// CHAPTER # 31-34, TASK # 13

// var age = +prompt("Enter your age");
// var birthYear = 2020 - age;
// document.write("Your age is " + age + "<br/>" + "Your birth year is " + birthYear);





// CHAPTER # 31-34, TASK # 14

// var name = prompt("Customer Name");
// var month = prompt("Billing Month");
// var units = +prompt("Number of units");
// var chargesPerUnit = +prompt("Charges per unit");

// var netAmount = units * chargesPerUnit;
// var latePayment = 350;
// var grossAmount = netAmount + latePayment;

// document.write("Customer Name: " + name + "<br/>" + "Month: " + month + "<br/>" + "Number of units: " + units + "<br/>" + "Charges per unit: " + chargesPerUnit + "<br/>" + "<br/>" + "Net Amount Payable (within Due Date): " + netAmount + "<br/>" + "Late Payment Surcharge: " + latePayment + "<br/>" + "Gross Amount Payable (after Due Date): " + grossAmount) 





// CHAPTER # 35-38, TASK # 1

// function time() {
//     var date = new Date();
//     document.write(date);
// }
// time();





// CHAPTER # 35-38, TASK # 2

// function name(){
//     var firstName = prompt("Enter your first name");
//     var secondName = prompt("Enter your second name");
//     var fullname = firstName + " " + secondName;
//     alert("Hello " + fullname);
// }
// name();






// CHAPTER # 35-38, TASK # 3

// function sum(){
//     var firstNum = +prompt("Enter any number");
//     var secondNum = +prompt("Enter second number");
//     var add = firstNum + secondNum;
//     document.write(add);
    
// }
// sum();






// CHAPTER # 35-38, TASK # 4

// function calculator(){
//     var num1 = +prompt("Enter any number");
//     var num2 = +prompt("Enter second number");
//     var operater = prompt("Enter the operation you want to perform");
    
//     if(operater==="+"){
//         var opp = num1 + num2;
//         document.write(opp);
//     }

//     else if(operater==="-"){
//         var opp = num1 - num2;
//         document.write(opp);
//     }

//     else if(operater==="*"){
//         var opp = num1 * num2;
//         document.write(opp);
//     }

//     else if(operater==="/"){
//         var opp = num1 / num2;
//         document.write(opp);
//     }

//     else if(operater==="%"){
//         var opp = num1 % num2;
//         document.write(opp);
//     }
//     else{
//         alert("Enter a valid operation");
//     }
// }
// calculator();







// CHAPTER # 35-38, TASK # 4

// function sumOfSquares(num) {
//     for (var i=0;i<=num;i++){
//         var sum=0;
//         var i = i*i;
//         sum = i;
// }
//      document.write("The sum of squares for numbers up to and including " +num+ "is " +sum);
// }
// var num = +prompt("Enter a number:");
// sumOfSquares(num);






// CHAPTER # 35-38, TASK # 5


// function factorial(x) 
// { 

//   if (x === 0)
//  {
//     return 1;
//  }
//   return x * factorial(x-1);
//   document.write(x);
// }
// var x = +prompt("Enter a number");
// factorial(x);











