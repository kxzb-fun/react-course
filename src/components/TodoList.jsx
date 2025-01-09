import { useState } from 'react';

function TodoApp() {
  // 状态：存储任务列表
  const [tasks, setTasks] = useState([]);
  // 状态：存储输入框内容
  const [inputValue, setInputValue] = useState('');

  // 添加任务
  const addTask = () => {
    if (inputValue.trim() === '') {
      alert('任务内容不能为空！');
      return;
    }
    setTasks([...tasks, inputValue]); // 将新任务添加到任务列表
    setInputValue(''); // 清空输入框
  };

  // 删除任务
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index); // 移除指定任务
    setTasks(updatedTasks);
  };

  return (
    <div style={styles.container}>
      <h1>待办事项列表</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="请输入任务..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // 更新输入框内容
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addButton}>添加</button>
      </div>
      <ul style={styles.list}>
        {tasks.map((task, index) => (
          <li key={index} style={styles.listItem}>
            <span>{task}</span>
            <button onClick={() => deleteTask(index)} style={styles.deleteButton}>删除</button>
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
