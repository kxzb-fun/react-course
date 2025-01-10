import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete }) => {
  return (
    <ul style={{ listStyle: "none", paddingLeft: "0" }}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default TodoList;
