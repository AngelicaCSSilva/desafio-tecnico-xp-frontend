import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import Loader from '../loader/Loader';
import StatementTableHead from './StatementTableHead';

export default function StatementTable({ transactions }) {
  const [transactionsInfo, setTransactionsInfo] = useState(null);
  const [isGettingData, setIsGettingData] = useState(true);

  useEffect(() => {
    setTransactionsInfo(transactions);
    setIsGettingData(false);
  }, [transactions]);

  return (
    <div>
      {' '}
      { isGettingData
        ? <Loader />
        : (
          <table>
            <StatementTableHead />
            <tbody>
              {transactionsInfo?.map((transaction) => (
                <tr key={new Date(transaction?.date).getTime()}>
                  <td>{ new Date(transaction?.date).toLocaleDateString(['pt-br']) }</td>
                  <td>{ transaction?.description }</td>
                  <td>{ transaction?.total }</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
    </div>
  );
}

StatementTable.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string,
    description: PropTypes.string,
    total: PropTypes.number,
  })).isRequired,
};
