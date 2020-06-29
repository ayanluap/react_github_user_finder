import React, { Component } from 'react';
import './Users.css';

class UserItems extends Component {
  render() {
    const { login, avatar_url, html_url } = this.props.user;

    return (
      <div id="userItems" className="card">
        <img src={avatar_url} alt="" />
        <h2>{login}</h2>
        <a href={html_url} target="blank" className="btn btn-sm">
          More
        </a>
      </div>
    );
  }
}

export default UserItems;
