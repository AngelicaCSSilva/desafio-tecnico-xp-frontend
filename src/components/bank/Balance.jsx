import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import Loader from '../loader/Loader';
import { StyledBalance } from './styles/StyledBalance.style';
import { StyledNumber } from './styles/StyledNumber.style';

export default function Balance({ transactions }) {
  const [transactionsInfo, setTransactionsInfo] = useState(null);
  const [isGettingData, setIsGettingData] = useState(true);
  const getBalance = () => transactionsInfo?.reduce((acc, obj) => acc + obj.total, 0);

  useEffect(() => {
    setTransactionsInfo(transactions);
    setIsGettingData(false);
  }, [transactions]);

  return (
    isGettingData
      ? <StyledBalance><Loader /></StyledBalance>
      : (
        <StyledBalance>
          <p>
            SALDO:
          </p>
          <StyledNumber>{new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(getBalance())}</StyledNumber>
        </StyledBalance>
      )
  );
}

Balance.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string,
    description: PropTypes.string,
    total: PropTypes.number,
  })).isRequired,
};
