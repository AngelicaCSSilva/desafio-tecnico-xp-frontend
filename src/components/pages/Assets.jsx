import React, { useContext, useEffect } from 'react';

import FinanceContext from '../../context/FinanceContext';
import Footer from '../footer/Footer';
import Loader from '../loader/Loader';
import Modal from '../modal/Modal';
import StocksTable from '../stocks/StocksTable';

export default function Assets() {
  const {
    assets,
    generateGlobalState,
    userName,
    userId,
    isModalOn,
  } = useContext(FinanceContext);

  useEffect(() => {
    generateGlobalState();
  }, [userId]);

  const userStocks = assets?.stocks?.map((stock) => stock.ticket);
  const watchlistExclusives = assets?.watchlist?.filter((stock) => !userStocks.includes(stock));

  return (
    <div>
      { !userStocks
        ? <Loader />
        : (
          <>
            <div><p>{`Olá, ${userName}`}</p></div>
            <h2>Minhas ações</h2>
            <StocksTable stocks={assets?.stocks?.map((stock) => stock.ticket)} />
            <h2>Disponíveis para investir</h2>
            { watchlistExclusives.length >= 1
              ? <StocksTable stocks={watchlistExclusives} isOnlyBuyOp />
              : <p>Não há novas ações disponíveis.</p>}
            {isModalOn && <Modal />}
            <Footer />
          </>
        )}
    </div>
  );
}
