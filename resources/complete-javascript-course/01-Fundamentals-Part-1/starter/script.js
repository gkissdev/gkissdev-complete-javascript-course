
/*
let js = "amazin";
console.log(40 + 8 + 23 - 10);
// console.log("J");
console.log(23);
let firstName = "M";
console.log(firstName);
console.log(firstName);
console.log(firstName);
// variable name conventions
let j_m = "JM";
let $function = 27;
let PI = 3.1415;
let myFirstJob = "sales";
let currentJob = "dev team lead";
console.log(myFirstJob);

console.log(true);
let jsIsFun = true;
console.log(jsIsFun);
console.log(typeof true);
console.log(typeof jsIsFun);
console.log(typeof 23);
console.log(typeof "J");
// dynamic type
jsIsFun = "yes";
console.log(jsIsFun);
console.log(typeof jsIsFun);
let year;
// now the value and the type is undifned
console.log(year);
console.log(typeof year);
// dynaamic assigment
year = 1991;
console.log(year);
console.log(typeof year);
// legacy js bug
console.log(typeof null);
// mutating the age variable
// let is mutable
let age = 30;
age = 31;
// inmutable variable declaration
// by default you should use const!
const birthYear = 1991;
// let is block scoped var is function scoped
var job = "dev";
job = "cto";
// don't do this because it's doesn't create a variable in the current scope instead will create a property on the global object.
lastname = "kiss";
console.log(lastname);
// operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 = 8
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
const firstName = "j";
const lastName = "g"
console.log(firstName + lastName);
console.log(firstName + " " + lastName);
// assigment operators: = , +=, -=, *= /=
let x = 10 + 5;
console.log(x);
x += 10;
console.log(x);
x /= 5;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);

// comperason operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);

// operator precedence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(now - 1991 > now - 2018);
console.log(25 - 10 - 5);
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);
const avarageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, avarageAge);

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;
const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + ".";
console.log(jonas);
// template litterals
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}.`;
console.log(jonasNew);
console.log(`regular string ...`);
console.log("String \n\ with \n\ old \n\ version \n\ multiple \n\ lines");
console.log(`String
multiple
lines
    and tabs`);
*/

const age = 15;
const minAge = 18;
if (age >= minAge) {
    console.log(`Old enough 🚗`)
} else {
    console.log(`${minAge - age} years left for 🚗 until you can 🚲`)
}
let century;
const birthYear = 1991;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
