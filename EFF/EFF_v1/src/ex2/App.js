import SalariesList from "./SalariesList";
import Search from "./Search";

const salariesData = [
  {
    _id: "1",
    nomsal: "Alami",
    prenomsal: "Sara",
    fonction: "Technicien",
    service: "Informatique",
    nomser: "Informatique",
  },
  {
    _id: "2",
    nomsal: "Naji",
    prenomsal: "Omar",
    fonction: "Ingénieur",
    service: "Production",
    nomser: "Production",
  },
  {
    _id: "3",
    nomsal: "Bennani",
    prenomsal: "Yasmine",
    fonction: "Chef de Projet",
    service: "Management",
    nomser: "Management",
  },
  {
    _id: "4",
    nomsal: "Essadi",
    prenomsal: "Karim",
    fonction: "Développeur",
    service: "Informatique",
    nomser: "Informatique",
  },
  {
    _id: "5",
    nomsal: "Khalil",
    prenomsal: "Salma",
    fonction: "Designer",
    service: "Design",
    nomser: "Design",
  },
  {
    _id: "6",
    nomsal: "Bouhadi",
    prenomsal: "Mouad",
    fonction: "Analyste",
    service: "Finance",
    nomser: "Finance",
  },
  {
    _id: "7",
    nomsal: "El Fassi",
    prenomsal: "Rachid",
    fonction: "Technicien",
    service: "Maintenance",
    nomser: "Maintenance",
  },
  {
    _id: "8",
    nomsal: "Jalal",
    prenomsal: "Siham",
    fonction: "Responsable RH",
    service: "Ressources Humaines",
    nomser: "Ressources Humaines",
  },
];





export default function App(){
  const salaries = salariesData;
  return (
    <div >
      <SalariesList data={salaries}/>
      <Search data={salaries}/>
    </div>
  )
}