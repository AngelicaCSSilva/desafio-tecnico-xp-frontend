import React, { useContext, useEffect, useState } from 'react';

import FinanceContext from '../../context/FinanceContext';
import Balance from '../bank/Balance';
import StatementTable from '../bank/StatementTable';
import OperationButton from '../button/OperationButton';
import { StyledButtonsDiv } from '../button/StyledButtonsDiv';
import Footer from '../footer/Footer';
import Loader from '../loader/Loader';
import Modal from '../modal/Modal';

export default function Bank() {
  const { bankTransactions, isModalOn } = useContext(FinanceContext);
  const [transactions, setTransactions] = useState(null);
  const [isGettingData, setIsGettingData] = useState(true);

  useEffect(() => {
    setIsGettingData(true);
    setTransactions(bankTransactions?.transaction);
    setIsGettingData(false);
  }, [bankTransactions]);

  return (
    <>
      { isGettingData
        ? <Loader />
        : (
          <main>
            <h1>Bank</h1>
            <Balance transactions={transactions} />
            <StyledButtonsDiv>
              <OperationButton operationType="Retirada" />
              <OperationButton operationType="Depósito" />
            </StyledButtonsDiv>
            <h2>Extrato bancário</h2>
            { transactions
              ? (<StatementTable transactions={transactions} />)
              : (<p>Não há movimentações bancárias.</p>)}
            {isModalOn && <Modal />}
          </main>
        )}
      <Footer />
    </>
  );
}
