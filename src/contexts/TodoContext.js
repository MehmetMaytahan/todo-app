import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [filter, setFilter] = useState("all");
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn React",
      completed: true,
    },
  ]);

  const toggleTodo = (id) => {
    const cloned_todos = [...todos];

    const itemIndex = cloned_todos.findIndex((todo) => todo.id === id);
    const item = todos[itemIndex];
    item.completed = !item.completed;

    setTodos(cloned_todos);
  };

  const deleteTodo = (id) => {
    const cloned_todos = [...todos];

    const itemIndex = cloned_todos.findIndex((todo) => todo.id === id);
    cloned_todos.splice(itemIndex, 1);

    setTodos(cloned_todos);
  };

  const AddTodo = (text) => {
    setTodos((prev) => [...prev, { id: uuidv4(), text, completed: false }]);
  };

  const values = {
    todos,
    setTodos,
    AddTodo,
    toggleTodo,
    deleteTodo,
    filter,
    setFilter,
  };
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

const useTodo = () => {
  const context = useContext(TodoContext);

  if (context === undefined) {
    throw new Error("useTodo hook must be call inside TodoProvider component");
  }
  return context;
};

export { TodoProvider, useTodo };
