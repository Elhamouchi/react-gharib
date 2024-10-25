export default function SalariesList({ data }) {
  return (
    <div>
      <h1>Liste des Salaries</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <td>nom</td>
            <td>prenom</td>
            <td>Fonction</td>
            <td>Service</td>
          </tr>
        </thead>
        <tbody>
          {data.map((salarie, key) => {
            return (
              <tr key={key}>
                <td>{salarie.nomsal}</td>
                <td>{salarie.prenomsal}</td>
                <td>{salarie.fonction}</td>
                <td>{salarie.service}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
