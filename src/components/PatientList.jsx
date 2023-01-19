import Patient from "./Patient";

const PatientList = ({
  patients,
  setEditPatient,
  setDeletePatient,
  setModal,
  getPatientId
}) => {
  return (
    <div className="mt-5 md:mt-0 md:w-1/2 lg:w-3/5">
      {patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Patient List</h2>
          <p className="text-lg mt-5 mb-10 text-center">
            Administer your {""}
            <span className="text-indigo-600 font-bold">
              Patients and appointments
            </span>
          </p>
          <div className="md:overflow-y-scroll h-[38.5rem]">
            {patients.map((patient) => (
              <Patient
                key={patient.id}
                patient={patient}
                setEditPatient={setEditPatient}
                setDeletePatient={setDeletePatient}
                setModal={setModal}
                getPatientId={getPatientId}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            There aren't patients
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Start adding your patients {""}
            <span className="text-indigo-600 font-bold">
              and they'll show up here
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default PatientList;
