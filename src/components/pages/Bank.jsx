import React, { useContext, useEffect, useState } from 'react';

import FinanceContext from '../../context/FinanceContext';
import Balance from '../bank/Balance';
import StatementTable from '../bank/StatementTable';
import OperationButton from '../button/OperationButton';
import { StyledButtonsDiv } from '../button/StyledButtonsDiv';
import { CenteredFlex } from '../divs/CenteredFlex';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import { HeadingOne } from '../heading/HeadingOne.style';
import { HeadingTwo } from '../heading/HeadingTwo.style';
import Loader from '../loader/Loader';
import Modal from '../modal/Modal';

export default function Bank() {
  const { bankTransactions, isModalOn } = useContext(FinanceContext);
  const [transactions, setTransactions] = useState(null);
  const [isGettingData, setIsGettingData] = useState(true);

  const getBalance = () => bankTransactions?.transaction?.reduce((acc, obj) => acc + obj.total, 0);

  useEffect(() => {
    setIsGettingData(true);
    setTransactions(bankTransactions?.transaction);
    setIsGettingData(false);
  }, [bankTransactions]);

  return (
    isGettingData
      ? <CenteredFlex><Loader /></CenteredFlex>
      : (
        <CenteredFlex>
          <Header />
          <main>
            <HeadingOne>Conta Digital</HeadingOne>
            <Balance transactions={transactions} />
            <StyledButtonsDiv>
              {getBalance() <= 0 ? <OperationButton isDisabled operationType="Retirada" /> : <OperationButton operationType="Retirada" />}
              <OperationButton isPrimary operationType="Depósito" />
            </StyledButtonsDiv>
            <HeadingTwo>Extrato bancário</HeadingTwo>
            { transactions
              ? (<StatementTable transactions={transactions} />)
              : (<p>Não há movimentações bancárias.</p>)}
            {isModalOn && <Modal />}
          </main>
          <Footer />
        </CenteredFlex>
      )
  );
}
