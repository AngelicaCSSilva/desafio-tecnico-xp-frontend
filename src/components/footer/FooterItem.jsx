import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { StyledIcon } from '../img/styles/Icons.style';
import { CenteredFooterItems } from './styles/CenteredFooterItems.style';

export default function FooterItem({ iconName, name, pageLink }) {
  return (
    <Link to={`/${pageLink}`}>
      <CenteredFooterItems>
        <StyledIcon src={`./icons/${iconName}.svg`} alt={`Ícone da página de ${name}`} width="3vh" height="3vh" />
        <p>{name}</p>
      </CenteredFooterItems>
    </Link>
  );
}

FooterItem.propTypes = {
  iconName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pageLink: PropTypes.string.isRequired,
};
