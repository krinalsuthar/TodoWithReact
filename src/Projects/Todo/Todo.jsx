import { useState } from "react";
import "./todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDateTime } from "./TodoDateTime";
import { GetTodoItems, SetTodoData } from "./LocalStorage";

export const Todo = () => {
  const [task, setTask] = useState(() => GetTodoItems());

  const handleOnSubmit = (input) => {
    const { id, content, checked } = input;
    if (!content) return;

    if (task.find((currEle) => currEle.content == content)) {
      alert(`${content} is aalready added!`);
      return;
    }
    setTask((prev) => [...prev, { id, content, checked }]);
  };

  SetTodoData(task);

  const delTask = (value) => {
    const updateTask = task.filter((currEle) => currEle.content !== value);
    setTask(updateTask);
  };

  const checked = (value) => {
    const updateCheckedTask = task.map((currEle) => {
      if (currEle.content === value) {
        return { ...currEle, checked: !currEle.checked };
      } else {
        return currEle;
      }
    });
    setTask(updateCheckedTask);
  };

  function clearAll() {
    setTask([]);
  }
  return (
    <>
      <div>
        <div>
          <h1 className="text-center my-3">Todo List</h1>
          <TodoDateTime />
        </div>
        <div>
          <TodoForm onAddTodo={handleOnSubmit} />
        </div>
        <div>
          <div className="center mt-4 fs-5">
            {task.map((currEle, index) => (
              <TodoList
                key={currEle.id}
                task={currEle.content}
                checked={currEle.checked}
                deleteTask={delTask}
                checkedTask={checked}
              />
            ))}
          </div>
        </div>
        <div className="text-center">
          <button className="button rounded-5 mx-3 p-2 px-3" onClick={clearAll}>
            ClearAll
          </button>
        </div>
      </div>
    </>
  );
};
