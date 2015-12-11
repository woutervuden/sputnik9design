import React from 'react';
import Entry from './entry.jsx';
import { Router, Route, Link } from 'react-router'
import EntryData from './entries'

class Entries extends React.Component {
  render() {
    return (
      <div>
        <h1>Entries</h1>
        <p>Welcome fellow traveler! Click anywhere to explore some adventures with Sputnik9, or launch the player in the bottom right corner</p>
        <Link to="/entries/0" foo="bar">Entry 1</Link>
        <Link to="/entries/1">Entry 2</Link>
        <Link to="/entries/2">Entry 3</Link>
        <Link to="/entries/3">Entry 4</Link>
        {this.props.children}
      </div>
    )
  }
}

class EntryHandler extends React.Component {
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

React.render(
  <Router>
    <Route path="/" component={Entries}>
      <Route path="entries/:entryId" component={EntryHandler} />
    </Route>
  </Router>
, document.getElementById('content'))
