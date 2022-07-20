import React, {
  useState, useContext, useEffect,
} from 'react';

import FinanceContext from '../../context/FinanceContext';
import { StyledButtonsDiv } from '../button/StyledButtonsDiv';
import { ModalContentForm } from './styles/ModalContentForm';
import { StyledLabel } from './styles/StyledLabel';

export default function ModalForm() {
  const {
    setAssets,
    assets,
    setBankTransactions,
    bankTransactions,
    setIsModalOn,
    operationType,
    isOrder,
    selectedTicket,
  } = useContext(FinanceContext);
  const [modalValue, setModalValue] = useState(1);
  const [qtdValue, setQtdValue] = useState(1);

  const [maxQtd, setMaxQtd] = useState(0);
  const [maxValue, setMaxValue] = useState(0);

  const isSell = (operationType === 'Venda');


  const handleConfirmButton = () => {
    if (isOrder) { handleOrder(); } else { handleTransaction(); }
    setModalValue(0);
    setQtdValue(0);
    setIsModalOn(false);
  };

  const handleCancelButton = () => {
    setModalValue(0);
    setQtdValue(0);
    setIsModalOn(false);
  };

  return (
    <ModalContentForm>
      {isOrder
      && (
      <StyledLabel htmlFor="qtdValue">
        Quantidade:
        <input
          type="number"
          min="1"
          max={maxQtd}
          step="1"
          value={qtdValue}
          name="qtdValue"
          onChange={({ target: { value } }) => setQtdValue(value)}
        />
      </StyledLabel>
      )}
      <StyledLabel htmlFor="modalValue">
        Valor (R$):
        <input
          type="number"
          min="0"
          max={maxValue}
          step="1"
          name="modalValue"
          value={modalValue}
          onChange={({ target: { value } }) => setModalValue(value)}
        />
      </StyledLabel>
      <StyledButtonsDiv>
        <button
          type="button"
          onClick={handleCancelButton}
        >
          Cancelar
        </button>
        <button
          type="button"
          onClick={handleConfirmButton}
        >
          Confirmar
        </button>
      </StyledButtonsDiv>
    </ModalContentForm>
  );
}
