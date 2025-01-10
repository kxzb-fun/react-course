import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import axios from "axios";
import {getAllTodo} from '../../api/todo'

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  // 从服务端获取 Todo 数据
  useEffect(() => {
    // axios
    //   .get("http://localhost:3001/v2/todos")
    //   .then((response) => {

    //     console.log(response.data, 8888);
    //     setTodos(response.data); // 设置服务端返回的数据
    //   })
    //   .catch((error) => {
    //     console.error("获取数据失败:", error);
    //   });
    getAllTodo().then((res)=>{
      console.log(res.data)
      setTodos(res.data)
    })
  }, []);

  function test() {
    console.log(1)
    setTimeout(() => {
      setTodos([1, 2, 4]);
    });
  }
  // 添加新的 Todo
  const handleAddTodo = (text) => {
    // const newTodo = { id: Date.now(), text };
    // setTodos([...todos, newTodo]);
    const newTodo = { text, 'isDone': false };
    axios.post("http://localhost:3001/todos", newTodo).then((res) => {
      console.log(res.data);
      setTodos([...todos, res.data]);
    });
  };

  // 删除 Todo
  const handleDeleteTodo = (id) => {
    // setTodos(todos.filter((todo) => todo.id !== id));
    axios.delete(`http://localhost:3001/todos/${id}`).then(() => {
      // console.log(res);
      // console.log(res.data)
      setTodos(todos.filter((todo) => todo.id !== id));
    });
  };

  if (todos.length === 0) {
    return <div>数据加载中...</div>;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>待办事项</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
      <button onClick={()=>test()}>click me</button>
    </div>
  );
};

export default TodoApp;
