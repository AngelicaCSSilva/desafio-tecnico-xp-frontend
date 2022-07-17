import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import FinanceContext from './FinanceContext';

function FinanceProvider({ children }) {
  const [bankTransitions, setBankTransitions] = useState(null);
  const [investments, setInvestments] = useState(null);

  const { Provider } = FinanceContext;
  return (
    <Provider
      value={{
        bankTransitions,
        investments,
      }}
    >
      {children}
    </Provider>
  );
}

FinanceProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default FinanceProvider;
