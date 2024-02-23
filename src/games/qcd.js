import { getRandomNumber, runGame } from '../index.js';


const qsd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return qsd(b, a % b);
};



const gameRules = 'Find the greatest common divisor of given numbers.';

const playQcd = () => {
  const getQuestionAndAnswer = () => {
    const num1 = getRandomNumber(100);
    const num2 = getRandomNumber(100);

    const question = `${num1} ${num2}`;


    const answer = String(qsd(num1, num2));

   
    return { question, answer };
  };
  runGame(gameRules, getQuestionAndAnswer);
};

export default playQcd;