import React from 'react';

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
    this.state = { }
  }

  render() {
    return (
      <div className="audio-player" >
        <h1>Muziek Player</h1>
        <p>De state word behouden, ook al click je op volgende en vorige in je
        browser. Click op een &quot;liedje&quot; om de count te verhogen. Het
        zal zo blijven tusen pagina&apos;s &lt;-&gt; de player zal dus ook
        doorspelen.</p>
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

  _onSongClick(songId) {
    var songToPlay = this.props.songs[songId];
    if (!songToPlay) return;
    if (this.state.howl) this.state.howl.unload();
    this.state.howl = new Howl({
      urls: [songToPlay.url]
    }).play()
  }
}
