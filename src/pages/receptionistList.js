import RootLayout from "@/components/Layouts/RootLayout";
import { useEffect, useState } from "react";

const ReceptionistList = () => {
  const [receptionists, setReceptionists] = useState([]);

  // Fetch receptionists data from your backend API
  useEffect(() => {
    // Replace this with actual API call to get receptionists data
    // Example: fetchReceptionistsData().then(data => setReceptionists(data));
    const sampleData = [
      {
        id: 1,
        name: "Receptionist One",
        email: "receptionist1@example.com",
        age: 28,
      },
      {
        id: 2,
        name: "Receptionist Two",
        email: "receptionist2@example.com",
        age: 24,
      },
      // ... other receptionist data
    ];

    setReceptionists(sampleData);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-[73vh] bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-full lg:w-2/3 xl:w-1/2">
        <h1 className="text-4xl font-bold mb-6 text-center text-primary">
          Receptionist List
        </h1>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left font-semibold">ID</th>
              <th className="text-left font-semibold">Name</th>
              <th className="text-left font-semibold">Email</th>
              <th className="text-left font-semibold">Age</th>
            </tr>
          </thead>
          <tbody>
            {receptionists.map((receptionist) => (
              <tr key={receptionist.id}>
                <td>{receptionist.id}</td>
                <td>{receptionist.name}</td>
                <td>{receptionist.email}</td>
                <td>{receptionist.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

ReceptionistList.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default ReceptionistList;
