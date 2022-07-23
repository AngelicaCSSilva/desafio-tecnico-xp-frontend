import PropTypes from 'prop-types';
import React from 'react';

import { StyledLogo } from './styles/Logo.style';

export default function Logo({ width }) {
  return (
    <StyledLogo src="/img/logo-xpi.svg" width={width} alt="Logo da XP Investimentos" />
  );
}

Logo.propTypes = {
  width: PropTypes.string.isRequired,
};
