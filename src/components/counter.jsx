import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Counter extends Component {
  state = {
    value: this.props.value
  };

  styles = {}

  render() {

    console.log('props', this.props)
    return (
      <React.Fragment>
        <h3>Counter</h3>
        <span className={this.getbadgeClass()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement}>Increment</button> {/* 3 */}
        <button onClick={this.handleDecrement}>Decrement</button> {/* 4 */}
        <button onClick={this.doHandleIncrement}>Increment</button> {/* 5 and 6 */}
        <button onClick={() => this.handleIncrementArgArrow(1)}>Increment</button> {/* 7 */}
      </React.Fragment>
    );
  }
  
  // 1 
  formatCount = () => {
    const {value} = this.state;
    return value === 0 ? 'Zero' : value;
  }
  
  // 2  
  getbadgeClass = () => {
    let badge = 'badge m-2 badge-';
    badge += this.state.value === 0 ? 'warning':'primary';
    console.log(badge)
    return badge;
  }

  // 3
  handleIncrement = () => {
    this.setState({value: this.state.value+1})
    console.log('Increment clicked', this.state.value);
  }
  
  // 4
  handleDecrement = () => {
    if(this.state.value <= 0){
      return 'disabled';
    }
    this.setState({value: this.state.value-1})
    console.log('Decrement clicked', this.state.value);
  }
  
  // 5    Passing event arguments
  handleIncrementArg = (product) => {
    console.log(product)
    this.setState({value: this.state.value+1})
  }
  
  // 6  Linked to 5
  doHandleIncrement = () => {
    this.handleIncrementArg({id:1})
  }
  
  // 7    Passing event arguments using arrow
  handleIncrementArgArrow = (product) => {
    console.log(product)
    this.setState({value: this.state.value+1})
  }
    
}

export default Counter;
