import PropTypes from 'prop-types';
import React from 'react';

import { StyledError } from './style/StyledError.style';

export default function ErrorMessage({ error }) {
  return (
    <StyledError>{error}</StyledError>
  );
}

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired,
};
