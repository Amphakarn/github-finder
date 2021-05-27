import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  return <div></div>;
};

RepoItem.prototype = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
