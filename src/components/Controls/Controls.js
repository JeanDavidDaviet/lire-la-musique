import React, { Component } from 'react';

export class Controls extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div className={"controls"}>
        {this.props.children}
      </div>
    );
  }
}

export default Controls;