/**
 * @param {string} height - Высота лесенки
 * @returns {string} Строка с отображением лесенки
 * @description Формирование строки с лесенкой заданной длины
 */

export function renderLadder(height) {
  let result = "";

  if (height === null) {
    throw new Error("Пользователь отменил ввод");
  }

  height = Number(height);

  if (!Number.isFinite(height) || height < 0 || height % 1 !== 0) {
    throw new Error("Некорректные входные данные");
  }

  for (let i = 0; i <= height; i++) {
    if (result !== "") {
      result += "\n";
    }

    for (let j = 1; j <= i; j++) {
      result += j;
    }
  }

  return result;
}
