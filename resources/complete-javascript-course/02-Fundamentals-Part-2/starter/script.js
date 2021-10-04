'use strict';
/* strict mode
let hasDriversLicense = false;
const passTest = true;
if(passTest) hasDriversLicense =true;
if(hasDriversLicense) console.log(`i can drive`);
//const interface;
//const private;
*/
/* functions
function logger(){
    console.log('My name is G');
}
logger();

function fruitProcessor(apples, oranges){
    return `🥤 Juice with ${apples} apples and ${oranges} oranges`
}

console.log(fruitProcessor(2, 3));
console.log(fruitProcessor(0, 5));
*/
/* function declaration and expression
console.log(`${calcAge1(1983)}`);
// you can call them before they defined
// this happens because of a process called hoisting
// javaScript only hoists declarations, not initializations.
function calcAge1(birthYear){
    return 2037 - birthYear;
}
// function expression
const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}
console.log(calcAge2(1983));
*/
/* arrow functions they do not get a this keyword
const calcAgeArrow = birthYear => 2037 - birthYear;
console.log(calcAgeArrow(1983));
const yearsUntilRetirement = birthYear => {
    const age = 2021 - birthYear;
    return 65 - age;
}
console.log(yearsUntilRetirement(1983));
const yearsUntilRetirement2 = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    return `${firstName} retires in ${65 - age} year`;
}
console.log(yearsUntilRetirement2(1983, "G"));
console.log(yearsUntilRetirement2(1985, "D"));

*/
/*functions with in functions
function cutFruitPieces(fruit){
    return fruit *4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    return `🥤 with ${ applePieces} apple pieces and ${ orangePieces} orange pieces`
}
console.log(fruitProcessor(1, 2));
*/

const calcAge = function (birthYear) {
    return 2021 - birthYear
}
const retirement = function (age) {
    return 65 - age;
}
const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirementYears = Number(retirement(age));
    return retirementYears > 0 ?
        `${firstName} retires in ${retirementYears} years` :
        `${firstName} is retired for ${-1 * retirementYears} years`;
}
console.log(yearsUntilRetirement(1983, "G"));
console.log(yearsUntilRetirement(1950, "GY"));





