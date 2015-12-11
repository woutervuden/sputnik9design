import React from 'react'

export default class extends React.Component {
  render() {
    return <button className="fullscreen-btn" onClick={this.props.onClick}>
      Fullscreen
    </button>
  }
}
