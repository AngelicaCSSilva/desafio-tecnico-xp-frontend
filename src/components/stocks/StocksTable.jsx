import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';

import FinanceContext from '../../context/FinanceContext';
import OperationButton from '../button/OperationButton';
import { CenteredTable } from '../divs/CenteredTable';
import Loader from '../loader/Loader';
import StocksTableHead from './StocksTableHead';
import { StyledButtonsTd } from './styles/StyledButtonsTd';
import { StyledTable } from './styles/StyledTable.style';

export default function StocksTable({ stocks, isOnlyBuyOp }) {
  const { assets } = useContext(FinanceContext);
  const [data, setData] = useState(null);
  const [isFetchingData, setIsFetchingData] = useState(true);

  const isFII = (shortname) => shortname.includes('FII');
  const userInvestments = assets?.stocks;
  const defineQuantity = (ticket) => (isFII(ticket.shortName) ? 1 : 100);

  const getOrdersSum = (ticketName) => {
    const assset = userInvestments.find(({ ticket }) => ticket === ticketName);
    if (!assset) return 0;
    return assset.orders.reduce((acc, obj) => acc + obj.qtd, 0);
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
    <CenteredTable>
      { isFetchingData
        ? <Loader />
        : (
          <StyledTable>
            <StocksTableHead />
            <tbody>
              {data?.results?.map((ticket) => (
                <tr key={ticket.symbol}>
                  <td>{ ticket.symbol }</td>
                  { isOnlyBuyOp
                    ? (<td>{ defineQuantity(ticket) }</td>)
                    : (<td>{ getOrdersSum(ticket.symbol) }</td>)}
                  <td>{ ticket.regularMarketPrice }</td>
                  { isOnlyBuyOp ? (
                    <td>
                      <OperationButton operationType="Compra" isPrimary isOrder ticket={ticket.symbol} />
                    </td>
                  ) : (
                    <StyledButtonsTd>
                      <OperationButton operationType="Venda" isOrder ticket={ticket.symbol} />
                      <OperationButton operationType="Compra" isPrimary isOrder ticket={ticket.symbol} />
                    </StyledButtonsTd>
                  )}
                </tr>
              ))}
            </tbody>
          </StyledTable>
        )}
    </CenteredTable>
  );
}

StocksTable.defaultProps = {
  isOnlyBuyOp: false,
};

StocksTable.propTypes = {
  stocks: PropTypes.arrayOf(PropTypes.string).isRequired,
  isOnlyBuyOp: PropTypes.bool,
};
