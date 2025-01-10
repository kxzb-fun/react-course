import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  // 添加新的 Todo
  const handleAddTodo = (text) => {
    const newTodo = { id: Date.now(), text };
    setTodos([...todos, newTodo]);
  };

  // 删除 Todo
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>待办事项</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
    </div>
  );
};

export default TodoApp;
