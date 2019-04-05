// функция удаляет последний символ в полученной строке, если он является пробелом
const deleteLastSpaceInStr = (str) => {
  let correctStr = '';
  const indexLastItem = str.length - 1;
  if (str[indexLastItem] === ' ') {
    correctStr = str.substr(0, indexLastItem);
    return correctStr;
  }
  return str;
};


export default deleteLastSpaceInStr;
