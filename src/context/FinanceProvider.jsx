import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import FinanceContext from './FinanceContext';

function FinanceProvider({ children }) {
  const [bankTransitions, setBankTransitions] = useState(null);
  const [investments, setInvestments] = useState(null);
  const [userName, setuserName] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  const getUserId = async () => {
    const url = 'https://desafiobackend-angelica.herokuapp.com/users';
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUserId(data.filter((user) => user.email === userEmail)[0].userId);
      setuserName(data.filter((user) => user.email === userEmail)[0].name);
    } catch (error) {
      console.log(error);
    }
  };

  const getInvestments = async () => {
    const url = `https://desafiobackend-angelica.herokuapp.com/${userId}/investments`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setInvestments(data.filter((user) => user.userId === userId)[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const getBankTransitions = async () => {
    const url = `https://desafiobackend-angelica.herokuapp.com/${userId}/bankTransitions`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setBankTransitions(data.filter((user) => user.userId === userId)[0]);
    } catch (error) {
      console.log(error);
    }
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
