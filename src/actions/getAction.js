/* eslint-disable import/prefer-default-export */
import { GET_NUMBER_CART } from './types';

export const getNumbers = () => {
  return (dispatch) => {
    console.log('getting number form the cart');
    dispatch({
      type: GET_NUMBER_CART,
    });
  };
};

// export default getNumbers;
