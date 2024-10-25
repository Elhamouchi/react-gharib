import { useState } from "react";
import Form from './SearchForm';
import SearchResult from "./SearchResult";
export default function Search({data}){
  const salaries = data;
  const [searchResult, setSearchResult] = useState([]);
  
  const search = (searchValue) => {
    let results = salaries.filter((salarie) => {
      return salarie.service.toLowerCase() === searchValue;
    });
    setSearchResult(results);
  };
  return (
    <div className="mb-5">
      <div>
        <h1>Recherche par service: </h1>
        <Form search={search} />
      </div>
      <div>
        <SearchResult result={searchResult} />
      </div>
    </div>
  );
}