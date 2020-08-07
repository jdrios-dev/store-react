/* eslint-disable import/prefer-default-export */
import { ADD_PRODUCT_CART, SET_FAVORITE, DELETE_FAVORITE } from './types';

export const addCart = () => {
  return (dispatch) => {
    dispatch({
      type: ADD_PRODUCT_CART,
    });
  };
};
export const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload,
});

export const deleteFavorite = (payload) => ({
  type: DELETE_FAVORITE,
  payload,
});

