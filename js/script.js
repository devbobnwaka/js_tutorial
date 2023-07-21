/***
 * LOOPS AND ITERATIONS
 */
// for (var i = 0; i < 10; i++ ){
//     console.log(i+1);
// }

var names = ["BOb", 1999, "Mark", "Jane"]
//for loop
// for (var i = 0; i < names.length; i++ ){
//     console.log(names[i]);
// }

// While loop
// var i = 0;
// while(i < names.length){
//     console.log(names[i]);
//     i++
// }

//continue and break statements
for(var i = 0; i<names.length; i++){
    if(typeof names[i] !== 'string') continue;
    console.log(names[i]);
}

for(var i = 0; i<names.length; i++){
    if(typeof names[i] !== 'string') break            ;
    console.log(names[i]);
}




/**
 * OBJECTS AND PROPERTIES
 */
// const d = new Date();
// var year = d.getFullYear();
// var person = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calAge: function(birthYear){
//         age = year - this.birthYear
//     }
// }
// console.log(person.calAge);
/***
 * ARRAYS - 
 */
// var names = ["BOb", "Mark", "Jane"]
// var years = new Array(1990, 1969, 1948)
// console.log(names.length, years);

// FUNCTIONS


// function declaration
// function calculateAge(birthYear){
//     var age = year - birthYear;
//     return age;
// }
// console.log(calculateAge(1993));

/*****
 * FUNCTIONS STATEMENTS AND EXPRESSIONS
 *  */ 
//FUNCTION EXPRESSION
// var calculateAge = function(birthYear){
//     var age = year - birthYear;
//     return age;
// }
// console.log(calculateAge(1993));

// console.log('Hello World!!!');
// // DATA TYPES
// // STRINGS
// var first_name = "Bob";
// var last_name = "Nwaka";
// // NUMBERS
// var age = 25;
// console.log(first_name + " " + last_name);
// console.log(age);
// // BOOLEAN
// var is_valid = false
// console.log(is_valid);
// // UNDEFINED
// var job;
// console.log(job);
// // NULL
// var person = null
// console.log(person);

/****************************
 * VARIABLE MUTATION AND TYPE COERCION
 *  */ 
/******
 * BASIC OPERATORS
 */

/*******
 * OPERATOR PRECEDENCE
 */

