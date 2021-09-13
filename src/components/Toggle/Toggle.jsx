import React, { Component } from 'react';
import './Toggle.scss';
class Toggle extends Component {
  constructor() {
    super();

    this.state = {
      isToggleOn: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return(
      <button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
    )
  }
} 

export default Toggle;