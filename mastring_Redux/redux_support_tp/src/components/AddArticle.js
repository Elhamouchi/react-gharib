import React, { useState } from "react";
const AddArticle = ({ saveArticle }) => {
  const [article, setArticle] = useState();
  const handleArticleData = (e) => {
    setArticle({
      ...article,
      [e.target.id]: e.target.value,
    });
    console.log(article);
  };
  const addNewArticle = (e) => {
    e.preventDefault();
    saveArticle(article);
  };
  return (
    <form onSubmit={addNewArticle} className="add-article">
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleArticleData}
      />
      <input
        type="text"
        id="body"
        placeholder="Body"
        onChange={handleArticleData}
      />
      <button>Add article</button>
    </form>
  );
};
export default AddArticle;
