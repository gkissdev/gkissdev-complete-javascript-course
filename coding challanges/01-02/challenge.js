/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kgand height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement bothversions)
3. Create a Boolean variable 'markHigherBMI' containing information aboutwhether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.
*/
// test case 1
const markMsg = "Mark's BMI is higher than John's!";
const johnMsg = "John's BMI is higher than Mark's!";
let markHeight, markMass, markBMI, johnHeight, johnMass, johnBMI, markHigherBMI;
markHeight = 1.69; markMass = 78; markBMI = markMass / markHeight ** 2;
johnHeight = 1.95; johnMass = 92; johnBMI = johnMass / johnHeight ** 2;
markHigherBMI = markBMI > johnBMI;
console.log("Mark BMI " + markBMI);
console.log("John BMI " + johnBMI);
console.log(markHigherBMI);
if (markHigherBMI) {
    console.log(markMsg);
} else {
    console.log(johnMsg);
}
let markMsgTL = `Mark's (BMI ${markBMI}) is higher than John's (${johnBMI})!`;
let johnMsgTL = `John's (BMI ${johnBMI}) is higher than Mark's (${markBMI})!`;
if (markHigherBMI) {
    console.log(markMsgTL);
} else {
    console.log(johnMsgTL);
}
// test case 2
markHeight = 1.88; markMass = 95; markBMI = markMass / markHeight ** 2;
johnHeight = 1.76; johnMass = 85; johnBMI = johnMass / johnHeight ** 2;
markHigherBMI = markBMI > johnBMI;
console.log("Mark BMI " + markBMI);
console.log("John BMI " + johnBMI);
console.log(markHigherBMI);
if (markHigherBMI) {
    console.log(markMsg);
} else {
    console.log(johnMsg);
}
markMsgTL = `Mark's (BMI ${markBMI}) is higher than John's (${johnBMI})!`;
johnMsgTL = `John's (BMI ${johnBMI}) is higher than Mark's (${markBMI})!`;
if (markHigherBMI) {
    console.log(markMsgTL);
} else {
    console.log(johnMsgTL);
}
/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
GOOD LUCK �
*/

