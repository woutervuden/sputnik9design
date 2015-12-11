import React from 'react';

export default class extends React.Component{
  render() {
    return <h1 onClick={this._onClick}>Hello!</h1>
  }

  _onClick() {
    alert("foo")
  }
}
