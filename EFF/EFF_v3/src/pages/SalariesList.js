import axios from "axios";
import { useEffect, useState } from "react";

export default function SalariesList() {
  const [salaries, setSalaries] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setSalaries(res.data);
    });
  }, []);
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
          {salaries.map((salarie, key) => {
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
