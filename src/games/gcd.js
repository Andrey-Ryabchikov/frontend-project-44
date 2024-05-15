import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const gsd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gsd(b, a % b);
};

const gameRules = 'Find the greatest common divisor of given numbers.';

const playGcd = () => {
  const getQuestionAndAnswer = () => {
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 100);

    const question = `${num1} ${num2}`;

    const answer = String(gsd(num1, num2));

    return { question, answer };
  };
  runGame(gameRules, getQuestionAndAnswer);
};

export default playGcd;
