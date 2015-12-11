import React from 'react';
import {render} from 'react-dom';
import Entry from './entry.jsx';
import Home from './home.jsx';
import AudioPlayer from './audio-player.jsx';
import { Router, Route, Link, IndexRoute, IndexLink } from 'react-router';
import Songs from './songs';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Entries</h1>
        <IndexLink to="/" activeClassName="active">Logs Home</IndexLink>
        <Link to="/entries/0" activeClassName="active">Entry 1</Link>
        <Link to="/entries/1" activeClassName="active">Entry 2</Link>
        <Link to="/entries/2" activeClassName="active">Entry 3</Link>
        <Link to="/entries/3" activeClassName="active">Entry 4</Link>
        {this.props.children}
        <AudioPlayer songs={Songs} />
      </div>
    )
  }
}

render(
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="entries/:entryId" component={Entry} />
    </Route>
  </Router>
, document.getElementById('content'))
