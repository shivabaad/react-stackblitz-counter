import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Counter extends Component {
  state = {
    count: 0,
  };

  styles = {}

  render() {
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
    const {count} = this.state;
    return count === 0 ? 'Zero' : count;
  }
  
  // 2  
  getbadgeClass = () => {
    let badge = 'badge m-2 badge-';
    badge += this.state.count === 0 ? 'warning':'primary';
    console.log(badge)
    return badge;
  }

  // 3
  handleIncrement = () => {
    this.setState({count: this.state.count+1})
    console.log('Increment clicked', this.state.count);
  }
  
  // 4
  handleDecrement = () => {
    if(this.state.count <= 0){
      return 'disabled';
    }
    this.setState({count: this.state.count-1})
    console.log('Decrement clicked', this.state.count);
  }
  
  // 5    Passing event arguments
  handleIncrementArg = (product) => {
    console.log(product)
    this.setState({count: this.state.count+1})
  }
  
  // 6  Linked to 5
  doHandleIncrement = () => {
    this.handleIncrementArg({id:1})
  }
  
  // 7    Passing event arguments using arrow
  handleIncrementArgArrow = (product) => {
    console.log(product)
    this.setState({count: this.state.count+1})
  }
    
}

export default Counter;
