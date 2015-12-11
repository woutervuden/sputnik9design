import React from 'react';
import {render} from 'react-dom';
import Entry from './entry.jsx';
import Home from './home.jsx';
import AudioPlayer from './audio-player.jsx';
import { Router, Route, Link } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Entries</h1>
        <Link to="/">Logs Home</Link>
        <Link to="/entries/0">Entry 1</Link>
        <Link to="/entries/1">Entry 2</Link>
        <Link to="/entries/2">Entry 3</Link>
        <Link to="/entries/3">Entry 4</Link>
        {this.props.children || <Home />}
        <AudioPlayer />
      </div>
    )
  }
}

render(
  <Router>
    <Route path="/" component={App}>
      <Route path="entries/:entryId" component={Entry} />
    </Route>
  </Router>
, document.getElementById('content'))
