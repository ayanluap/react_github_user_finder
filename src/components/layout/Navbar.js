import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

export class Navbar extends Component {
  static defaultProps = {
    title: 'Github Finder App',
    icon: 'fab fa-github',
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    return (
      <nav id="navbar">
        <div className="container">
          <h1>
            <i className={this.props.icon}></i> {this.props.title}
          </h1>
        </div>
      </nav>
    );
  }
}

export default Navbar;
