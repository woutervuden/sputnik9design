import React from 'react'

export default class extends React.Component {
  componentDidUpdate(prevProps) {
    var node = this.refs.vid.getDOMNode()
    if (prevProps.playing != this.props.playing)
      this.props.playing ? node.play() : node.pause();
    if (prevProps.volume != this.props.volume)
      node.volume = this.props.volume / 100;
  }

  render() {
    return (
      <video ref="vid" poster={this.props.poster} >
        {this.props.sources.map(this._renderSource)}
      </video>
    )
  }

  _renderSource(source) {
    return <source src={source} />
  }
}