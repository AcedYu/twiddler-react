import React from 'react';
import Tweet from './tweet.jsx';

class Tweetfeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
      <div id = "app">
        {
          this.props.data.map((tweet) => (<Tweet tweet = {tweet} onClick = {this.props.onClick} />))
        }
      </div>
    );
  }
}

export default Tweetfeed;