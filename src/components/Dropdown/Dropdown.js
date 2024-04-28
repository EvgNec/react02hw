import React, { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  show = () => {
    this.setState({ visible: true });
  };
  hide = () => {
    this.setState({ visible: false });
  };

  render() {
    return (
      <div className="Dropdown">
        <button type="button" className="Dropdown_toggle" onClick={this.show}>
          Show
        </button>
        <button type="button" className="Dropdown_toggle" onClick={this.hide}>
          Hide
        </button>
        {this.state.visible && <div className="Dropdown__menu">Menu</div>}
      </div>
    );
  }
}

export default Dropdown;
