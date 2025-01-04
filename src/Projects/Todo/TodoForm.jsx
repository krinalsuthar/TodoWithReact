import { useState } from "react";
export const TodoForm = ({ onAddTodo }) => {
  const [input, setInput] = useState({});
  const handleValue = (value) => {
    setInput({ id: value, content: value, checked: false });
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    onAddTodo(input);
    setInput({ id: "", content: "", checked: false });
  };
  return (
    <form
      className="d-flex justify-content-center fs-5"
      onSubmit={handleOnSubmit}
    >
      <div>
        <input
          type="text"
          placeholder="Enter you Task"
          autoComplete="off"
          className="rounded-5 p-2 px-3"
          value={input.content}
          onChange={(e) => handleValue(e.target.value)}
        />
      </div>
      <div>
        <button type="submit" className="button rounded-5 mx-3 p-2 px-3">
          Add Todo
        </button>
      </div>
    </form>
  );
};
