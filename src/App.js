import React from 'react';
import Header from './components/header.jsx';
import Tweetfeed from './components/tweetfeed.jsx';
import Button from './components/button.jsx';
import Friends from './components/friends.jsx';
import './App.css';
const data = require('./components/data/dataGenerator.js');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: data.feed
    }
    this.refreshFeed = this.refreshFeed.bind(this);
    this.userfeed = this.userfeed.bind(this);
  }
  refreshFeed(event) {
    if (this.content === "Back to Home") {
      this.content = "Update Feed";
    }
    this.setState({
      feed: data.feed
    });
  }
  userfeed(event) {
    var name = event.target.id;
    this.setState({ feed: data.feedselect[name] });
  }
  render() {
    return (
      <div id = "app">
        <div class = "headerwrap">
          <header>
            <Header />
            <Button onClick = {this.refreshFeed} content = "Update Feed" />
          </header>
        </div>
        <div class = "listwrap"><Friends onClick = {this.userfeed}/></div>
        <Tweetfeed data = {this.state.feed} onClick = {this.userfeed} />
      </div>
    );
  }
}

export default App;
