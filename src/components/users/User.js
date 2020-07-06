import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Loader from '../layout/Loader';
import { Link } from 'react-router-dom';

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  static propType = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
  };

  render() {
    const {
      name,
      login,
      html_url,
      bio,
      company,
      avatar_url,
      blog,
      followers,
      following,
      hireable,
      location,
      public_repos,
      public_gists,
    } = this.props.user;

    const { loading } = this.props;

    if (loading) return <Loader />;

    return (
      <div className="mt-3">
        <Link to="/" className="btn btn-secondary btn-sm">
          Back to Search
        </Link>
        <p className="badge ml-3 badge-light ">
          Hireable :{' '}
          {hireable ? (
            <i className="fas fa-check text-success"></i>
          ) : (
            <i className="fas fa-times text-danger"></i>
          )}
        </p>
        <div className="card mt-2">
          <div className="card-body row">
            <div className="col-md-4 col-sm-12 text-center">
              <img
                src={avatar_url}
                className="rounded-circle"
                alt={`${login}`}
              />
              <h5 className="my-2">Username : {login}</h5>
              <p className="lead">{location}</p>
            </div>
            <div className="col-md-8 col-sm-12">
              {bio && (
                <Fragment>
                  <p>Bio : {bio}</p>
                </Fragment>
              )}
              <a href={html_url} className="btn btn-dark">
                Visit Profile
              </a>
              <ul className="list-group list-group-flush">
                {name !== null && (
                  <li className="list-group-item">
                    <strong>Name : </strong>
                    {name}
                  </li>
                )}

                {company !== null && (
                  <li className="list-group-item">
                    <strong>Company : </strong>
                    {company}
                  </li>
                )}

                {blog !== '' && (
                  <li className="list-group-item">
                    <strong>Blog : </strong>
                    {blog}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="card my-2">
          <div className="card-body text-center">
            <p className="badge badge-success mr-2">Followers : {followers}</p>
            <p className="badge badge-info mr-2">Following : {following}</p>
            <p className="badge badge-warning mr-2">
              Public Repos : {public_repos}
            </p>
            <p className="badge badge-danger mr-2">
              Public Gists : {public_gists}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
