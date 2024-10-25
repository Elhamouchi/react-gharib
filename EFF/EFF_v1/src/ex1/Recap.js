export default function Recap({ data }) {
  console.log(data);
  if (Object.keys(data).length === 0 ){
    return null;
  }
    return (
      <div>
        <h1>Recapitulatif des informations: </h1>
        <ul>
          {Object.keys(data).map((d, key) => {
            return (
              <li key={key}>
                {d}: {data[d]}
              </li>
            );
          })}
        </ul>
      </div>
    );
}