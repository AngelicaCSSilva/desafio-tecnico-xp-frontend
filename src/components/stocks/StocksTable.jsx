import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';

import OperationButton from '../button/OperationButton';
import Loader from '../loader/Loader';
import StocksTableHead from './StocksTableHead';

  const [data, setData] = useState(null);
  const [isFetchingData, setIsFetchingData] = useState(true);

  const isFII = (shortname) => shortname.includes('FII');

  const defineQuantity = (ticket) => (isFII(ticket.shortName) ? 1 : 100);

  const getOrdersSum = (ticketName) => {
    const { orders } = userInvestments.find(({ ticket }) => ticket === ticketName);
    return orders.reduce((acc, obj) => acc + obj.qtd, 0);
  };

  useEffect(() => {
    async function fetchData(url) {
      try {
        const response = await fetch(url);
        const fetchResult = await response.json();
        setData(fetchResult);
      } catch (error) {
        throw new Error(error);
      }
      setIsFetchingData(false);
    }
    setIsFetchingData(true);
    const stocksString = stocks?.join('%2C');
    const url = `https://brapi.dev/api/quote/${stocksString}`;
    fetchData(url);
    setIsFetchingData(false);
  }, [assets]);

  return (
    <div>
      { isFetchingData
        ? <Loader />
        : (
          <table>
            <StocksTableHead />
            <tbody>
              { data?.results?.map((ticket) => (
                <tr key={ticket.symbol}>
                  <td>{ ticket.symbol }</td>
                  { isOnlyBuyOp
                    ? (<td>{ defineQuantity(ticket) }</td>)
                    : (<td>{ getOrdersSum(ticket.symbol) }</td>)}
                  <td>{ ticket.regularMarketPrice }</td>
                  { isOnlyBuyOp ? (
                    <td>
                      <OperationButton operationType="Compra" isOrder ticket={ticket.symbol} />
                    </td>
                  ) : (
                    <td>
                      <OperationButton operationType="Compra" isOrder ticket={ticket.symbol} />
                      <OperationButton operationType="Venda" isOrder ticket={ticket.symbol} />
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        )}

    </div>
  );
}

StocksTable.defaultProps = {
  isOnlyBuyOp: false,
  userInvestments: null,
};

StocksTable.propTypes = {
  stocks: PropTypes.arrayOf(PropTypes.string).isRequired,
  isOnlyBuyOp: PropTypes.bool,
  userInvestments: PropTypes.arrayOf(
    PropTypes.exact({
      ticket: PropTypes.string,
      orders: PropTypes.arrayOf(PropTypes.shape({
        date: PropTypes.string.isRequired,
        qtd: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
      })),
    }),
  ),
};
