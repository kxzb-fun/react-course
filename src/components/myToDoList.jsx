import { useState } from 'react';
import { useEffect } from "react";


function TodoApp() {

  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    console.log("tasks 更新了:", tasks);
  }, [tasks]); 
  

  // 添加任务
  const addTask = () => {
    if(inputValue === '') return;
    setTasks([...tasks, inputValue]);
    setInputValue('');
  };

  // 删除任务
  const deleteTask = (index) => {
    console.log(tasks); 
    const tempTask = [...tasks]; 
    tempTask.splice(index, 1);
    setTasks(tempTask); 
    console.log(tempTask); 
    console.log(tasks);
  };

  return (
    <div style={styles.container}>
      <h1>待办事项列表</h1>
      <div style={styles.inputContainer}>
        {/* 输入框 */}
        <input
            type="text"
            placeholder='请输入任务...'
            value={inputValue}
            onChange={(e) => {
                setInputValue(e.target.value);
            }}
            style={styles.input}
        />

        {/* 输入框按钮 */}
        <button onClick={addTask} style={styles.addButton}>
          添加
        </button>
      </div>
      <ul style={styles.list}>
        {/* 任务列表 */}
        {tasks.map((task, index) => (
          <li key={index} style={styles.listItem}>
            {task}
            <button onClick={() => deleteTask(index)} style={styles.deleteButton}>
              删除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 样式
const styles = {
  container: {
    maxWidth: '400px',
    margin: '20px auto',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
    marginRight: '5px',
    width: '70%',
  },
  addButton: {
    padding: '8px 12px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginBottom: '5px',
  },
  deleteButton: {
    padding: '4px 8px',
    fontSize: '14px',
    cursor: 'pointer',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
  },
};

export default TodoApp;
