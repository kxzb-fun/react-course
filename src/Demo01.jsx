import { Component } from "react";

class ClassNamedComponent extends Component {
  //   return <div>这是一个类组件</div>
  // 不可以直接return jsx 需要使用 render 方法返回
 
  render() {
    return <div>这是一个类组件</div>;
  }
}

export default ClassNamedComponent;

// js class 这种形式 来写的
