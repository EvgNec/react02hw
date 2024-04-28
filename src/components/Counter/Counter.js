import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">0</span>
        <div className="Counter__controls">
                <button type="button" onClick={() => {
                    console.log('Click button +');
          }}>
            Add 1
          </button>
          <button type="button" onClick={() => {
                    console.log('Click button -');
          }}>Minus 1</button>
        </div>
      </div>
    );
  }
}

export default Counter;
