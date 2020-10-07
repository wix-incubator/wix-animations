import React from 'react';
import PropTypes from 'prop-types';

const H2 = ({ children }) => {
  return (
    <div className="markdown-body">
      <div />
      <h2>{children}</h2>
    </div>
  );
};

H2.propTypes = {
  children: PropTypes.element.isRequired,
};

export default H2;
