import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [products, setItems] = useState({
    myfav: [],
    boards: [],
    cpus: [],
    memory: [],
    gpus: [],
    power_supply: [] });
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);
  return products;
};

export default useInitialState;
