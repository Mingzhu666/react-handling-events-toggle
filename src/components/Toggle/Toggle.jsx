import React, { Component } from 'react';
import './Toggle.scss';

class Toggle extends Component {
  constructor() {
    super();

    this.state = {
      isToggle: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggle: !prevState.isToggle,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.isToggle ? "ON" : "OFF"}</button>
    )
  };
}

export default Toggle;