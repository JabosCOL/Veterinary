import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import PatientList from "./components/PatientList";

function App() {
  const [patients, setPatients] = useState([]);
  const [editPatient, setEditPatient] = useState({});

  const removePatient = (id) => {
    const patientsUpdated = patients.filter((patient) => patient.id !== id);
    setPatients(patientsUpdated);
  };

  return (
    <>
      <div className="container mx-auto mt-10">
        <Header />
        <div className="mt-12 md:flex">
          <Form
            patients={patients}
            setPatients={setPatients}
            editPatient={editPatient}
            setEditPatient={setEditPatient}
          />
          <PatientList
            patients={patients}
            setEditPatient={setEditPatient}
            removePatient={removePatient}
          />
        </div>
      </div>
    </>
  );
}

export default App;
