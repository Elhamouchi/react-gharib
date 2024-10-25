import * as type from '../actions/typeActions';

const initialState = {
  fruits: [],
  fruits1: []
}

export default function reducerFruit(state = initialState, action){
  switch(action.type){
    case type.AJOUTER:
      return { ...state, fruits: [...state.fruits, action.acticle] };
    case type.VIDER:
      return initialState;
    default: return state;
    }
}