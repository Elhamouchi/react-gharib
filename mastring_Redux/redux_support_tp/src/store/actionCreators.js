import * as actionTypes from "./actionTypes";
export const addArticle = (article) => {
  return {
    type: actionTypes.ADD_ARTICLE,
    article,
  };
};
