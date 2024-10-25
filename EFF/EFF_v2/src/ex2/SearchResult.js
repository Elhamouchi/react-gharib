export default function SearchResult({ result }) {
  if (result.length === 0) {
    return null;
  }
  return (
    <div>
      <h1>Resultat</h1>
      {result.map((r)=>{
        return (
          <li>
            Nom: {r.name} | Email: {r.email}
          </li>
        );
      })}
    </div>
  );
}
