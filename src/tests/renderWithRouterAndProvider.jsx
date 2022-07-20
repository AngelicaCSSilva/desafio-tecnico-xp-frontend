import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';

import FinanceProvider from '../context/FinanceProvider';

const renderWithRouterAndProvider = (component) => {
  const history = createMemoryHistory();

  return ({
    ...render(
      <FinanceProvider>
        <Router history={history}>
          {component}
        </Router>
      </FinanceProvider>,
    ),
    history,
  });
};

export default renderWithRouterAndProvider;
