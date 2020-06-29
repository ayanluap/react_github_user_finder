import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  state = {
    text: '',
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  };

  onChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="from">
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Search Users..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input type="submit" value="Search" className="btn btn-lg" />
        </form>
        <button className="clrBtn btn">Clear</button>
      </div>
    );
  }
}

export default Search;
