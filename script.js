/****************************************************************************************************
Variables and data types 
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable Naming Rules
var _3years = 3;
var johnMark = 'Jon And Mark'
var if = 23;
*/


/****************************************************************************************************
Variable Mutation and Type Coercion
*/
/*
var firstName = 'John';
var age = 28;

//type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//Variable Mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/


/****************************************************************************************************
Basic operators
*/
/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);
console.log(yearMark);

// Math operators
console.log(now + 2);
console.log(now * 2);
console.log(now / 2);


// Logical operators 
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/


/****************************************************************************************************
Operator Precedence 
*/

/*
var now =2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

//Grouping 
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) /2;

console.log(average);

//Mulitple Assignments 
var x, y;
x = y = (3 + 5) * 4 - 6; // 8
console.log(x, y);

// More operators


x *= 2
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);

*/
/****************************************************************************************************
Coding Challenge 
*/
/*

var markMass, johnMass, markHeight, johnHeight, markBMI, johnBMI;

markMass = 78; // kg
johnMass = 92; // kg

markHeight = 1.69; // meters
johnHeight = 1.95; // meters

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

console.log('Mark has a BMI of ' + markBMI);
console.log('John has a BMI of ' + johnBMI);


var markMore = markBMI > johnBMI;
console.log('Is Mark\'s BMI higher than John\s? ' + markMore);


*/


/****************************************************************************************************
If Else Statments 
*/


//var firstName = 'John';
//var civilStatus = 'single';
//
//if (civilStatus === 'married'){ 
//    console.log(firstName + ' is married!');
//} else {
//    console.log(firstName + ' will hopefully marry soon :)')
//    
//}
//var isMarried ='true';
//if (isMarried){ 
//    console.log(firstName + ' is married!');
//} else {
//    console.log(firstName + ' will hopefully marry soon :)')  
//}
//
//
//var markMass, johnMass, markHeight, johnHeight, markBMI, johnBMI;
//
//markMass = 78; // kg
//johnMass = 92; // kg
//
//markHeight = 1.69; // meters
//johnHeight = 1.95; // meters
//
//markBMI = markMass / (markHeight * markHeight);
//johnBMI = johnMass / (johnHeight * johnHeight);
//
//if(markBMI > johnBMI) {
//    console.log('Mark\'s BMI is higher than John\s? ')
//} else {
//    console.log('John\'s BMI is higher than Mark\s? ')
//}

//console.log('Mark has a BMI of ' + markBMI);
//console.log('John has a BMI of ' + johnBMI);


//var markMore = markBMI > johnBMI;
//console.log('Is Mark\'s BMI higher than John\s? ' + markMore);


/****************************************************************************************************
Boolean Logic
*/


//var firstName ='Jon';
//var age = 20;
//if (age < 13){
//    console.log(firstName + ' is a boy.');
//} else if (age >= 13 && age < 20) {
//    console.log(firstName + ' is a teenager.');
//}
//else if ((age >= 20 && age < 30)){
//    console.log(firstName + ' is a young man.');
//}
//else {
//    console.log(firstName + ' is a man.');
//}

/****************************************************************************************************
The Ternary Operator and Switch Statements
*/
//Ternary Operator
var firstName = 'John';
var age = 16;

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');


var drink = age >= 18 ? 'beer' : 'juice';

console.log(drink);

// Switch statement

var job = 'instructor';
switch (job) {
    case 'teacher' :
    case 'instructor':     
        console.log (firstName + ' teaches kids how to code');
        break;
    case 'driver': 
        console.log (firstName + ' drives an uber in lisbon');
         break;
     case 'driver': 
        console.log (firstName + ' designs websites');
         break;
    default: 
        console.log (firstName + ' does something else'); 
}


switch (true) {
    case age < 13 :    
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20: 
        console.log(firstName + ' is a teenager.');
         break;
     case age >= 20 && age < 30: 
        console.log(firstName + ' is a young man.');
         break;
    default: 
        console.log(firstName + ' is a man.'); 
}













