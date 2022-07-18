import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import FinanceContext from './FinanceContext';

function FinanceProvider({ children }) {
  const [bankTransitions, setBankTransitions] = useState(null);
  const [investments, setInvestments] = useState(null);
  const [userName, setuserName] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  const getUserId = () => {
    axios.get('/data/user.json')
      .then((response) => {
        setUserId(response.data.filter((user) => user.email === userEmail)[0].userId);
      });
  };

  const getInvestments = () => {
    axios.get('/data/investments.json')
      .then((response) => {
        setInvestments(response.data.filter((user) => user.userId === userId)[0]);
      });
  };

  const getBankTransitions = () => {
    axios.get('/data/bankTransitions.json')
      .then((response) => {
        setBankTransitions(response.data.filter((user) => user.userId === userId)[0]);
      });
  };

  const generateGlobalState = () => {
    getUserId();
  };

  useEffect(() => {
    getInvestments();
    getBankTransitions();
    setIsFetching(false);
  }, [userId]);

  const { Provider } = FinanceContext;
  return (
    <Provider
      value={{
        bankTransitions,
        investments,
        userEmail,
        setUserEmail,
        generateGlobalState,
        isFetching,
        userName,
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
