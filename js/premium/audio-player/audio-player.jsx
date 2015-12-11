import React from 'react';
import ControlPanel from './control-panel.jsx';

class Song extends React.Component {
  render() {
    return (
      <button
        href="#"
        className="player-song"
        onClick={this._onClick.bind(this)}
      >
        <p className="song-title" >{this.props.title}</p>
      </button>
    )
  }

  _onClick() {
    this.props.onClick(this.props.id);
  }
}

export default class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      duration: 0,
      displayTime: 0,
      volume: 50
    }
  }

  render() {
    return (
      <div className="audio-player" >
        <h1>Muziek Player</h1>
        <ControlPanel
          playing={this.state.playing}
          onPlayPauze={this._onPlayPauze.bind(this)}
          displayTime={this.state.displayTime}
          duration={this.state.duration}
          onSeek={this._onSeek.bind(this)}
          volume={this.state.volume}
          onVolumeChange={this._onVolumeChange.bind(this)}
        />
        {this.props.songs.map(this._renderSong.bind(this))}
      </div>
    )
  }

  _renderSong(song) {
    return <Song
      title={song.title}
      url={song.url}
      key={song.id}
      id={song.id}
      onClick={this._onSongClick.bind(this)}
    />
  }

  _onPlayPauze() {
    if (!this.howl) {
      this._playSong(this.props.songs[0]);
    } else {
      this.state.playing ? this.howl.pause() : this.howl.play()
      this.setState({playing: !this.state.playing})
    }
  }

  _onSongClick(songId) {
    var songToPlay = this.props.songs[songId];
    if (!songToPlay) return;
    this._clearSong();
    this._playSong(songToPlay);
  }

  _onSeek(newPosition) {
    this.howl.pos(newPosition);
    this.setState({displayTime: newPosition});
  }

  _onVolumeChange(vol) {
    this.setState({volume: vol});
    this.howl.volume(vol / 100);
  }

  _clearSong() {
    if (this.howl) this.howl.unload();
    if (this.interval) clearInterval(this.interval);
  }

  _playSong(song) {
    this.howl = new Howl({
      urls: [song.url],
      volume: this.state.volume / 100,
      onload: () => {
        this.setState({
          duration: this.howl._duration
        })
      },
    }).play()
    this.setState({playing: true, displayTime: 0});
    this.interval = setInterval(() => {
      this.setState({
        displayTime: this.howl.pos()
      })
    }, 1000)
  }
}
