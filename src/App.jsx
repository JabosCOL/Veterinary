import { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import PatientList from "./components/PatientList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "./components/Modal";

function App() {
  const getLS = JSON.parse(localStorage.getItem("patients")) ?? [];
  const [patients, setPatients] = useState(getLS);
  const [editPatient, setEditPatient] = useState({});
  const [deletePatient, setDeletePatient] = useState({});
  const [patientId, setPatientId] = useState('');
  const [modal, setModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const removePatient = (id) => {
    const patientsUpdated = patients.filter((patient) => patient.id !== id);
    setPatients(patientsUpdated);
  };

  const getPatientId = (id) => {
    setPatientId(id)
  }

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
            patientId={patientId}
          />
          <PatientList
            patients={patients}
            setEditPatient={setEditPatient}
            setDeletePatient={setDeletePatient}
            setModal={setModal}
            getPatientId={getPatientId}
          />
          <ToastContainer />
          {modal && (
            <Modal
              deletePatient={deletePatient}
              setDeletePatient={setDeletePatient}
              removePatient={removePatient}
              setModal={setModal}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
