import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput1Change = this.handleInput1Change.bind(this);
    this.handleInput2Change = this.handleInput2Change.bind(this);
  }

  handleInput1Change(event) {
    this.setState({
      value1: event.target.value
    })
  }

  handleInput2Change(event) {
    this.setState({
      value2: event.target.value
    })
  }

  handleSubmit(event) {
    if (this.state.value2 == 0) {
      this.setState({
        result: "Divide by zero!!!!!"
      });
    } else {
      this.setState({
        result: this.state.value1 / this.state.value2
      });
    }
    event.preventDefault();
  }

  state = {
    value1: 0,
    value2: 0,
    result: 0,
  }

  render() {
    if (this.state.result === "Divide by zero!!!!!") throw new Error(this.state.result);
    return <>
      <form>
        <input type="number" value={this.state.value1} onChange={this.handleInput1Change}/>
        <input type="number" value={this.state.value2} onChange={this.handleInput2Change}/>
        <div/>
        <h3>{this.state.result}</h3>
        <div/>
        <button onClick={this.handleSubmit}>Calculate</button>
      </form>
    </>;
  }
}
export default Calculator;