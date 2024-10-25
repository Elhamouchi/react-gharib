import { useState } from "react";
import Alert from "./Alert";
export default function Form({ getData }) {
  const [inputs, setInput] = useState({ mat: "", marque: "", date: "", color: ""});
  
  const [validInputs, setValidInputs] = useState(true);
  const [showAlert, setShowAlert] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()){
      setValidInputs(true);
      getData(inputs);
    }else{
      setValidInputs(false);
      setShowAlert(true)
      console.log('invalid');
    };
  };

  const validate = ()=>{
    const isValid = Object.keys(inputs).every((key)=>{
      return inputs[key].trim() !== "";
    })

    return isValid;
  }

  const removeAlert = ()=>{
    setShowAlert(false)
  }


  return (
    <>
      {!validInputs && showAlert && (
        <Alert callBack={removeAlert}>
          {" "}
          All fields must be completed before submitting.{" "}
        </Alert>
      )}
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="mb-3">
          <label htmlFor="mat" className="form-label">
            Matricule
          </label>
          <input
            type="text"
            className="form-control"
            id="mat"
            value={inputs.mat}
            name="mat"
            onChange={(e) => {
              setInput({...inputs, mat: e.target.value});
            }}
          />


          
        </div>
        <select
          className="form-select mb-3"
          aria-label="Default select example"
          name="marque"
          value={inputs.marque}
          onChange={(e) => {
            setInput({ ...inputs, marque: e.target.value });
          }}
        >
          <option value="">marque</option>
          <option value="Toyota">Toyota</option>
          <option value="Ford">Ford</option>
          <option value="Dacia">Dacia</option>
        </select>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            date de mise en circulation:
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={inputs.date}
            name="date"
            onChange={(e) => {
              setInput({ ...inputs, date: e.target.value });
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="color" className="form-label">
            couleur
          </label>
          <input
            type="text"
            className="form-control"
            id="color"
            value={inputs.color}
            name="color"
            onChange={(e) => {
              setInput({ ...inputs, color: e.target.value });
            }}
          />
        </div>
        <button type="submit" className="btn btn-success">
          submit
        </button>
      </form>
    </>
  );
}
