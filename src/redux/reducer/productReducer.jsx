const productState = {
  // isAuth: false,
  list: [],
};

export const productReducer = (state = productState, action) => {
  switch (action.type) {
    case "GET_DATA_SUCCED":
      return {
        ...state,
        list: action.payload,
      };

    case "GET_DATA_FAILED":
      return {
        ...state,
        list: action.payload,
      };

    default:
        return state;
  }
};
