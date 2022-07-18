import PropTypes from 'prop-types';
import React from 'react';

import useFetch from '../../hooks/useFetch';
import Loader from '../loader/Loader';
import { TableHead } from './styles/TableHead.style';

export default function StocksTable({ stocks, isOnlyBuyOp, userInvestments }) {
  const stocksString = stocks.join('%2C');

  const url = `https://brapi.dev/api/quote/${stocksString}`;
  const { data, isFetching } = useFetch(url);

  const isFII = (shortname) => shortname.includes('FII');

  const defineQuantity = (ticket) => (isFII(ticket.shortName) ? 1 : 100);

  const getOrdersSum = (ticketName) => {
    const { orders } = userInvestments.find(({ ticket }) => ticket === ticketName);
    return orders.reduce((acc, obj) => acc + obj.qtd, 0);
  };

  return (
    <div>
      { isFetching
        ? <Loader />
        : (
          <table>
            <thead>
              <tr>
                <TableHead>Ação</TableHead>
                <TableHead>Qtde.</TableHead>
                <TableHead>Valor (R$)</TableHead>
                <TableHead>Operação</TableHead>
              </tr>
            </thead>
            <tbody>
              { data?.results?.map((ticket) => (
                <tr key={ticket.symbol}>
                  <td>{ ticket.symbol }</td>
                  { isOnlyBuyOp
                    ? (<td>{ defineQuantity(ticket) }</td>)
                    : (<td>{ getOrdersSum(ticket.symbol) }</td>)}
                  <td>{ ticket.regularMarketPrice }</td>
                  { isOnlyBuyOp ? <td><button type="button">Comprar</button></td> : (
                    <td>
                      <button type="button">Vender</button>
                      {' '}
                      <button type="button">Comprar</button>
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
