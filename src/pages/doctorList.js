import RootLayout from "@/components/Layouts/RootLayout";
import { useEffect, useState } from "react";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  // Fetch doctors data from your backend API
  useEffect(() => {
    // Replace this with actual API call to get doctors data
    // Example: fetchDoctorsData().then(data => setDoctors(data));
    const sampleData = [
      {
        id: 1,
        name: "Dr. John Smith",
        email: "john@example.com",
        specialization: "Psychiatrist",
        age: 40,
      },
      {
        id: 2,
        name: "Dr. Jane Doe",
        email: "jane@example.com",
        specialization: "Psychologist",
        age: 35,
      },
      // ... other doctor data
    ];

    setDoctors(sampleData);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-[73vh] bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-full lg:w-2/3 xl:w-1/2">
        <h1 className="text-4xl font-bold mb-6 text-center text-primary">
          Doctor List
        </h1>
        <table className="w-full text-lg">
          <thead>
            <tr>
              <th className="text-left font-semibold">ID</th>
              <th className="text-left font-semibold">Name</th>
              <th className="text-left font-semibold">Email</th>
              <th className="text-left font-semibold">Specialization</th>
              <th className="text-left font-semibold">Age</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr key={doctor.id}>
                <td>{doctor.id}</td>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.specialization}</td>
                <td>{doctor.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

DoctorList.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default DoctorList;
