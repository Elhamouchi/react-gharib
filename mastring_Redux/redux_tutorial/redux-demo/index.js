const redux = require('redux');
const createStore = redux.createStore

// action types
const BUY_CAKE = "BUY_CAKE";

// action creators;

function buy_cake() {
  return {
    type: BUY_CAKE,
    info: "my first action",
  };
}

const initialState = {
  numOfCakes: 40,
  id: 909090
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {...state, numOfCakes: state.numOfCakes - 1 };
    default:
      return state;
  }
};


const store = createStore(reducer);



console.log('Initial state', store.getState());

const unsubscibe = store.subscribe(()=> console.log('Updated state', store.getState()))
store.dispatch(buy_cake());
store.dispatch(buy_cake());

unsubscibe()
const oooo = store.subscribe(() =>
  console.log("Updated state", store.getState())
);

console.log('after =======================');
store.dispatch(buy_cake());
// console.log(store.getState());