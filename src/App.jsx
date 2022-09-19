import { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import PatientList from "./components/PatientList";

function App() {
  const getLS = JSON.parse(localStorage.getItem('patients')) ?? [];
  const [patients, setPatients] = useState(getLS);
  const [editPatient, setEditPatient] = useState({});

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients))
  }, [patients])
  

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
