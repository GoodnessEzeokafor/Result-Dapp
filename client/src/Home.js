import React, { Component } from 'react';
import Content from "./Content"


export default class Home  extends Component {
  render() {
    return (
      <Content 
      account={this.props.account}
      admin={this.props.admin}
      />
    );
  }
}



