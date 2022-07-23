import PropTypes from 'prop-types';
import React, { useContext } from 'react';

import FinanceContext from '../../context/FinanceContext';
import { StyledOperationButton } from './styles/StyledOperationButton.style';

export default function OperationButton({
  operationType, isOrder, ticket, isPrimary, isDisabled,
}) {
  const {
    setIsOrder,
    setOperationType,
    setIsModalOn,
    setSelectedTicket,
  } = useContext(FinanceContext);

  const handleClick = () => {
    setIsOrder(isOrder);
    setSelectedTicket(ticket);
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
  ticket: null,
  isPrimary: false,
  isDisabled: false,
};

OperationButton.propTypes = {
  operationType: PropTypes.string.isRequired,
  isOrder: PropTypes.bool,
  ticket: PropTypes.string,
  isPrimary: PropTypes.bool,
  isDisabled: PropTypes.bool,
};
