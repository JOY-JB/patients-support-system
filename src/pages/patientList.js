// components/PatientList.js
import RootLayout from "@/components/Layouts/RootLayout";
import { useEffect, useState } from "react";

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  // Fetch patients data from your backend API
  useEffect(() => {
    // Replace this with actual API call to get patients data
    // Example: fetchPatientsData().then(data => setPatients(data));
    const sampleData = [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        age: 30,
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        age: 25,
      },
      // ... other patient data
    ];

    setPatients(sampleData);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-[73vh] bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-full lg:w-2/3 xl:w-1/2">
        <h1 className="text-4xl font-bold mb-6 text-center text-primary">
          Patient List
        </h1>
        <table className="w-full text-lg">
          <thead>
            <tr>
              <th className="text-left font-semibold">ID</th>
              <th className="text-left font-semibold">Name</th>
              <th className="text-left font-semibold">Email</th>
              <th className="text-left font-semibold">Age</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.id}</td>
                <td>{patient.name}</td>
                <td>{patient.email}</td>
                <td>{patient.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

PatientList.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default PatientList;
