import { FaCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const TodoList = ({ task, deleteTask, checked, checkedTask }) => {
  return (
    <div
      className="todo-item p-2 rounded-5"
      style={{
        border: "2px solid black",
        backgroundColor: "aliceblue",
      }}
    >
      <div>
        <div
          className={`${checked ? "check" : "not-check"}`}
          style={{
            width: "200px",
            marginLeft: "20px",
          }}
        >
          {task}
        </div>
      </div>
      <div>
        <button className="remove-style" onClick={() => checkedTask(task)}>
          <FaCheckCircle className={`mx-4 fs-4`} style={{ color: "green" }} />
        </button>
        <button className="remove-style" onClick={() => deleteTask(task)}>
          <MdDelete className="mx-4 fs-3" style={{ color: "red" }} />
        </button>
      </div>
    </div>
  );
};
