import RootLayout from "@/components/Layouts/RootLayout";
import { useEffect, useState } from "react";

const DoctorList = () => {
  const [doctors, setDoctors] = useState(null);

  useEffect(() => {
    fetch(
      `https://health-care-backend-joybarua0058-gmailcom.vercel.app/api/v1/doctor`
    )
      .then((res) => res.json())
      .then((data) => setDoctors(data?.data));
  }, []);

  return (
    <div className="flex justify-center items-center min-h-[73vh] bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-full lg:w-2/3 xl:w-1/2">
        <h1 className="text-4xl font-bold mb-6 text-center text-primary">
          Doctor List
        </h1>

        {doctors ? (
          <table className="w-full text-lg">
            <thead className="mb-4">
              <tr>
                <th className="text-left font-semibold">ID</th>
                <th className="text-left font-semibold">Name</th>
                <th className="text-left font-semibold">Email</th>
                <th className="text-left font-semibold">Specialization</th>
                <th className="text-left font-semibold">Age</th>
              </tr>
            </thead>
            <tbody>
              {doctors?.map((doctor) => (
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
        ) : (
          <div className="flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorList;

DoctorList.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
