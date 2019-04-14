// функция удаляет ВСЕ пробелы в полученной строке
// благодаря этой функции поля: логин/пароль/стоимость заполняются БЕЗ пробелов, слитно

const removeAllSpaces = (str) => {
  let resultString = str;
  while (resultString.indexOf(' ') !== -1) {
    const indexSpace = resultString.indexOf(' ');
    const str1 = resultString.substring(0, indexSpace);
    const str2 = resultString.substring(indexSpace + 1);
    resultString = str1 + str2;
  }
  return resultString;
};

export default removeAllSpaces;
