import axios from "axios";
import { useEffect, useState } from "react";

export default function Search() {
  const [salaries, setSalaries] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setSalaries(res.data);
    });
  }, []);
  const search = (e) => {
    e.preventDefault();
    let results = salaries.filter((salarie) => {
      return salarie.name.toLowerCase() === inputSearch.toLowerCase();
    });
    console.log(salaries);
    setSearchResult(results);
  };

  // JSX
  return (
    <div className="mb-5">
      <div>
        <h1>Recherche par service: </h1>
        <form onSubmit={(e) => search(e)}>
          <div className="mb-3">
            <label htmlFor="search" className="form-label">
              Enter le nom du user:
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
          <button
            className="btn btn-info"
            style={{ color: "white" }}
            type="submit"
          >
            Chercher
          </button>
        </form>
      </div>
      <div>
        {searchResult.length > 0 && (
          <div>
            <h1>Resultat</h1>
            {searchResult.map((r) => {
              return (
                <li>
                  Nom: {r.name} | Email: {r.email}
                </li>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
