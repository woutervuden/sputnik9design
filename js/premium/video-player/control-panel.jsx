import React from 'react';
import PlayPauze from './buttons/playpauze.jsx';
import VolumeControls from './buttons/volume-controls.jsx';

export default class extends React.Component {
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
    </div>
  }
}
