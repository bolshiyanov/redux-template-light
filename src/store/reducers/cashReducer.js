const ADD_CASH = "ADD_CASH";
const GET_CASH = "GET_CASH";
const GET_ANY_CASH = "GET_ANY_CASH";

const defaulState = {
  cash: 0,
};

export const cashReducer = (state = defaulState, action) => {
  switch (action.type) {
    case ADD_CASH:
      return { ...state, cash: state.cash + action.payload };

    case GET_CASH:
      return { ...state, cash: state.cash - action.payload };

      case GET_ANY_CASH:
      return { ...state, cash: state.cash - action.payload };

    default:
      return state;
  }
};

export const addCashAction = () => ({ type: ADD_CASH, payload: 5 });
export const getCashAction = () => ({ type: GET_CASH, payload: 5 });
export const getAnyCashAction = (payload) => ({
  type: GET_CASH,
  payload: payload,
});
