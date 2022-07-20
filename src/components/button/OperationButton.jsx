import PropTypes from 'prop-types';
import React, { useContext } from 'react';

import FinanceContext from '../../context/FinanceContext';

export default function OperationButton({ operationType, isOrder, ticket }) {
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

    <button type="button" onClick={handleClick}>
      {operationType}
    </button>
  );
}

OperationButton.defaultProps = {
  isOrder: false,
  ticket: null,
};

OperationButton.propTypes = {
  operationType: PropTypes.string.isRequired,
  isOrder: PropTypes.bool,
  ticket: PropTypes.string,
};
