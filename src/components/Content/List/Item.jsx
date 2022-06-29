import React from "react";
import { useTodo } from "../../../contexts/TodoContext";

const Item = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useTodo();

  const onChange = (id) => toggleTodo(id);

  const onDestroy = (id) => deleteTodo(id);

  return (
    <li key={todo.id} className={todo.completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => onChange(todo.id)}
        />
        <label>{todo.text} </label>
        <button className="destroy" onClick={() => onDestroy(todo.id)}></button>
      </div>
    </li>
  );
};

export default Item;
