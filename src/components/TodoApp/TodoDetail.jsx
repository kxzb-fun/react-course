import { useParams, useNavigate } from "react-router-dom";

const TodoDetail = ({ todos }) => {
  console.log(9999)
  const navigate = useNavigate();
  const id = useParams().id;
  console.log(id)
  const todo = todos.find((n) => n.id==id);
  if (!todo) {
    return <h2>未找到对应的 Todo 项目</h2>;
  }
  return (
    <div>
      <h2>{todo.text}</h2>
      <div>{todo.id}</div>
      <div>
        <strong>{todo.isDone ? "Done" : ""}</strong>
      </div>
      {/* 返回按钮 */}
      <button onClick={() => navigate(-1)}>返回</button>
    </div>
  );
};

export default TodoDetail;
