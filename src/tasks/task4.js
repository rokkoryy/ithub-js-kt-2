/**
 * @param {string} word - Слово для проверки
 * @returns {boolean} - Итог проверки
 * @description Проверка слова на палиндром
 */
export function isPalindrome(word) {
  let result = `${word} - палиндром`;

  if (word === null) {
    throw new Error("Пользователь отменил ввод");
  }

  if (word.includes(" ")) {
    throw new Error("Введено несколько слов");
  }

  if (!/^[а-яА-Яa-zA-Z]*$/.test(word)) {
    throw new Error("Некорректные входные данные");
  }

  if (word.length === 1) {
    result = `${word} - не палиндром`;
  }

  const tempWord = word.toLowerCase();
  let leftCounter = 0;
  let rightCounter = word.length - 1;

  while (leftCounter <= word.length / 2) {
    if (tempWord[leftCounter] !== tempWord[rightCounter]) {
      result = `${word} - не палиндром`;
      break;
    }

    leftCounter++;
    rightCounter--;
  }

  return result;
}
