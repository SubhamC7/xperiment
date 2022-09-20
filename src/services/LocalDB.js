export const storeData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const removeData = (key) => {
  return localStorage.removeItem(key);
};

export const removeAllData = () => {
  return localStorage.clear();
};
