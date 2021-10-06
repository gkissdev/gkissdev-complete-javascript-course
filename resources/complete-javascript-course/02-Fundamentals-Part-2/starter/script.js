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
*/
/* array basics
const friends = [`mic`, `ste`, `pet`]
console.log(friends);
const yy = new Array(1991, 1992, 1993)
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);
friends[2] = `jay`
console.log(friends);
const j = 'dev'
 const g = ['g', 'kiss', 2021-1983, j, friends]
console.log(g);
console.log(g.length);

const calcAge = function (by)  {
  return 2021 - by;
}

const years =[1990, 1983,1985, 2020, 2000]
console.log(calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length -1]));
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length -1])]
console.log(ages);
*/
/*basic array functions
//add elements
const friends = [`mic`, `ste`, `pet`]
friends.push('jaj')
console.log(friends);
console.log(friends.push('zol'));
console.log(friends);
friends.unshift('gg')
console.log(friends);
//remove elements
friends.pop();
console.log(friends);
console.log(friends.pop());
friends.shift();
console.log(friends);
console.log(friends.shift());
console.log(friends);

console.log(friends.indexOf(`pet`));
console.log(friends.indexOf("pet"));
console.log(friends.indexOf("ddi"));
console.log(friends.includes('pet'));
console.log(friends.includes('lll'));
friends.push(23);
console.log(friends);
console.log(friends.includes(`23`));
console.log(friends.includes(23));
console.log(`${friends.includes('pet')?`yoo pet`:``}`);
*/

/* Objects */
// object literal syntax
const gergely = {
    firstName: 'gergely',
    lastName: 'kiss',
    age: 2021 -1983,
    job: 'd',
    friends : [`mic`, `ste`, `pet`]
}
console.log(gergely);

console.log(gergely.lastName);
console.log(gergely.friends);
console.log(gergely["job"]);
const  nameKey= 'Name';
console.log(gergely[`first${nameKey}`]);
console.log(gergely[`last${nameKey}`]);

//const interested = prompt(`WHat do you want to know about gergely`)
/*if(gergely[interested])
    console.log(`The data you requested is: ${gergely[interested]}`);
else {
    console.log(`value ""${interested}" not exist`);
}*/
gergely.location = 'uk';
gergely['social'] = '@sg'
console.log(gergely);
console.log(
    `${gergely.firstName} has ${gergely.friends.length} friends, 
    and his best friend is called ${gergely.friends[0]}.`
);







