/* eslint-disable no-case-declarations */
import { ADD_PRODUCT_CART, GET_NUMBER_CART, SET_FAVORITE, DELETE_FAVORITE } from '../actions/types';

// eslint-disable-next-line no-unused-vars
const initialState = {
  cartItems: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_FAVORITE:
      const exist = state.myfav.find((item) => item.id === action.payload.id);
      if (exist) return { ...state };
      return {
        ...state,
        myfav: [...state.myfav, action.payload],
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        myfav: state.myfav.filter((items) => items.id !== action.payload),
      };
    case ADD_PRODUCT_CART:
      return {
        cartItems: state.cartItems + 1,
      };
    case GET_NUMBER_CART:
      return {
        ...state,
      };

    default:
      return state;
  }

};

export default reducer;
