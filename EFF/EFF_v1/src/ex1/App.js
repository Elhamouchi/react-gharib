import { useState } from "react";
import Form from "./Form";
import Recap from "./Recap";
export default function Main() {
  const [formData, setFormData] = useState({});

  function getData(data){
    setFormData(data)
  }
  return (
    <div>
      <Form getData={getData} />
      <Recap data={formData} />
    </div>
  );
}
