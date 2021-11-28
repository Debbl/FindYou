import { useEffect, useState } from 'react';

function useLocalStorage(key, defaultValue) {
  const [data, setData] = useState('');

  useEffect(() => {
    if (window.localStorage.getItem(key)) {
      setData(window.localStorage.getItem(key));
    } else {
      window.localStorage.setItem(key, defaultValue);
      setData(defaultValue);
    }
  }, []);

  function setValue(value) {
    window.localStorage.setItem(key, value);
    setData(value);
  }

  return (() => [data, setValue])();
}

export default useLocalStorage;
