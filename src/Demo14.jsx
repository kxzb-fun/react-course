import { Component } from "react"; // 从 React 库中导入 Component 类

// 定义一个类组件 Counter 继承自 React.Component
class Counter extends Component {
  // 构造函数，初始化组件
  constructor(props) {
    super(props); // 调用父类的构造函数，传递 props
    // 定义组件的 state，初始化计数器 count 为 0
    this.state = { count: 0 }; 
  }

  // 定义一个箭头函数 increment，用于处理计数器加 1 的逻辑
  increment = () => {
    // 使用 setState 更新 state 中的 count 值
    this.setState({ count: this.state.count + 1 });
  };

  // 定义 render 方法，用于渲染组件的 UI
  render() {
    return (
      <div>
        {/* 显示当前计数器的值 */}
        <p>Count: {this.state.count}</p>
        {/* 按钮，点击时调用 increment 方法 */}
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

// 导出 Counter 组件，供其他文件使用
export default Counter;
