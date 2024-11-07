const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;



const BUY_CAKE = "BUY_CAKE";
const BUY_ICEKREAM = "BUY_ICECREAME";

const buy_cake = (nb_cakes = 1) => {
  console.log('hi from buy cake action creator')
  return {
    type: BUY_CAKE,
    pyLoad: nb_cakes,
  };
};

const buy_icecreame = (nb_iceCreames = 1) => {
  console.log("hi from buy iceCreame action creator");
  return {
    type: BUY_ICEKREAM,
    pyLoad: nb_iceCreames,
  };
};

const cakeInitialState = {
  numOfCakes: 40,
};

const iceCreame_initialState = {
  numOfIceCreame: 20
}

const cakeReducer = (state = cakeInitialState, action) => {
  console.log("hi from cake Reducer");
  switch (action.type) {
    case BUY_CAKE:
      console.log(" - this is BUY_CAKE case in cake reducer");
      if (state.numOfCakes < action.pyLoad) {
        return state;
      }
        return {
        ...state,
        numOfCakes: state.numOfCakes - action.pyLoad,
      };

    default:
      console.log("- this is default case in cake reducer");
      return state;
  }
};

const iceCreameReducer = (state = iceCreame_initialState, action) => {
  console.log('hi from icecreame Reducer')
  switch (action.type) {
    case BUY_ICEKREAM:
      console.log(" - this is BUY_ICEKREAM case in icecreame reducer");
      if (state.numOfIceCreame < action.pyLoad) return state;
      return {
        ...state,
        numOfIceCreame: state.numOfIceCreame - action.pyLoad,
      };

    default:
      console.log("- this is default case in iceCreame reducer");
      return state;
  }
};

console.log(
  "========================= conbine Reducers ========================="
);
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCreame: iceCreameReducer
})
console.log("========================= create store =========================");

const store = createStore(rootReducer);
console.log('intial State: ', store.getState());
console.log(
  "========================= make subscribe ========================="
);
const unSubscribe = store.subscribe(() => {
  console.log("updated state: ", store.getState());
});

console.log(
  "========================= starting dispatching ========================="
);
store.dispatch(buy_icecreame(2));
// store.dispatch(buy_cake(3));
unSubscribe();
// after unSubscribe the subscribe function not work when you dispath an action;

// store.dispatch(buy_cake());
// console.log(store.getState());
