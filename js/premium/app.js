import React from 'react';
import Entry from './entry.jsx';
import Home from './home.jsx';
import AudioPlayer from './audio-player.jsx';
import VideoPlayer from './video-player/video-player.jsx';
import { Router, Route, Link } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Entries</h1>
        <Link to="/">Logs Home</Link>
        <Link to="/entries/0" foo="bar">Entry 1</Link>
        <Link to="/entries/1">Entry 2</Link>
        <Link to="/entries/2">Entry 3</Link>
        <Link to="/entries/3">Entry 4</Link>
        {this.props.children || <Home />}
        <AudioPlayer />
      </div>
    )
  }
}

var posterUrl = "http://www.popularmechanics.co.za/wp-content/uploads/resized/90300_resized_laika480x380.jpg";

React.render(<VideoPlayer poster={posterUrl} sources={['videos/001.mp4']} />, document.getElementById('content'));

// React.render(
//   <Router>
//     <Route path="/" component={App}>
//       <Route path="entries/:entryId" component={Entry} />
//     </Route>
//   </Router>
// , document.getElementById('content'))
