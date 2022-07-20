import '@testing-library/jest-dom';

import { getLocalStorage, saveLocalStorage } from '../utils/localStorage';

const localStorageMock = (() => {
  const store = {};
  return {
    getItem(key) {
      return store[key];
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('LocalStorage test.', () => {
  it('Should save in local storage', async () => {
    const spyLoStoRemove = jest.spyOn(localStorage, 'setItem');

    await saveLocalStorage('Teste', 'Teste');

    expect(spyLoStoRemove).toHaveBeenCalled();
    expect(spyLoStoRemove).toHaveBeenCalledTimes(1);
  });

  it('Should get from local storage', async () => {
    const spyLoStoRemove = jest.spyOn(localStorage, 'getItem');

    await getLocalStorage('Teste');

    expect(spyLoStoRemove).toHaveBeenCalled();
    expect(spyLoStoRemove).toHaveBeenCalledTimes(1);
  });
});
