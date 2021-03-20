import React from 'react';

const Friends = props => {
  return(
    <div id = "friendlist">
      <h2>Friends List</h2>
      <ul>
        <li class = 'listname' id = 'douglascalhoun' onClick = {props.onClick}><img src = "./img/douglascalhoun.png" class = "profile-photo" alt = "failed to load" id = 'douglascalhoun'/>douglascalhoun</li>
        <li class = 'listname' id = 'mracus' onClick = {props.onClick}><img src = "./img/mracus.png" class = "profile-photo" alt = "failed to load" id = 'mracus'/>mracus</li>
        <li class = 'listname' id = 'sharksforcheap' onClick = {props.onClick}><img src = "./img/sharksforcheap.png" class = "profile-photo" alt = "failed to load" id = 'sharksforcheap'/>sharksforcheap</li>
        <li class = 'listname' id = 'shawndrost' onClick = {props.onClick}><img src = "./img/shawndrost.png" class = "profile-photo" alt = "failed to load" id = 'shawndrost'/>shawndrost</li>
      </ul>
    </div>
  );
}

export default Friends;