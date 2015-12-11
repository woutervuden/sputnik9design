import React from 'react';
import EntryData from './entries';
import VideoPlayer from './video-player/video-player.jsx';

var sources = [
  'videos/001.mp4'
]

class Entry extends React.Component {
  render() {
    return (
      <div className="entry">
        <h1 className="entry-title">{this.props.title}</h1>
        <h2 className="entry-log-date">Entry {this.props.id} - {this.props.month} 2016</h2>
        <p>Video with url: {this.props.video}</p>
        <VideoPlayer key={this.props.id} sources={[this.props.video]} poster={this.props.poster} />
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default class EntryHandler extends React.Component {
  render() {
    var data = EntryData[this.props.params.entryId];
    return <Entry
              id={data.id}
              month={data.month}
              title={data.title}
              video={data.vid_url}
              poster={data.vid_poster}
              description={data.description}
            />
  }
}

