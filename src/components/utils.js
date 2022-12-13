export const isEmptyString = (string) => {
  return string.length === 0;
};

const getRandomIndex = (numberArray) => {
  if (numberArray.length === 1) return 0;

  const maxIndex = numberArray.length;
  return Math.floor(Math.random() * maxIndex);
};

// return: Array<{person, randomNumber}>
// ? random을 어떻게 보장하지 - 이게 랜덤한건가
export const randomMatchingPersonAndNumber = (people) => {
  const numbers = Array.from({ length: people.length }, (_, i) => i + 1);

  return people.map((person) => {
    const randomIndex = getRandomIndex(numbers);
    const randomNumber = numbers[randomIndex];

    numbers.splice(randomIndex, 1);

    return {
      person,
      randomNumber,
    };
  });
};
