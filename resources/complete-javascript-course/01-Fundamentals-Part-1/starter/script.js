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

// type conversion
const inputYear = "1991";
console.log(inputYear, Number(inputYear));
console.log(Number(inputYear) + 18);
console.log(Number("Gergely"));
console.log(typeof NaN);
console.log(String (23), 23);
// type coercion
// + converts to strings but if the string
console.log(" I am " + 38 + " yo");
// other operators converts string to numbers
console.log( "23" - "10" - 3);
console.log( "23" + "10" - 3);
console.log( "23" + "10" + 3);
console.log("23" * 2, 10 / "2");
console.log("18" > 14);
console.log("18" > "14");
console.log("big" > 1);
let n = "1" + 1;
n=n-1;
console.log(n);
console.log(2+3+4+'5');
console.log("10" - "4" - "3" -2 + "5");

//falsy values: values that become false
// when we try to convert them to a boolean
// 0 '' undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
//converting anything else is true
console.log(Boolean({}));
console.log(Boolean("!"));
console.log(Boolean(22));

const money = -1;
if(money){
    console.log(`you have ${money} 💰`);
} else {
    console.log(`get some 💸 because you have ${money}`);
}

let height;
if (height){
    console.log(`height is ${height}`);
}else
    console.log(`height is ${height} 😢`);
*/
/*const age = 18;
if(age === 18) console.log("you just become an adult 😊");
// loose equal type coercion
console.log(Boolean(18 == "18"));
// strictly equal
console.log(Boolean(18 === "18"));

const favorite = prompt(`What is your favorite number?`);
console.log(favorite, typeof favorite);
if(favorite == 23){
    console.log(`${favorite}`);
}

const favNumber = Number(prompt(`number`));
if(favNumber === 23){
    console.log(`${favNumber}`);
}
else if(favNumber ===9){
    console.log(`${favNumber}`);}
else if (favNumber === 7){
    console.log(`${favNumber}`);
} else {
    console.log(`${favNumber} is not 23 or 7 nor 9`);
}

if (favNumber !== 23){
    console.log(`Why not 23? ${favNumber}`);
}
*/
