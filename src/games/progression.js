import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const gameRules = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const playProgressionGame = () => {
  const getQuestionAndAnswer = () => {
    const progressionStart = getRandomNumber(1, 10);
    const progressionStep = getRandomNumber(2, 5);
    const progressionLength = getRandomNumber(5, 10);
    // const hiddenIndex = getRandomNumber(progressionLength - 1);
    const hiddenIndex = getRandomNumber(0, progressionLength - 1);
    const progression = generateProgression(progressionStart, progressionStep, progressionLength);
    const correctAnswer = String(progression[hiddenIndex]);
    progression[hiddenIndex] = '..';
    const question = progression.join(' ');
    return { question, answer: correctAnswer };
  };

  runGame(gameRules, getQuestionAndAnswer);
};

export default playProgressionGame;
