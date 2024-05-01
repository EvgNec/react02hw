import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 1,
  };

  makeOptionClassName = index => {
    const optionClasses = ['ColorPicker__option'];
    if (index === this.state.activeOptionIdx) {
      optionClasses.push('ColorPicker__option--active');
    }
    return optionClasses.join(' ');
  };

  render() {
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">ColorPicker</h2>
        <div>
          {this.props.options.map(({ label, color }, index) => {
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color }}
            ></button>;
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
