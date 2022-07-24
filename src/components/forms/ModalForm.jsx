import React, {
  useState, useContext, useEffect,
} from 'react';

import FinanceContext from '../../context/FinanceContext';
import { StyledButtonsDiv } from '../button/StyledButtonsDiv';
import { StyledOperationButton } from '../button/styles/StyledOperationButton.style';
import { ModalContentForm } from './styles/ModalContentForm.style';
import { StyledInput } from './styles/StyledInput.style';
import { StyledLabel } from './styles/StyledLabel.style';

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
  const isDeposit = (operationType === 'Depósito');

  const getOrdersSum = () => {
    const { orders } = assets.stocks.find(({ ticket }) => ticket === selectedTicket);
    return orders.reduce((acc, obj) => acc + obj.qtd, 0);
  };

  const handleBuyOrder = (selectedStock, stocksLessSelected, newOrder, selectedIndex) => {
    if (selectedStock().length < 1) {
      const newStock = {
        ticket: selectedTicket,
        orders: [newOrder],
      };
      setAssets({ ...assets, stocks: [...stocksLessSelected, newStock] });
    } else {
      const newAssets = assets;
      newAssets.stocks[selectedIndex].orders.push(newOrder);
      setAssets(newAssets);
    }
  };

  const handleSellOrder = (stocksLessSelected, newOrder, selectedIndex) => {
    if (getOrdersSum() === qtdValue) {
      setAssets({ ...assets, stocks: [...stocksLessSelected] });
    } else {
      const newAssets = assets;
      newAssets.stocks[selectedIndex].orders.push(newOrder);
      setAssets(newAssets);
    }
  };

  const handleOrder = () => {
    const formatedQtd = isSell ? -Math.abs(qtdValue) : qtdValue;
    const formatedValue = isSell ? -Math.abs(modalValue) : modalValue;

    const date = new Date();
    const newOrder = { data: date.toISOString(), qtd: formatedQtd, value: formatedValue };

    const selectedStock = () => assets?.stocks?.filter((stock) => stock.ticket === selectedTicket);
    const stocksLessSelected = assets?.stocks?.filter((stock) => stock.ticket !== selectedTicket);
    const selectedIndex = assets?.stocks?.findIndex((stock) => stock.ticket === selectedTicket);

    if (isSell) {
      handleSellOrder(stocksLessSelected, newOrder, selectedIndex);
    } else {
      handleBuyOrder(selectedStock, stocksLessSelected, newOrder, selectedIndex);
    }
  };

  const handleTransaction = () => {
    const formatedValue = isDeposit
      ? parseFloat(modalValue, 10)
      : -Math.abs(parseFloat(modalValue, 10));
    const newTransaction = {
      date: new Date().toISOString(),
      description: operationType,
      total: formatedValue,
    };
    setBankTransactions({
      ...bankTransactions,
      transaction: [
        newTransaction,
        ...bankTransactions.transaction,
      ],
    });
  };

  const getBalance = () => bankTransactions?.transaction?.reduce((acc, obj) => acc + obj.total, 0);

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

  const handleQtdChange = (value) => {
    if (value > maxQtd && isSell) {
      setQtdValue(parseInt(maxQtd, 10));
    } else {
      setQtdValue(parseInt(value, 10));
    }
  };

  const formatValue = (value) => {
    const newValue = Number(parseFloat(value).toFixed(2));
    if (!isOrder && newValue > maxValue) { setModalValue(maxValue); } else {
      setModalValue(newValue);
    }
  };

  useEffect(() => {
    if (isOrder && isSell) {
      setMaxQtd(getOrdersSum());
    } if (isDeposit) {
      setMaxValue(1000000);
    } else {
      setMaxValue(Number(getBalance().toFixed(2)));
    }
  }, [assets, bankTransactions]);

  return (
    <ModalContentForm>
      {isOrder
      && (
      <StyledLabel htmlFor="qtdValue">
        Quantidade:
        <StyledInput
          type="number"
          min="1"
          max={maxQtd}
          step="1"
          value={qtdValue}
          name="qtdValue"
          onChange={({ target: { value } }) => handleQtdChange(value)}
        />
      </StyledLabel>
      )}
      <StyledLabel htmlFor="modalValue">
        Valor (R$):
        <StyledInput
          type="number"
          min="0"
          max={!isOrder ? maxValue : modalValue}
          step="0.01"
          name="modalValue"
          value={modalValue}
          onChange={({ target: { value } }) => formatValue(value)}
        />
      </StyledLabel>
      <StyledButtonsDiv>
        <StyledOperationButton
          type="button"
          onClick={handleCancelButton}
          background="#9e7900"
        >
          Cancelar
        </StyledOperationButton>
        <StyledOperationButton
          type="button"
          isPrimary
          onClick={handleConfirmButton}
        >
          Confirmar
        </StyledOperationButton>
      </StyledButtonsDiv>
    </ModalContentForm>
  );
}
