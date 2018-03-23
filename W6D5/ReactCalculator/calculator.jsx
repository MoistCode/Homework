import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      input1: "",
      input2: "",
      result: 0
    }
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum1.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.clear = this.clear.bind(this);
  }

  setNum1(e) {
    e.preventDefault();
    let input1 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({ input1: input1 });

  }

  setNum2(e) {
    e.preventDefault();
    let input2 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({ input2: input2 })
  }

  add(e) {
    e.preventDefault();
    let result = this.state.input1 + this.state.input2;
    this.setState({ result });
  }

  subtract(e) {
    e.preventDefault();
    let result = this.state.input1 - this.state.input2;
    this.setState({ result });
  }

  multiply(e) {
    e.preventDefault();
    let result = this.state.input1 * this.state.input2;
    this.setState({ result });
  }

  divide(e) {
    e.preventDefault();
    let result = this.state.input1 / this.state.input2;
    this.setState({ result });
  }

  clear(e) {
    e.preventDefault();
    this.setState({ input1: "", input2: "", result: 0})
  }

  render(){
    return (
      <div>
        <h1>{ this.state.result }</h1>
        <input onChange={this.setNum1} value={this.state.input1}></input>
        <input onChange={this.setNum2} value={this.state.input2}></input>
        <br></br>
        <button onClick={this.add}>Add</button>
        <button onClick={this.subtract}>Subtract</button>
        <button onClick={this.multiply}>Multiply</button>
        <button onClick={this.divide}>Divide</button>
        <button onClick={this.clear}>Clear</button>
      </div>
    );
  }
}

export default Calculator;
