import RootLayout from "@/components/Layouts/RootLayout";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useEffect, useRef, useState } from "react";

const PrescriptionPage = () => {
  const [patients, setPatients] = useState(null);
  const prescriptionRef = useRef(null);

  const [selectedPatient, setSelectedPatient] = useState(null);
  const [selectedPatientQuery, setSelectedPatientQuery] = useState(null);

  const handlePatientSelect = (patientId) => {
    const selected = patients.find((patient) => patient.id === patientId);

    setSelectedPatient(selected);
  };

  const handleDownloadPDF = async () => {
    if (selectedPatient) {
      const pdf = new jsPDF("p", "mm", "a4");
      const canvas = await html2canvas(prescriptionRef.current, {
        scale: 2,
      });

      const imgData = canvas.toDataURL("image/png");
      pdf.addImage(imgData, "PNG", 10, 20, 210, 120);

      pdf.save(`${selectedPatient.name}_prescription.pdf`);
    }
  };

  const handlePrint = () => {
    if (selectedPatient) {
      const contentToPrint = prescriptionRef.current;
      const printWindow = window.open("", "_blank");
      printWindow.document.write(contentToPrint.innerHTML);
      printWindow.document.close();
      printWindow.print();
    }
  };

  useEffect(() => {
    if (selectedPatient?.id) {
      fetch(
        `https://health-care-backend-joybarua0058-gmailcom.vercel.app/api/v1/primaryQuestionForm/${selectedPatient.id}`
      )
        .then((res) => res.json())
        .then((data) => setSelectedPatientQuery(data.data));

      fetch(
        `https://health-care-backend-joybarua0058-gmailcom.vercel.app/api/v1/prescription/${selectedPatient.id}`
      )
        .then((res) => res.json())
        .then((data) =>
          setSelectedPatientQuery((prev) => ({
            ...prev,
            prescription: data?.data?.content,
          }))
        );
    }
  }, [selectedPatient]);

  useEffect(() => {
    fetch(
      `https://health-care-backend-joybarua0058-gmailcom.vercel.app/api/v1/patient`
    )
      .then((res) => res.json())
      .then((data) => setPatients(data?.data));
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded -mt-40 shadow-lg w-full lg:w-3/5 xl:w-2/4">
        {selectedPatient ? (
          <>
            <div ref={prescriptionRef}>
              <h1 className="text-3xl font-bold mb-8 text-center text-primary">
                Patient Prescription
              </h1>
              <table className="w-full text-lg">
                <tbody>
                  <tr>
                    <td className="font-semibold">Name:</td>
                    <td>{selectedPatient.name}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Age:</td>
                    <td>{selectedPatient.age}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Phone Number:</td>
                    <td>{selectedPatient.phoneNumber}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Address:</td>
                    <td>{selectedPatient.address}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Previous Issues:</td>
                    <td>{selectedPatientQuery?.previousIssues?.join(", ")}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Current Issues:</td>
                    <td>{selectedPatientQuery?.currentIssues}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Sleep Mode:</td>
                    <td>{selectedPatientQuery?.sleepMode}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Depression:</td>
                    <td>{selectedPatientQuery?.depression?.join(", ")}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">OCD:</td>
                    <td>{selectedPatientQuery?.ocd?.join(", ")}</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-6 pb-6">
                <h2 className="text-xl font-semibold mb-4 text-primary">
                  Prescription
                </h2>
                <p className="text-gray-700 pb-4">
                  {selectedPatientQuery?.prescription}
                </p>
              </div>
            </div>

            <div className="w-full flex justify-center items-center mt-4">
              <button
                className="btn btn-primary"
                onClick={handleDownloadPDF}
                disabled={!selectedPatient}
              >
                Download PDF
              </button>

              <button
                className="btn btn-neutral ml-4"
                onClick={handlePrint}
                disabled={!selectedPatient}
              >
                Print Prescription
              </button>
            </div>
          </>
        ) : (
          <div>
            <h1 className="text-3xl font-bold mb-8 text-center text-primary">
              Patient Prescription
            </h1>
            <label className="block font-semibold mb-2">Select Patient:</label>
            {patients ? (
              <select
                className="input input-bordered input-primary w-full"
                onChange={(e) => handlePatientSelect(parseInt(e.target.value))}
              >
                <option value="">Select a patient</option>
                {patients.map((patient) => (
                  <option key={patient.id} value={patient.id}>
                    {patient.name}
                  </option>
                ))}
              </select>
            ) : (
              <div className="flex justify-center items-center">
                <span className="loading loading-spinner loading-lg"></span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PrescriptionPage;

PrescriptionPage.getLayout = function getLayout(page) {
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
