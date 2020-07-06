import React from 'react';

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type} mt-3`}>
        <i className="fa fa-info-circle"></i> {alert.msg}
      </div>
    )
  );
};

export default Alert;
