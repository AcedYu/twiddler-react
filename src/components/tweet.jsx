import React from 'react';

const Tweet = props => {
  // var time = props.tweet.created_at;
  var time = "a few seconds ago"
  return(
    <div class="tweet">
        <table align = "center">
          <thead>
            <tr>
              <th><img src = {props.tweet.profilePhotoURL} alt = "Failed to Load"/></th>
              <th class = "username" id = {props.tweet.user} onClick = {props.onClick}>@{props.tweet.user}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class = "message" colspan = "2">{props.tweet.message}</td>
            </tr>
            <tr>
              <td class = "timestamp" colspan = "2">{time}</td>
            </tr>
            <tr>
              <td colspan = "2" id = "buttonlayout">
                <i class="far fa-comment icon comment" />
                <i class="fas fa-retweet icon retweet" />
                <i class="far fa-thumbs-up icon like" />
                <i class="far fa-share-square icon share" />
              </td>
            </tr>
          </tbody>
        </table>
        <br/>
      </div>
  );
}

export default Tweet;