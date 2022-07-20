import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import Loader from '../loader/Loader';

export default function Balance({ transactions }) {
  const [transactionsInfo, setTransactionsInfo] = useState(null);
  const [isGettingData, setIsGettingData] = useState(true);
  const getBalance = () => transactionsInfo?.reduce((acc, obj) => acc + obj.total, 0);

  useEffect(() => {
    setTransactionsInfo(transactions);
    setIsGettingData(false);
  }, [transactions]);

  return (
    <div>
      { isGettingData
        ? <Loader />
        : (
          <p>
            SALDO (R$)
            <span>{getBalance()}</span>
          </p>
        ) }
    </div>
  );
}

Balance.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string,
    description: PropTypes.string,
    total: PropTypes.number,
  })).isRequired,
};
