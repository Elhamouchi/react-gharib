import { useState } from "react";
export default function SearchForm({ search}) {
  const [inputSearch, setInputSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    search(inputSearch.trim().toLowerCase());
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="mb-3">
        <label htmlFor="search" className="form-label">
          Enter le nom du service:
        </label>
        <input
          type="text"
          className="form-control"
          id="search"
          value={inputSearch}
          onChange={(e) => {
            setInputSearch(e.target.value);
          }}
        />
      </div>
      <button className="btn btn-info" style={{ color: "white" }} type="submit">
        Chercher
      </button>
    </form>
  );
}