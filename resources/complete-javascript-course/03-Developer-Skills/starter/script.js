// Remember, we're gonna use strict mode in all scripts now!
'use strict';
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it
const callTempAmpl = function (temperatures) {
    let min = temperatures[0]
    let max = temperatures[0]
    for (const temperature of temperatures) {
        if (typeof temperature !== 'number')
            continue
        if (temperature < min)
            min = temperature
        if (temperature > max)
            max = temperature
    }
    return max - min
}
console.log(callTempAmpl(temperatures));
// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays
const callTempAmp2l = function (temperatures1, temperatures2) {
    let min = temperatures1[0]
    let max = temperatures1[0]
    for (const temperature of temperatures1.concat(temperatures2)) {
        if (typeof temperature !== 'number')
            continue
        if (temperature < min)
            min = temperature
        if (temperature > max)
            max = temperature
    }
    return max - min
}
const temp = [-1, +19, 'a', true]
console.log(callTempAmp2l(temperatures, temp));






















