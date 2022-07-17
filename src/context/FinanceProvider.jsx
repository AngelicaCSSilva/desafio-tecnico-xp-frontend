import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import FinanceContext from './FinanceContext';

function FinanceProvider({ children }) {
  const [bankTransitions, setBankTransitions] = useState(null);
  const [investments, setInvestments] = useState(null);
  const [userEmail, setUserEmail] = useState('');
  const [userId, setUserId] = useState('');
  const [isFetching, setIsFetching] = useState(true);

  const getUserId = () => {
    axios.get('/data/user.json')
      .then((response) => {
        setUserId(response.data.filter((user) => user.email === userEmail)[0].userId);
      });
  };

  const { Provider } = FinanceContext;
  return (
    <Provider
      value={{
        bankTransitions,
        investments,
        userEmail,
        setUserEmail,
        isFetching,
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
