import { getRandomNumber, runGame } from '../index.js';


const calculate = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return 'Your answer is not correct! Try again:)';
  }
};

const gameRules = 'What is the result of the expression?';

const playCalcGame = () => {
  const getQuestionAndAnswer = () => {
    const operations = ['+', '-', '*'];

    const num1 = getRandomNumber(10);
    const num2 = getRandomNumber(10);

    
    const operation = operations[getRandomNumber(operations.length)];
    const question = `${num1} ${operation} ${num2}`;

    const answer = String(calculate(num1, num2, operation));

    
    return { question, answer };
  };

  runGame(gameRules, getQuestionAndAnswer);
};

export default playCalcGame;