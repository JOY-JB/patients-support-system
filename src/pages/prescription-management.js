import RootLayout from "@/components/Layouts/RootLayout";
import { useState } from "react";

const PrescriptionManagementPage = ({ patients }) => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [prescription, setPrescription] = useState("");

  // const patients = [
  //   {
  //     id: 1,
  //     name: "Patient 1",
  //     age: 30,
  //     phoneNumber: "1234567890",
  //     address: "Address 1",
  //     previousIssues: ["Anxiety", "Insomnia"],
  //     currentIssues: "Depression",
  //     sleepMode: "Trouble falling asleep",
  //     depression: ["Loss of interest", "Low energy"],
  //     ocd: ["Compulsive behavior"],
  //   },
  //   // Add more patients
  // ];

  const handlePatientChange = (e) => {
    const patientId = parseInt(e.target.value);
    const selected = patients.find((patient) => patient.id === patientId);
    setSelectedPatient(selected);
  };

  const handlePrescriptionChange = (e) => {
    setPrescription(e.target.value);
  };

  const handlePrescribe = () => {
    // Here you can save the prescription data to a database or perform other actions
    // For now, let's log the prescription
    console.log(`Prescription for ${selectedPatient.name}: ${prescription}`);
  };

  return (
    <div className="flex justify-center items-center min-h-[73vh] bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full sm:max-w-md">
        <h1 className="text-2xl font-bold mb-4">Prescription Management</h1>
        <label className="block mb-4">
          Select Patient:
          <select
            name="patient"
            onChange={handlePatientChange}
            className="input input-bordered w-full"
          >
            <option value="">Select a patient</option>
            {patients.map((patient) => (
              <option key={patient.id} value={patient.id}>
                {patient.name}
              </option>
            ))}
          </select>
        </label>
        {selectedPatient && (
          <>
            <div className="mb-4">
              <h2 className="text-lg font-semibold">Patient Information</h2>
              <p>Name: {selectedPatient.name}</p>
              <p>Age: {selectedPatient.age}</p>
              <p>Phone Number: {selectedPatient.phoneNumber}</p>
              <p>Address: {selectedPatient.address}</p>
              <p>
                Previous Issues: {selectedPatient?.previousIssues?.join(", ")}
              </p>
              <p>Current Issues: {selectedPatient?.currentIssues}</p>
              <p>Sleep Mode: {selectedPatient?.sleepMode}</p>
              <p>Depression: {selectedPatient?.depression?.join(", ")}</p>
              <p>OCD: {selectedPatient?.ocd?.join(", ")}</p>
            </div>
            <label className="block mb-4">
              Write Prescription:
              <textarea
                name="prescription"
                value={prescription}
                onChange={handlePrescriptionChange}
                className="input input-bordered w-full"
                rows="5"
              />
            </label>
            <button
              onClick={handlePrescribe}
              className="btn btn-primary w-full"
            >
              Prescribe
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default PrescriptionManagementPage;

PrescriptionManagementPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/patient`
  );
  const data = await res.json();

  return {
    props: {
      patients: data.data,
    },
  };
};
