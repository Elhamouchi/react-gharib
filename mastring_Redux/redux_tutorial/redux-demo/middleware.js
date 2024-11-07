const redux = require("redux");
const redux_logger = require('redux-logger');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const logger = redux_logger.createLogger();
const applyMiddleware = redux.applyMiddleware
// actions types
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAME = "BUY_ICECREAME";

// actions creators

const buy_cake = () => {
  return {
    type: BUY_CAKE,
  };
};

const buy_icecreame = () => {
  return {
    type: BUY_ICECREAME,
  };
};

// initial states

const cakeInitialState = {
  numOfCakes: 40,
};

const iceCreameInitialState = {
  numOfIceCreame: 33,
};

// reducers
// -- cake reducer
const cakeReducer = (state = cakeInitialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
      default:
        return state;
      }
    };
    
// -- iceCareame reducer


const iceCareameReducer = (state = iceCreameInitialState, action) => {
  switch (action.type) {
    case BUY_ICECREAME:
      return {
        ...state,
        numOfIceCreame: state.numOfIceCreame - 1,
      };
    default:
      return state;
  }
};

// create store


const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCreame: iceCareameReducer
})

const store = createStore(rootReducer, applyMiddleware(logger));

// const unSubscribe = store.subscribe(()=>{})
store.dispatch(buy_icecreame());
store.dispatch(buy_cake());
store.dispatch(buy_icecreame());
store.dispatch(buy_cake());
store.dispatch(buy_icecreame());

// unSubscribe()
