export default (todoApi) => {
  if (todoApi.categoryId === null) {
    return {
      id: todoApi._id,
      completed: todoApi.completed,
      text: todoApi.text,
      price: todoApi.price,
      category: 'none',
    };
  }
  return {
    id: todoApi._id,
    completed: todoApi.completed,
    text: todoApi.text,
    price: todoApi.price,
    category: todoApi.categoryId,
  };
};
