import React from 'react';

export default class Song extends React.Component {
  render() {
    return (
      <button
        className={this.props.active ? "song playing" : "song"}
        href="#"
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

