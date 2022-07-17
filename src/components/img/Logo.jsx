import React from 'react';
import PropTypes from 'prop-types';
import { StyledLogo } from './styles/Logo.style';

export default function Logo({ width }) {
  return (
    <StyledLogo src="/logo-xpi.svg" width={width} alt="Logo da XP Investimentos" />
  );
}

Logo.propTypes = {
  width: PropTypes.string.isRequired,
};
