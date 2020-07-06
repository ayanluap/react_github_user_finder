import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { avatar_url, login } }) => {
  return (
    <div className="card text-center">
      <div className="card-body d-flex flex-column justify-content-center align-items-center">
        <img src={avatar_url} alt="" className="m-auto rounded-circle" />
        <h6 className="my-2">{login}</h6>
        <Link to={`/user/${login}`} className="btn btn-dark mx-auto mb">
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propType = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
