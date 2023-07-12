const defaulState = {
  cash: 0,
};

const reducer = (state = defaulState, action) => {
  switch (action.type) {
    case "ADD_CASH":
      return { ...state, cash: state.cash + action.payload };

    case "GET_CASH":
      return { ...state, cash: state.cash - action.payload };

    default:
      return state;
  }
};

export default reducer;
