import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { CenteredTable } from '../divs/CenteredTable';
import Loader from '../loader/Loader';
import StatementTableHead from './StatementTableHead'; import { StyledTable } from './styles/StyledTable.style';

export default function StatementTable({ transactions }) {
  const [transactionsInfo, setTransactionsInfo] = useState(null);
  const [isGettingData, setIsGettingData] = useState(true);

  useEffect(() => {
    setTransactionsInfo(transactions);
    setIsGettingData(false);
  }, [transactions]);

  return (
    <CenteredTable>
      { isGettingData
        ? <Loader />
        : (
          <StyledTable>
            <StatementTableHead />
            <tbody>
              {transactionsInfo?.map((transaction) => (
                <tr key={new Date(transaction?.date).getTime()}>
                  <td>{ new Date(transaction?.date).toLocaleDateString(['pt-br']) }</td>
                  <td>{ transaction?.description }</td>
                  <td>{ new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(transaction?.total) }</td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        )}
    </CenteredTable>
  );
}

StatementTable.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string,
    description: PropTypes.string,
    total: PropTypes.number,
  })).isRequired,
};
