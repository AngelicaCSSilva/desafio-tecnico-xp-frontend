import '@testing-library/jest-dom';

import { saveSessionStorage, getSessionStorage, clearSessionStorage } from '../utils/sessionStorage';

const sessionStorageMock = (() => {
  const store = {};
  return {
    getItem(key) {
      return store[key];
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    clear() {
      this.store = {};
    },
  };
})();

Object.defineProperty(window, 'sessionStorage', {
  value: sessionStorageMock,
});

describe('Session storage test.', () => {
  it('Should save in session storage', async () => {
    const spyLoStoRemove = jest.spyOn(sessionStorage, 'setItem');

    await saveSessionStorage('Teste', 'Teste');

    expect(spyLoStoRemove).toHaveBeenCalled();
    expect(spyLoStoRemove).toHaveBeenCalledTimes(1);
  });

  it('Should get from session storage', async () => {
    const spyLoStoRemove = jest.spyOn(sessionStorage, 'getItem');

    await getSessionStorage('Teste');

    expect(spyLoStoRemove).toHaveBeenCalled();
    expect(spyLoStoRemove).toHaveBeenCalledTimes(1);
  });

  it('Should get from session storage', async () => {
    await saveSessionStorage('Teste', 'Teste');

    const spyGetItem = jest.spyOn(sessionStorage, 'getItem');

    const response = await getSessionStorage('Teste');

    expect(spyGetItem).toHaveBeenCalled();
    expect(spyGetItem).toHaveBeenCalledTimes(1);
    expect(response).toBe('Teste');
  });

  it('Should get from session storage', async () => {
    await getSessionStorage('Teste');

    const spyClear = jest.spyOn(sessionStorage, 'clear');

    await clearSessionStorage();

    expect(spyClear).toHaveBeenCalled();
    expect(spyClear).toHaveBeenCalledTimes(1);
  });
});
