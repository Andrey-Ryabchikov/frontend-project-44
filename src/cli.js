// import readlineSync from 'readline-sync';

// const introName = () => {
//   const userName = readlineSync.question('May I have your name?');
//   console.log(`Hello, ${userName}!`);
// };

// export default introName;


import readlineSync from 'readline-sync';

const greet = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export default greet;
