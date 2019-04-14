// функция применяется к текстовым инпутам на полях: название списка, категории, продукта
// принимает строку и удаляет ЛИШНИЕ пробелы
// строка разбивается по символьно и работа идет с массивом символов

const removeSpaceInBegin = (arrSymbols) => { // 1) удаление пробела в начале
  if (arrSymbols[0] === ' ') {
    arrSymbols.splice(0, 1); // начиная с позиции 0, удалить 1 элемент
    return false;
  } return true; // первый элемент - не пробел
};

const removeSpaceInEnd = (arrSymbols) => { // 2) удаление второго пробела в конце
  const indexLastItem = arrSymbols.length - 1;
  const indexPenultimateItem = indexLastItem - 1; // индекс предпоследнего элемента
  if ((arrSymbols[indexLastItem] === ' ') && (arrSymbols[indexPenultimateItem] === ' ')) {
    arrSymbols.splice(indexLastItem, 1); // начиная с позиции "последний", удалить 1 элемент
    return false;
  } return true;
};

const removeUnnecessarySpaces = (str) => {
  const arrSymbols = str.split('');
  while (removeSpaceInBegin(arrSymbols) !== true);
  while (removeSpaceInEnd(arrSymbols) !== true);
  const newStr = arrSymbols.join('');
  return newStr;
};

export default removeUnnecessarySpaces;
