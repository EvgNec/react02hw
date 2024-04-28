import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  //     constructor() {
  //         super();
  //         this.state = {
  //             value: 5,
  //         };
  // }
    
  state = {
    value: 5,
    };
    
    handleIncrement = () => {
        this.setState({ value:10})
    };
    handleDecrement = () => {  this.setState({ value:7})};
    
  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>
        <div className="Counter__controls">
          <button type="button" onClick={this.handleIncrement}>
            Add 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Minus 1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
