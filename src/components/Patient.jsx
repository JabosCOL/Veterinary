import { toast } from "react-toastify";

const Patient = ({ patient, setEditPatient, setDeletePatient, setModal }) => {
  const { name, owner, email, date, symptoms, id } = patient;

  const handleDelete = () => {
    setDeletePatient(patient);
    setModal(true);
  };

  const handleEdit = () => {
    setEditPatient(patient);
    window.scrollTo({
      top: 170,
      behavior: "smooth",
    });
  };

  return (
    <div className="mx-5 mb-3 bg-white shadow-md px-5 py-[2.3rem] rounded-md">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Name: {""}
        <span className="font-normal normal-case">{name}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Owner: {""}
        <span className="font-normal normal-case">{owner}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Discharge Date: {""}
        <span className="font-normal normal-case">{date}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Symptoms: {""}
        <span className="font-normal normal-case">{symptoms}</span>
      </p>

      <button
        type="submit"
        className="bg-indigo-600 p-3 mr-3 text-white uppercase
        font-bold hover:bg-indigo-700 cursor-pointer transition-colors
        rounded-md"
        onClick={handleEdit}
      >
        Edit
      </button>
      <button
        type="submit"
        className="bg-red-600 p-3 text-white uppercase
        font-bold hover:bg-red-700 cursor-pointer transition-colors 
        rounded-md"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default Patient;
