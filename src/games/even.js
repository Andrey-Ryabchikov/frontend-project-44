import { getRandomNumber, runGame } from '../index.js';
const isEven = (num) => num % 2 === 0;

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const playEvenGame = () => {
  const getQuestionAndAnswer = () => {
    const question = getRandomNumber(100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    
    return { question: `${question}`, answer: correctAnswer };
  };

  runGame(gameRules, getQuestionAndAnswer);
};

export default playEvenGame;
