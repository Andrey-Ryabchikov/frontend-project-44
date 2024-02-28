import { getRandomNumber, runGame } from '../index.js';

const newProgression = (start, step, length, index) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    if (i === index) {
      progression.push('..');
    } else {
      progression.push(start + i * step);
    }
  }
  return progression.join(' ');
};

const gameRules = 'What is the result of the expression?';

const progressionGame = () => {
  const getQuestionAndAnswer = () => {
    const progressionStart = getRandomNumber(20) + 1;
    const progressionStep = getRandomNumber(5) + 1;
    const progressionLength = getRandomNumber(10) + 5;
    const index = getRandomNumber(progressionLength);
    const correctAnswer = String(progressionStart + index * progressionStep);
    const question = newProgression(
      progressionStart,
      progressionStep,
      progressionLength,
      index,
    );

    return { question: `${question}`, answer: correctAnswer };
  };

  runGame(gameRules, getQuestionAndAnswer);
};

export default progressionGame;
