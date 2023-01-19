import { toast } from "react-toastify";

const Modal = ({
  deletePatient,
  setDeletePatient,
  removePatient,
  setModal,
}) => {
  const handleDelete = () => {
    removePatient(deletePatient.id);
    setDeletePatient({});
    setModal(false);
    toast.error(`The patient ${deletePatient.name} has been deleted`);
  };

  return (
    <div className="bg-zinc-200 bg-opacity-90 fixed inset-0 z-50">
      <div className="flex h-screen justify-center items-center">
        <div
          className="flex-col justify-center bg-white py-4 px-3 md:py-12
        md:px-24 border-4 border-indigo-700 rounded-xl"
        >
          <div className="flex text-lg text-zinc-600 mb-10">
            Are you sure to delete the patient {deletePatient.name}?
          </div>
          <div className="flex">
            <button
              className="rounded px-4 py-2 text-white bg-red-600"
              onClick={handleDelete}
            >
              Yes
            </button>
            <button
              className="rounded px-4 py-2 ml-4 text-white bg-indigo-600"
              onClick={() => setModal(false)}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
