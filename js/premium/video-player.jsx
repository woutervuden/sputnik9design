import React from 'react';
import Video from './video.jsx';
import ControlPanel from './control-panel.jsx';

export default class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      volume: 80
    }
  }

  render() {
    return (
      <div className="video-player">
        <Video
          ref="vid"
          sources={this.props.sources}
          poster={this.props.poster}
          playing={this.state.playing}
          volume={this.state.volume}
        />
        <ControlPanel
          playing={this.state.playing}
          onPlayPauze={this._onPlayPauze.bind(this)}
          volume={this.state.volume}
          onVolumeChange={this._onVolumeChange.bind(this)}
        />
      </div>
    )
  }

  _onPlayPauze() {
    this.setState({playing: !this.state.playing})
  }

  _onVolumeChange(newVolume) {
    this.setState({volume: newVolume})
  }
}
