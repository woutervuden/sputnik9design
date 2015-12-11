import React from 'react';
import PlayPauze from './buttons/playpauze.jsx';

export default class PlaybackControls extends React.Component {
  render() {
    return <div className="playback-controls">
      <PlayPauze
        playing={this.props.playing}
        onPlayPauze={this.props.onPlayPauze}
      />
    </div>
  }
}
