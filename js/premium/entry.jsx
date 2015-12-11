import React from 'react';

export default class Travel extends React.Component {
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
