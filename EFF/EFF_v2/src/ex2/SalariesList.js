export default function SalariesList({ data }) {
  return (
    <div>
      <h1>Liste des Salaries</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <td>nom</td>
            <td>prenom</td>
            <td>email</td>
            <td>phone</td>
          </tr>
        </thead>
        <tbody>
          {data.map((salarie, key) => {
            return (
              <tr key={key}>
                <td>{salarie.name}</td>
                <td>{salarie.username}</td>
                <td>{salarie.email}</td>
                <td>{salarie.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
