import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const playPrime = () => {
  const getQuestionAndAnswer = () => {
    const question = getRandomNumber(1, 50);
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    return { question: `${question}`, answer: correctAnswer };
  };

  runGame(gameRules, getQuestionAndAnswer);
};

export default playPrime;
