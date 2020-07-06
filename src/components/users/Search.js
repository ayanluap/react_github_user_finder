import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: '',
  };

  static propType = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.func.isRequired,
    showAlert: PropTypes.func.isRequired,
  };

  onSubmit = (e) => {
    if (this.state.text === '') {
      this.props.showAlert('Please Enter a Username', 'warning');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }

    e.preventDefault();
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { showClear, clearUsers } = this.props;

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Search User"
            className="form-control my-3"
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-primary btn-block"
          />
        </form>
        {showClear && (
          <button
            onClick={clearUsers}
            className="btn btn-secondary btn-block mt-2 mb-3"
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
