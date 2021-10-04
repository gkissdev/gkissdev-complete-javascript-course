/*
const country = "UK";
const continent = "Europe";
let population = 60;
const isIsland = true;
const language = "english";
console.log(country);
console.log(continent);
console.log(population);
console.log(isIsland);
console.log(language);
console.log(population / 2);
console.log(population + 1);
console.log(population > 6);
console.log(population < 33);
const description =
    `${country} is in ${continent}, and it is ${population} million people speak ${language}`;
console.log(description);
if(population > 33){
    console.log(`${country} population is above average`);
}else{
    console.log(`${country} population ${population} million is below average`);
}
population = 13;
if(population > 33){
    console.log(`${country} population is above average`);
}else{
    console.log(`${country} population ${population} million is below average`);
}
population=130;
if(population > 33){
    console.log(`${country} population is above average`);
}else{
    console.log(`${country} population ${population} million is below average`);
}
population=60;
if(population > 33){
    console.log(`${country} population is above average`);
}else{
    console.log(`${country} population ${population} million is below average`);
}
/*
 Predict the result of these 5 operations without executing them:
'9' - '5'; 4
'19' - '13' + '17'; 617
'19' - '13' + 17; 23
'123' < 57; false
5 + 6 + '4' + 9 - 4 - 2; 1143
*/
/*
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);
*/
/*Equality Operators: == vs. ===
1. Declare a variable 'numNeighbours' based on a prompt input like this:
prompt('How many neighbour countries does your country
have?');
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
== for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1
4. Use an else block to log 'No borders' (this block will be executed when
'numNeighbours' is 0 or any other value)
5. Test the code with different values of 'numNeighbours', including 1 and 0.
6. Change == to ===, and test the code again, with the same values of
'numNeighbours'. Notice what happens when there is exactly 1 border! Why
is this happening?
7. Finally, convert 'numNeighbours' to a number, and watch what happens now
when you input 1
8. Reflect on why we should use the === operator and type conversion in this
situation

const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours >= 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}
*/
/*LECTURE: Logical Operators
1. Comment out the previous code so the prompt doesn't get in the way
2. Let's say Sarah is looking for a new country to live in. She wants to live in a
country that speaks english, has less than 50 million people and is not an
island.
3. Write an if statement to help Sarah figure out if your country is right for her.
You will need to write a condition that accounts for all of Sarah's criteria. Take
your time with this, and check part of the solution if necessary.
4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
not, log 'Portugal does not meet your criteria :('
5. Probably your country does not meet all the criteria. So go back and temporarily
change some variables in order to make the condition true (unless you live in
Canada :D)
const country = "UK";
const continent = "Europe";
let population = 60;
const isIsland = true;
const language = "english";
console.log( `${language === "english" && population < 50 && !isIsland ? `✌ S should live in ${country}`:`😭 S should not live in ${country}`}`);

*/
/*switch Statement
Use a switch statement to log the following string for the given 'language':
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D'
const language = `english`;
switch (language) {
    case "chinese":
    case "mandarin":
        console.log('1');
        break;
    case "spanish":
        console.log('2');
        break;
    case "english":
        console.log('3');
        break;
    case "hindi":
        console.log('4');
        break;
    case "arabic":
        console.log('5');
        break;
}
*/
/*The Conditional (Ternary) Operator
1. If your country's population is greater than 33 million, use the ternary operator
to log a string like this to the console: 'Portugal's population is above average'.
Otherwise, simply log 'Portugal's population is below average'. Notice how only
one word changes between these two sentences!
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original
const country = "UK";
const continent = "Europe";
let population = 60;
const isIsland = true;
const language = "english";
console.log(`${country}'s population is ${population !== 33 ? population < 33 ? 'bellow' : 'above' : ``} average`);
population = 13;
console.log(`${country}'s population is ${population !== 33 ? population < 33 ? 'bellow' : 'above' : ``} average`);
population = 33;
console.log(`${country}'s population is ${population !== 33 ? population < 33 ? 'bellow' : 'above' : ``} average`);
*/































