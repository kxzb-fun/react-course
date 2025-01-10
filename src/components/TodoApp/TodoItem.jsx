// import { Link } from "react-router-dom";
import {useParams} from "react-router-dom";
const TodoItem = ({ todo, onDelete }) => {
    const id = useParams().id
    console.log(id)
  return (
    <li style={{ marginBottom: "10px" }}>
      {/* <Link to={`/todolist/${todo.id}`}>{todo.text}</Link> */}
      <span>{todo.text}</span>
      <button
        onClick={() => onDelete(todo.id)}
        style={{ marginLeft: "10px", padding: "4px 8px" }}
      >
        删除
      </button>
    </li>
  );
};

export default TodoItem;
