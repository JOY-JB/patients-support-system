import RootLayout from "@/components/Layouts/RootLayout";
import { useEffect, useState } from "react";

const PrescriptionManagementPage = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [selectedPatientQuery, setSelectedPatientQuery] = useState(null);
  const [prescription, setPrescription] = useState("");

  const handlePatientChange = (e) => {
    const patientId = parseInt(e.target.value);

    const selected = patients.find((patient) => patient.id === patientId);
    setSelectedPatient(selected);
  };

  const handlePrescriptionChange = (e) => {
    setPrescription(e.target.value);
  };

  const handlePrescribe = () => {
    fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/prescription/create-prescription`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          patientId: selectedPatient.id,
          doctorId: selectedPatient.doctorId,
          content: prescription,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          window.alert("Prescription added successfully!");
        }
      });
  };

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/patient`)
      .then((res) => res.json())
      .then((data) => setPatients(data.data));
  }, []);

  useEffect(() => {
    if (selectedPatient?.id) {
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/primaryQuestionForm/${selectedPatient.id}`
      )
        .then((res) => res.json())
        .then((data) => setSelectedPatientQuery(data.data));
    }
  }, [selectedPatient]);

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
                Previous Issues:{" "}
                {selectedPatientQuery?.previousIssues?.join(", ")}
              </p>
              <p>Current Issues: {selectedPatientQuery?.currentIssues}</p>
              <p>Sleep Mode: {selectedPatientQuery?.sleepMode}</p>
              <p>Depression: {selectedPatientQuery?.depression?.join(", ")}</p>
              <p>OCD: {selectedPatientQuery?.ocd?.join(", ")}</p>
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

// export const getServerSideProps = async () => {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/patient`
//   );
//   const data = await res.json();

//   return {
//     props: {
//       patients: data.data,
//     },
//   };
// };
