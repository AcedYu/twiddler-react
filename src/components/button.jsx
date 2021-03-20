import React from 'react';

const Button = props => {
  return (
    <div id = "the-button" class="container">
      <div class="center">
        <button id="update-feed" onClick = {props.onClick}>{props.content}</button>
      </div>
    </div>
  );
}

export default Button;