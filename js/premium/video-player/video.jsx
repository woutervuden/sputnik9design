import React from 'react'

export default class Video extends React.Component {

  componentDidMount() {
    this.refs.vid.volume = this.props.volume / 100;
    this.refs.vid.addEventListener('timeupdate',
                               ({target: {currentTime, duration}}) => {
      this.props.onTimeUpdate(currentTime, duration);
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.playing != this.props.playing)
      this.props.playing ? this.refs.vid.play() : this.refs.vid.pause();
    if (prevProps.volume != this.props.volume)
      this.refs.vid.volume = this.props.volume / 100;
  }

  // Public - to be called by video player parent
  setCurrentTime(newTime) {
    this.refs.vid.currentTime = newTime;
  }

  // Public - to be called by video player parent
  requestFullScreen() {
    this.refs.vid.webkitRequestFullscreen();
  }

  render() {
    return (
      <video ref="vid" poster={this.props.poster} >
        {this.props.sources.map(this._renderSource)}
      </video>
    )
  }

  _renderSource(source) {
    return <source key={source} src={source} />
  }
}
