import { Component } from "react";

class ClassComponent extends Component {
  state = {
    count: 0,
  };

  // 组件挂载后执行（相当于 useEffect 的依赖空数组 []）
  componentDidMount() {
    console.log("ClassComponent Mounted");
    document.title = `Count: ${this.state.count}`;
  }

  // 每次组件更新时执行（相当于 useEffect 的依赖数组中有 count）
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("ClassComponent Updated");
      document.title = `Count: ${this.state.count}`;
    }
  }

  // 组件卸载时执行
  componentWillUnmount() {
    console.log("ClassComponent Unmounted");
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default ClassComponent;
