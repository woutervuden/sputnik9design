import React from 'react'

export default class Video extends React.Component {

  componentDidMount() {
    this.node = this.refs.vid.getDOMNode()
    this.node.volume = this.props.volume / 100;
    this.node.addEventListener('timeupdate',
                               ({target: {currentTime, duration}}) => {
      this.props.onTimeUpdate(currentTime, duration);
    });
  }

  componentDidUpdate(prevProps) {
    var node = this.refs.vid.getDOMNode()
    if (prevProps.playing != this.props.playing)
      this.props.playing ? node.play() : node.pause();
    if (prevProps.volume != this.props.volume)
      node.volume = this.props.volume / 100;
  }

  // Public - to be called by video player parent
  setCurrentTime(newTime) {
    this.refs.vid.getDOMNode().currentTime = newTime;
  }

  // Public - to be called by video player parent
  requestFullScreen() {
    this.refs.vid.getDOMNode().webkitRequestFullscreen();
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
