export function saveSessionStorage(key, value) {
  sessionStorage.setItem(key, JSON.stringify(value));
}

export function getSessionStorage(key) {
  const data = sessionStorage.getItem(key);
  return JSON.parse(data);
}

export function clearSessionStorage() {
  sessionStorage.clear();
}
