import React, { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prewState => ({ visible: !prewState.visible }));
  };

  render() {
    return (
      <div className="Dropdown">
        <button type="button" className="Dropdown_toggle" onClick={this.toggle}>
          {this.state.visible ? 'Hide' : 'Show'}
        </button>
        {this.state.visible && <div className="Dropdown__menu">Menu</div>}
      </div>
    );
  }
}

export default Dropdown;
