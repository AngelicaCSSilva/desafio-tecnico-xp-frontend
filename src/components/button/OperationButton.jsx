import PropTypes from 'prop-types';
import React, { useContext } from 'react';

import FinanceContext from '../../context/FinanceContext';
import { StyledOperationButton } from './styles/StyledOperationButton.style';

export default function OperationButton({
  operationType, isOrder, ticker, isPrimary, isDisabled, stockValue,
}) {
  const {
    setIsOrder,
    setOperationType,
    setIsModalOn,
    setSelectedTicket,
    setSelectedStockValue,
  } = useContext(FinanceContext);

  const handleClick = () => {
    setIsOrder(isOrder);
    setSelectedStockValue(stockValue);
    setSelectedTicket(ticker);
    setOperationType(operationType);
    setIsModalOn(true);
  };

  return (
    <StyledOperationButton disabled={isDisabled} type="button" isPrimary={isPrimary} onClick={handleClick}>
      {operationType}
    </StyledOperationButton>
  );
}

OperationButton.defaultProps = {
  isOrder: false,
  ticker: null,
  stockValue: 0,
  isPrimary: false,
  isDisabled: false,
};

OperationButton.propTypes = {
  operationType: PropTypes.string.isRequired,
  isOrder: PropTypes.bool,
  ticker: PropTypes.string,
  isPrimary: PropTypes.bool,
  isDisabled: PropTypes.bool,
  stockValue: PropTypes.number,
};
