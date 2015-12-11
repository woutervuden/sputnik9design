import React            from 'react';
import PlayPauze        from '../util/buttons/playpauze.jsx';
import VolumeControls   from '../util/buttons/volume-controls.jsx';
import FullScreenButton from '../util/buttons/fullscreen.jsx';
import PlaybackTime     from '../util/display/playback-time.jsx';
import ProgressBar      from '../util/display/progress-bar.jsx';

export default class ControlPanel extends React.Component {
  render() {
    return <div className="control-panel">
      <PlayPauze
        playing={this.props.playing}
        onPlayPauze={this.props.onPlayPauze}
      />
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
        onChange={this.props.onVolumeChange.bind(this)}
      />
      <FullScreenButton onClick={this.props.onFullScreen} />
    </div>
  }
}
