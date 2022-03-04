import { useState } from 'react';

function useSessionStorage<T>(key: string): [T, (value: T) => void, () => T, ] {
  const [value, setValue] = useState<T>(() => {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : undefined;
  });

  const set = (newValue: T) : void => {
    sessionStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  const get = (): T => {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : undefined;
  };

  return [value, set, get];
}

export { useSessionStorage };
