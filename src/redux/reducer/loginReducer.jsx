const loginState = {
  loading: false,
  alertSuccess: false,
  alertFailed: false,
};

export const loginReducer = (state = loginState, action) => {
  switch (action.type) {
    case "GET_DATA_LOAD":
      return {
        ...state,
        loading: action.loading,
      };

    case "ALERT_SUCCESS":
      return {
        ...state,
        loading: action.loading,
        alertSuccess: action.alertSuccess,
      };

    case "ALERT_FAILED":
      return {
        ...state,
        loading: action.loading,
        alertFailed: action.alertFailed,
      };

    default:
      return state;
  }
};
