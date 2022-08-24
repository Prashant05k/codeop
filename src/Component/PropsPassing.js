import React from "react";
import { createRef } from "react";

class PropsPassing extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Prashant",
    };
    this.userRef = createRef()
  }
  handleClick = () => {
    this.setState({ name: "Akash" });
    console.log(this.userRef)
  };
  render() {
    return (
      <div>
        <Child1  data={this.state.name} fn={this.handleClick} />
        <Child2 ref={this.userRef}/>
      </div>
    );
  }
}

function Child1({ data, fn }) {
  // console.log(data, fn)
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={fn}>Click Me</button>
    </div>
  );
}

class Child2 extends React.Component{
  constructor(ref){
    super(ref)
    // console.log(ref)
  }
  render(){
    // console.log(ref)
    return (
      <div></div>
    )
  }
  
}

export default PropsPassing;
