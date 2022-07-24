import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import FinanceContext from '../../context/FinanceContext';
import { clearSessionStorage } from '../../utils/sessionStorage';
import { StyledLogoutButton } from '../button/styles/StyledLogout.style';

export default function Logout() {
  const { deleteData } = useContext(FinanceContext);

  const history = useHistory();

  const handleLogout = () => {
    deleteData();
    clearSessionStorage();
    history.push('/');
  };
  return (
    <StyledLogoutButton type="button" onClick={handleLogout}>Sair</StyledLogoutButton>
  );
}
