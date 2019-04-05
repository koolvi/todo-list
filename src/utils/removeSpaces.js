const f1 = (arr) => {
  if (arr[0] === ' ') {
    arr.splice(0, 1); // начиная с позиции 0, удалить 1 элемент
    return false;
  } return true; // первый элемент - не пробел
};

const f2 = (arr) => {
  const indexLastItem = arr.length - 1;
  const indexPredposledniyItem = indexLastItem - 1;
  if ((arr[indexLastItem] === ' ') && (arr[indexPredposledniyItem] === ' ')) {
  // if(arr[indexLastItem] === ' '){
    arr.splice(indexLastItem, 1); // начиная с позиции 0, удалить 1 элемент
    return false;
  } return true; // первый элемент - не пробел
};

const removeSpaces = (str) => {
  const arr = str.split('');
  while (f1(arr) !== true);
  while (f2(arr) !== true);
  const newStr = arr.join('');
  return newStr;
};

export default removeSpaces;
