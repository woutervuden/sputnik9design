import React from 'react';
import PlayPauze from '../video-player/buttons/playpauze.jsx';
import VolumeControls from '../video-player/buttons/volume-controls.jsx';
import PlaybackTime from '../video-player/display/playback-time.jsx';
import ProgressBar from '../video-player/display/progress-bar.jsx';

export default class ControlPanel extends React.Component {
  render() {
    return <div className="control-panel">
      <button onClick={this.props.onPrev}>Prev</button>
      <PlayPauze
        playing={this.props.playing}
        onPlayPauze={this.props.onPlayPauze}
      />
      <button onClick={this.props.onNext}>Next</button>
      <ProgressBar
        value={this.props.displayTime}
        max={this.props.duration}
        onSeek={this.props.onSeek}
      />
      <PlaybackTime
        time={this.props.displayTime}
        duration={this.props.duration}
      />
      <VolumeControls
        level={this.props.volume}
        onChange={this.props.onVolumeChange}
      />
    </div>
  }
}
