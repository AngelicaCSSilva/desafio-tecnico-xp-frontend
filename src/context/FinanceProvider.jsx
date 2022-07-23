import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import FinanceContext from './FinanceContext';

function FinanceProvider({ children }) {
  const [bankTransactions, setBankTransactions] = useState(null);
  const [assets, setAssets] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userName, setuserName] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [allStocks, setAllStocks] = useState(null);
  const [token, setToken] = useState(null);

  const [isModalOn, setIsModalOn] = useState(false);
  const [isOrder, setIsOrder] = useState(true);
  const [operationType, setOperationType] = useState('Compra');
  const [selectedTicket, setSelectedTicket] = useState(null);

  const getUserId = async () => {
    const url = 'https://desafiobackend-angelica.herokuapp.com/users';
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUserId(data?.filter((user) => user.email === userEmail)[0]?.userId);
      setuserName(data?.filter((user) => user.email === userEmail)[0]?.name);
    } catch (error) {
      throw new Error(error);
    }
  };

  const getAllStocks = async () => {
    const url = 'https://desafiobackend-angelica.herokuapp.com/allstocks';
    try {
      const response = await fetch(url);
      const data = await response.json();
      setAllStocks(data);
    } catch (error) {
      throw new Error(error);
    }
  };

  const getInvestments = async () => {
    const url = `https://desafiobackend-angelica.herokuapp.com/${userId}/assets`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setAssets(data.filter((user) => user.userId === userId)[0]);
    } catch (error) {
      throw new Error(error);
    }
  };

  const getBankTransitions = async () => {
    const url = `https://desafiobackend-angelica.herokuapp.com/${userId}/bankTransactions`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setBankTransactions(data.filter((user) => user.userId === userId)[0]);
    } catch (error) {
      throw new Error(error);
    }
  };

  const generateGlobalState = () => {
    getUserId();
  };

  useEffect(() => {
    if (userId) {
      getInvestments();
      getAllStocks();
      getBankTransitions();
      setIsFetching(false);
    }
  }, [userId]);

  const { Provider } = FinanceContext;
  return (
    <Provider
      value={{
        bankTransactions,
        assets,
        userEmail,
        setUserEmail,
        generateGlobalState,
        isFetching,
        userName,
        isModalOn,
        setIsModalOn,
        setAssets,
        isOrder,
        setIsOrder,
        operationType,
        setOperationType,
        selectedTicket,
        setSelectedTicket,
        setBankTransactions,
        allStocks,
        token,
        setToken,
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
