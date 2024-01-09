

import readlineSync from 'readline-sync';

// Функция проверки четности числа
const isEven = number => number % 2 === 0;

// Функция запуска игры
const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const question = Math.floor(Math.random() * 100);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = isEven(question) ? 'yes' : 'no';

    if (userAnswer.toLowerCase() === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default brainEven;