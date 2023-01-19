import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Error from "./Error";

const Form = ({ patients, setPatients, editPatient, setEditPatient, patientId }) => {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [symptoms, setSymptoms] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(editPatient).length > 0) {
      setName(editPatient.name);
      setOwner(editPatient.owner);
      setEmail(editPatient.email);
      setDate(editPatient.date);
      setSymptoms(editPatient.symptoms);
    }
  }, [editPatient]);

  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36);

    return random + date;
  };

  const focusPatient = () => {
    const patientNode = document.getElementById(patientId)

    patientNode.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest"
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if ([name, owner, email, date, symptoms].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    const patientObject = {
      name,
      owner,
      email,
      date,
      symptoms,
    };

    if (editPatient.id) {
      // Editing the patient
      patientObject.id = editPatient.id;
      const patientsUpdated = patients.map((patientState) =>
        patientState.id === editPatient.id ? patientObject : patientState
      );
      setPatients(patientsUpdated);
      setEditPatient({});
      toast.success(`The patient ${name} has been updated successfully`);
      focusPatient()
    } else {
      // Creating the patient
      patientObject.id = generateId();
      setPatients([...patients, patientObject]);
      toast.success(`The patient ${patientObject.name} has been created
      successfully`);
    }

    // Reset the form
    setName("");
    setOwner("");
    setEmail("");
    setDate("");
    setSymptoms("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Patients follow-up</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Add patients and {""}
        <span className="text-indigo-600 font-bold">Administer them</span>
      </p>

      <form
        id="form"
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-7 px-5"
      >
        {error && (
          <Error>
            <p>All fields are mandatory</p>
          </Error>
        )}

        <div className="mb-5">
          <label
            htmlFor="pet"
            className="block text-gray-700
            uppercase font-bold"
          >
            Pet's name
          </label>

          <input
            id="pet"
            type="text"
            placeholder="Name of the pet"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400
            rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="owner"
            className="block text-gray-700
            uppercase font-bold"
          >
            Owner's name
          </label>

          <input
            id="owner"
            type="text"
            placeholder="Name of the owner"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400
              rounded-md"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700
            uppercase font-bold"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="Owner's email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400
              rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="dischargeDate"
            className="block text-gray-700
            uppercase font-bold"
          >
            Discharge date
          </label>

          <input
            id="dischargeDate"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400
              rounded-md"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="symptoms"
            className="block text-gray-700
            uppercase font-bold"
          >
            Symptoms
          </label>

          <textarea
            id="symptoms"
            placeholder="Describe the symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400
              rounded-md"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase
            font-bold hover:bg-indigo-700 cursor-pointer transition-colors
            rounded-md"
          value={editPatient.id ? "Edit patient" : "Add patient"}
        />
      </form>
    </div>
  );
};

export default Form;
