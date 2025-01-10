import { useState } from "react";

const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    onAddTodo(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="添加新事项"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ padding: "8px", width: "70%" }}
      />
      <button type="submit" style={{ padding: "8px 12px", marginLeft: "10px" }}>
        添加
      </button>
    </form>
  );
};

export default TodoForm;
