const { createStore } = require("redux");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESST";

const initialCounterState = {
  count: 0,
};

const actionCounterIncrement = () => {
  return {
    type: INCREMENT,
  };
};
const actionCounterDecrement = () => {
  return {
    type: DECREMENT,
  };
};

const actionCounterReset = () => {
  return {
    type: RESET,
  };
};

const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 2,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      state;
  }
};

const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(actionCounterIncrement());
store.dispatch(actionCounterIncrement());
store.dispatch(actionCounterIncrement());
store.dispatch(actionCounterReset());
