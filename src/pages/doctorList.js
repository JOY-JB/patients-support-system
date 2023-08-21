import RootLayout from "@/components/Layouts/RootLayout";

const DoctorList = ({ doctors }) => {
  return (
    <div className="flex justify-center items-center min-h-[73vh] bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-full lg:w-2/3 xl:w-1/2">
        <h1 className="text-4xl font-bold mb-6 text-center text-primary">
          Doctor List
        </h1>
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
      </div>
    </div>
  );
};

export default DoctorList;

DoctorList.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/doctor`
  );
  const data = await res.json();

  return {
    props: {
      doctors: data.data,
    },
  };
};
