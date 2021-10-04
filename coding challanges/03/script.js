/*There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK */
const msg = `average score for `;
const dWin = `Dolphins Won!`;
const kWin = `Koalas Won!`;
let scoreD1, scoreD2, scoreD3, avgD, avgDMsg, scoreK1, scoreK2, scoreK3, avgK,
    avgKMsg;

// Basic scenario
scoreD1 = 96;
scoreD2 = 108;
scoreD3 = 89;
scoreK1 = 88;
scoreK2 = 91;
scoreK3 = 110;
avgD = (scoreD1 + scoreD2 + scoreD3) / 3;
avgK = (scoreK1 + scoreK2 + scoreK3) / 3;
avgDMsg = `${msg}Dolphins: ${avgD}`;
avgKMsg = `${msg}Koalas ${avgK}`;
// task 1
console.log(`${avgDMsg} and ${avgKMsg}`);
// task 2
console.log(avgD === avgK ? `Draw ${avgDMsg} and ${avgKMsg}` : avgD > avgK ? dWin : kWin);
// task 3
console.log(avgD === avgK ?
    `Draw ${avgDMsg} and ${avgKMsg}` :
    avgD > avgK ?
        avgD > 100 ? dWin : `no winner!` :
        avgK > 100 ? kWin : `no winner!`);
// bonus 2
console.log(avgD === avgK ?
    avgD > 100 ? `Draw ${avgDMsg} and ${avgKMsg}` :
        `no winner!` :
    avgD > avgK ?
        avgD > 100 ? dWin : `no winner!` :
        avgK > 100 ? kWin : `no winner!`);

// B1
scoreD1 = 97;
scoreD2 = 112;
scoreD3 = 101;
scoreK1 = 109;
scoreK2 = 95;
scoreK3 = 123;
avgD = (scoreD1 + scoreD2 + scoreD3) / 3;
avgK = (scoreK1 + scoreK2 + scoreK3) / 3;
avgDMsg = `${msg}Dolphins: ${avgD}`;
avgKMsg = `${msg}Koalas ${avgK}`;
// task 1
console.log(`${avgDMsg} and ${avgKMsg}`);
// task 2
console.log(avgD === avgK ? `Draw ${avgDMsg} and ${avgKMsg}` : avgD > avgK ? dWin : kWin);
// task 3
console.log(avgD === avgK ?
    `Draw ${avgDMsg} and ${avgKMsg}` :
    avgD > avgK ?
        avgD > 100 ? dWin : `no winner!` :
        avgK > 100 ? kWin : `no winner!`);
// bonus 2
console.log(avgD === avgK ?
    avgD > 100 ? `Draw ${avgDMsg} and ${avgKMsg}` :
        `no winner!` :
    avgD > avgK ?
        avgD > 100 ? dWin : `no winner!` :
        avgK > 100 ? kWin : `no winner!`);
// B2
scoreD1 = 97;
scoreD2 = 112;
scoreD3 = 101;
scoreK1 = 109;
scoreK2 = 95;
scoreK3 = 106;
avgD = (scoreD1 + scoreD2 + scoreD3) / 3;
avgK = (scoreK1 + scoreK2 + scoreK3) / 3;
avgDMsg = `${msg}Dolphins: ${avgD}`;
avgKMsg = `${msg}Koalas ${avgK}`;
// task 1
console.log(`${avgDMsg} and ${avgKMsg}`);
// task 2
console.log(avgD === avgK ? `Draw ${avgDMsg} and ${avgKMsg}` : avgD > avgK ? dWin : kWin);
// task 3
console.log(avgD === avgK ?
    `Draw ${avgDMsg} and ${avgKMsg}` :
    avgD > avgK ?
        avgD > 100 ? dWin : `no winner!` :
        avgK > 100 ? kWin : `no winner!`);
// bonus 2
console.log(avgD === avgK ?
    avgD > 100 ? `Draw ${avgDMsg} and ${avgKMsg}` :
        `no winner!` :
    avgD > avgK ?
        avgD > 100 ? dWin : `no winner!` :
        avgK > 100 ? kWin : `no winner!`);