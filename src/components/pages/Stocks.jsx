import React, { useContext, useEffect } from 'react';

import FinanceContext from '../../context/FinanceContext';
import Footer from '../footer/Footer';
import Loader from '../loader/Loader';
import StocksTable from '../stocks/StocksTable';

export default function Stocks() {
  const {
    investments,
    generateGlobalState,
    userName,
  } = useContext(FinanceContext);

  useEffect(() => {
    generateGlobalState();
  }, []);

  const userStocks = investments?.stocks?.map((stock) => stock.ticket);
  const userInvestments = investments?.stocks;

  const watchlistExclusives = investments?.watchlist.filter((stock) => !userStocks.includes(stock));

  return (
    <div>
      { !userStocks
        ? <Loader />
        : (
          <>
            <div><p>{`Olá, ${userName}`}</p></div>
            <h2>Minhas ações</h2>
            <StocksTable stocks={userStocks} userInvestments={userInvestments} />
            <h2>Disponíveis para investir</h2>
            <StocksTable stocks={watchlistExclusives} isOnlyBuyOp />
            <Footer />
          </>
        )}
    </div>
  );
}
