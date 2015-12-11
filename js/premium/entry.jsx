import React from 'react';
import EntryData from './entries'

class Entry extends React.Component {
  render() {
    return (
      <div class="entry">
        <h1 class="entry-title">{this.props.title}</h1>
        <h2 class="entry-log-date">Entry {this.props.id} - {this.props.month} 2016</h2>
        <p>Video with url: {this.props.video}</p>
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
              description={data.description}
            />
  }
}

