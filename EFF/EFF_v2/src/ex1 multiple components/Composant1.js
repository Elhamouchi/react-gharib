import { useState } from "react";

const marques = ["toyota", "Mercides", "Dacia", "Mitsubishi", "Tesla"];

export default function Composant1() {
  const [formInputs, setformInputs] = useState({ matricule: "", marque: "", date: "", color: '' });
  const [recapShow, setRecapShow] = useState(false);
  return (
    <div className="container">
      <div>
        <h1>Gestion Voitures</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setRecapShow(true);
          }}
        >
          {/* input matricule */}
          <div className="mb-3">
            <label htmlFor="mat" className="form-label">
              {" "}
              matricule{" "}
            </label>
            <input
              type="text"
              name="mat"
              id="mat"
              className="form-control"
              value={formInputs.mat}
              onChange={(event) => {
                setformInputs({ ...formInputs, matricule: event.target.value });
              }}
            />
          </div>
          {/* marque select */}
          <select
            name="marque"
            id="marque"
            className="mb-3 form-select"
            value={formInputs.marque}
            onChange={(event) => {
              setformInputs({ ...formInputs, marque: event.target.value });
            }}
          >
            <option key={0} value="">
              marque
            </option>
            {marques.map((mar, ind) => {
              return (
                <option key={ind + 1} value={mar}>
                  {mar}
                </option>
              );
            })}
          </select>
          {/* input date */}
          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              {" "}
              Date de mise en circulation{" "}
            </label>
            <input
              type="date"
              className="form-control"
              name="mat"
              id="date"
              value={formInputs.date}
              onChange={(event) => {
                setformInputs({ ...formInputs, date: event.target.value });
              }}
            />
          </div>
          {/* input color */}
          <div className="mb-3">
            <label htmlFor="color" className="form-label">
              {" "}
              color{" "}
            </label>
            <input
              type="text"
              className="form-control"
              name="mat"
              id="color"
              value={formInputs.color}
              onChange={(event) => {
                setformInputs({ ...formInputs, color: event.target.value });
              }}
            />
          </div>
          <button className="btn btn-primary">Confirmer</button>
        </form>
      </div>

      {recapShow && (
        <div>
          <h1>Recapitulatif des informations:</h1>
          <ul>

          {
            Object.keys(formInputs).map((key, ind)=>{
              return <li key={ind}>{key}: {formInputs[key]}</li>
            })
            
            /* <ul>
            <li>
              matricule: {formInputs.mat}
            </li>
            <li>
              marque:  {formInputs.marque}
            </li>
            <li>
              date: {formInputs.date}
            </li>
            <li>
              color: {formInputs.color}
            </li>
            </ul> */
          }
          </ul>
        </div>
      )}
    </div>
  );
}
