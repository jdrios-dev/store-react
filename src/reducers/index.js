const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      const exist = state.myfav.find(item => item.id === action.payload.id);
      if (exist) return {...state}
      return {
        ...state,
        myfav: [...state.myfav, action.payload],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myfav: state.myfav.filter((items) => items.id !== action.payload),
      };

    default:
      return state;
  }

};

export default reducer;
