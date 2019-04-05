// функция расчитана на то, что в нее поступает строка длинна которой 1 элемент (первый вариант)
// длина не важна - 2 вариант
// если это пробел - не пропустит, если символ - то гуд
// в итоге она позволяет заполнять логин/пароль/стоимость БЕЗ пробелов, слитно

// const noSpaces = (str) => {
//   if (str.indexOf(" ") !== -1) {
//     const newStr = str.substring(str.indexOf(" ") + 1);
//     return newStr;
//   }
//   return str;
// };

const noSpaces = (str) => {
  while (str.indexOf(' ') !== -1) {
    const space = str.indexOf(' ');
    const str1 = str.substring(0, space);
    const str2 = str.substring(space + 1);
    str = str1 + str2;
  }
  return str;
};

export default noSpaces;
