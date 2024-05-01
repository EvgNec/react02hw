import React from 'react';
import Controls from './Controls';
import './Counter.css';

class Counter extends React.Component {
  //     constructor() {
  //         super();
  //         this.state = {
  //             value: 5,
  //         };
  // }
    static defaultProps = {
        initialValue:0,
    }

    static propTypes = {};
  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevStaet => {
      return { value: prevStaet.value + 1 };
    });
  };
  handleDecrement = () => {
    this.setState(prevStaet => ({ value: prevStaet.value - 1 }));
  };

  render() {
        const { value } = this.state;
    return (
      <div className="Counter">
        <span className="Counter__value">{value}</span>
        {/* <div className="Counter__controls">
          <button type="button" onClick={this.handleIncrement}>
            +1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            -1
          </button>
        </div> */}
            <Controls onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}/>
      </div>
    );
  }
}

export default Counter;
