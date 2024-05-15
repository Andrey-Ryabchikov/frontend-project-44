import getRandomNumber from '../utils.js';
import runGame from '../index.js';


const calculate = (num1, num2, operation) => {
  let result;
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      throw new Error(`Unknown operation: '${operation}'!`);
  }
  return result;
};

const gameRules = 'What is the result of the expression?';

const playCalcGame = () => {
  const getQuestionAndAnswer = () => {
    const operations = ['+', '-', '*'];

    const num1 = getRandomNumber(1, 10);
    const num2 = getRandomNumber(1, 10);

    const operationIndex = getRandomNumber(0, operations.length - 1);
    const operation = operations[operationIndex];
    const question = `${num1} ${operation} ${num2}`;

    const answer = String(calculate(num1, num2, operation));

    return { question, answer };
  };

  runGame(gameRules, getQuestionAndAnswer);
};

export default playCalcGame;