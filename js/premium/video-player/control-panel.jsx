import React from 'react';
import PlayPauze from './buttons/playpauze.jsx';
import VolumeControls from './buttons/volume-controls.jsx';
import PlaybackTime from './display/playback-time.jsx';
import ProgressBar from './display/progress-bar.jsx';
import FullScreenButton from './buttons/fullscreen.jsx';


export default class ControlPanel extends React.Component {
  render() {
    return <div className="control-panel">
      <PlayPauze
        playing={this.props.playing}
        onPlayPauze={this.props.onPlayPauze}
      />
      <VolumeControls
        level={this.props.volume}
        onChange={this.props.onVolumeChange.bind(this)}
      />
      <PlaybackTime
        time={this.props.displayTime}
        duration={this.props.duration}
      />
      <ProgressBar
        value={this.props.displayTime}
        max={this.props.duration}
        onSeek={this.props.onSeek}
      />
      <FullScreenButton onClick={this.props.onFullScreen} />
    </div>
  }
}
