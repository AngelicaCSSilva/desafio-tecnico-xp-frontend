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
  const defineQuantity = (ticker) => (isFII(ticker.shortName) ? 1 : 100);

  const getOrdersSum = (ticketName) => {
    const assset = userInvestments.find(({ ticker }) => ticker === ticketName);
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
              {data?.results?.map((ticker) => (
                <tr key={ticker.symbol}>
                  <td>{ ticker.symbol }</td>
                  { isOnlyBuyOp
                    ? (<td>{ defineQuantity(ticker) }</td>)
                    : (<td>{ getOrdersSum(ticker.symbol) }</td>)}
                  <td>{ ticker.regularMarketPrice }</td>
                  { isOnlyBuyOp ? (
                    <td>
                      <OperationButton operationType="Compra" isPrimary isOrder ticker={ticker.symbol} stockValue={ticker.regularMarketPrice} />
                    </td>
                  ) : (
                    <StyledButtonsTd>
                      <OperationButton operationType="Venda" isOrder ticker={ticker.symbol} stockValue={ticker.regularMarketPrice} />
                      <OperationButton operationType="Compra" isPrimary isOrder ticker={ticker.symbol} stockValue={ticker.regularMarketPrice} />
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
