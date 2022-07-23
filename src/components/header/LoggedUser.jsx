import React, { useContext } from 'react';

import FinanceContext from '../../context/FinanceContext';

export default function LoggedUser() {
  const { userName } = useContext(FinanceContext);
  return (
    <p>{`Olá, ${userName}`}</p>
  );
}
