import React, { useContext, useEffect } from 'react';

import FinanceContext from '../../context/FinanceContext';
import { CenteredFlex } from '../divs/CenteredFlex';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import { HeadingOne } from '../heading/HeadingOne.style';
import { HeadingTwo } from '../heading/HeadingTwo.style';
import Loader from '../loader/Loader';
import Modal from '../modal/Modal';
import StocksTable from '../stocks/StocksTable';

export default function Assets() {
  const {
    assets,
    generateGlobalState,
    userId,
    isModalOn,
  } = useContext(FinanceContext);

  useEffect(() => {
    generateGlobalState();
  }, [userId]);

  const userStocks = assets?.stocks?.map((stock) => stock.ticket);
  const watchlistExclusives = assets?.watchlist?.filter((stock) => !userStocks.includes(stock));

  return (
    !userStocks
      ? <CenteredFlex><Loader /></CenteredFlex>
      : (
        <CenteredFlex>
          <Header />
          <main>
            <HeadingOne>Investimentos</HeadingOne>
            <HeadingTwo>Minhas ações</HeadingTwo>
            { assets?.stocks?.length >= 1
              ? <StocksTable stocks={assets?.stocks?.map((stock) => stock.ticket)} />
              : <p>Você não possui ações.</p>}
            <HeadingTwo>Disponíveis para investir</HeadingTwo>
            { watchlistExclusives.length >= 1
              ? <StocksTable stocks={watchlistExclusives} isOnlyBuyOp />
              : <p>Não há novas ações disponíveis.</p>}
            {isModalOn && <Modal />}
          </main>
          <Footer />
        </CenteredFlex>
      )
  );
}
