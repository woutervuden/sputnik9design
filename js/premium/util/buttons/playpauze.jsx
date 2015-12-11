import React from 'react'

export default class PlayPauze extends React.Component {
  render() {
    return (
      <button className="playpauze" onClick={this.props.onPlayPauze}>
        {this.props.playing ? "Pauze" : "Play"}
      </button>
    )
  }
}
