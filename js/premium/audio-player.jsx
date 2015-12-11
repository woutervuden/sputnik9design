import React from 'react';
import Songs from './songs';

class Song extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  render() {
    return (
      <button
        href="#"
        className="player-song"
        onClick={this._onClick.bind(this)}
      >
        <p className="song-title" >{this.props.title}</p>
        Aantal clicks: {this.state.count}
      </button>
    )
  }

  _onClick() {
    this.setState({count: this.state.count + 1});
  }
}

export default class AudioPlayer extends React.Component {
  render() {
    return (
      <div className="audio-player" >
        <h1>Muziek Player</h1>
        <p>De state word behouden, ook al click je op volgende en vorige in je
        browser. Click op een &quot;liedje&quot; om de count te verhogen. Het
        zal zo blijven tusen pagina&apos;s &lt;-&gt; de player zal dus ook
        doorspelen.</p>
        {Songs.map(this._renderSong)}
      </div>
    )
  }

  _renderSong(song) {
    return <Song title={song.title} key={song.title} />
  }
}
