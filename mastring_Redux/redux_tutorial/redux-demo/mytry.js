const redux = require("redux");
const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICEKREAM = "BUY_ICECREAME";

const buy_cake = (nb_cakes = 1) => {
  return {
    type: BUY_CAKE,
    pyLoad: nb_cakes,
  };
};

const buy_icecreame = (nb_iceCreames = 1) => {
  return {
    type: BUY_ICEKREAM,
    pyLoad: nb_iceCreames,
  };
};

const initialState = {
  numOfCakes: 40,
  numOfIceCreames: 44,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      if (state.numOfCakes < action.pyLoad) return state;

      return {
        ...state,
        numOfCakes: state.numOfCakes - action.pyLoad,
      };

    case BUY_ICEKREAM:
      if (state.numOfIceCreames < action.pyLoad) return state;
      return {
        ...state,
        numOfIceCreames: state.numOfIceCreames - action.pyLoad,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("intial State: ", store.getState());
const unSubscribe = store.subscribe(() => {
  console.log("updated state: ", store.getState());
});

store.dispatch(buy_icecreame(2));
store.dispatch(buy_cake(3));
store.dispatch(buy_icecreame(42));
store.dispatch(buy_cake());
store.dispatch(buy_icecreame());
store.dispatch(buy_cake());
unSubscribe();
// after unSubscribe the subscribe function not work when you dispath an action;

store.dispatch(buy_cake());
console.log(store.getState());
