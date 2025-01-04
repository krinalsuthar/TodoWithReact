const storageKey = "todoData";
export const GetTodoItems = () => {
  const rawData = localStorage.getItem(storageKey);
  if (!rawData) {
    return [];
  } else {
    return JSON.parse(rawData);
  }
};
export const SetTodoData = (task) => {
  return localStorage.setItem(storageKey, JSON.stringify(task));
};
