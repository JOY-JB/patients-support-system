import RootLayout from "@/components/Layouts/RootLayout";

const ReceptionistList = ({ receptionists }) => {
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
            {receptionists?.map((receptionist) => (
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

export default ReceptionistList;

ReceptionistList.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/api/v1/receptionist`);
  const data = await res.json();

  return {
    props: {
      receptionists: data.data,
    },
  };
};
