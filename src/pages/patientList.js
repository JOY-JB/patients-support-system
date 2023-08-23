// components/PatientList.js
import RootLayout from "@/components/Layouts/RootLayout";
import { useEffect, useState } from "react";

const PatientList = () => {
  const [patients, setPatients] = useState(null);

  useEffect(() => {
    fetch(
      `https://health-care-backend-joybarua0058-gmailcom.vercel.app/api/v1/patient`
    )
      .then((res) => res.json())
      .then((data) => setPatients(data?.data));
  }, []);
  return (
    <div className="flex justify-center items-center min-h-[73vh] bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-full lg:w-2/3 xl:w-1/2">
        <h1 className="text-4xl font-bold mb-6 text-center text-primary">
          Patient List
        </h1>
        {patients ? (
          <table className="w-full text-lg">
            <thead>
              <tr>
                <th className="text-left font-semibold">ID</th>
                <th className="text-left font-semibold">Name</th>
                <th className="text-left font-semibold">Phone</th>
                <th className="text-left font-semibold">Age</th>
              </tr>
            </thead>
            <tbody>
              {patients?.map((patient) => (
                <tr key={patient.id}>
                  <td>{patient.id}</td>
                  <td>{patient.name}</td>
                  <td>{patient.phoneNumber}</td>
                  <td>{patient.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientList;

PatientList.getLayout = function getLayout(page) {
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
