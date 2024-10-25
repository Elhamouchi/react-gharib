import * as actionTypes from "./actionTypes";
const initialState = {
  articles: [
    
  ],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ARTICLE:
      const newArticle = {
        id: Math.random(), // not really unique but it's just an
        title: action.article.title,
        body: action.article.body,
      };
      return {
        state,
        articles: state.articles.concat(newArticle),
      };
    default:
      return state;
  }
};
export default reducer;
