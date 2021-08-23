// Challenge
// Use welcomeStatementing concatenation to join the three provided welcomeStatementings
// (first, second, and third)
// and assign the resulting welcomeStatementing to a variable
// called welcomeStatement. The value of welcomeStatement should be 'Welcome to the jungle!'

const first = "Welcome";
const second = "to the";
const third = "jungle!";

let welcomeStatement = first + ' ' + second + ' ' + third;

console.log(welcomeStatement);

let welcomeStatement2 = first;
welcomeStatement2 += ' ';
welcomeStatement2 += second;
welcomeStatement2 += ' ';
welcomeStatement2 += third;

console.log(welcomeStatement2);

let welcomeStatement3 = [first, second, third].join(' ')

console.log(welcomeStatement3);



// Do not alter below this line
// export const bundle = { welcomeStatement };
