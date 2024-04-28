import React, { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component { 
    render() { 
        return (
            <div className="Dropdown">
                <button type="button" className="Dropdown_toggle">
                    Show
                </button>
                <div className="Dropdown__menu">Menu</div>
            </div>
        )
    }
}

export default Dropdown;