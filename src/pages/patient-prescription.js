import RootLayout from "@/components/Layouts/RootLayout";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef, useState } from "react";

const PatientPrescriptionPage = () => {
  const prescriptionRef = useRef(null);

  const [patient, setPatient] = useState({
    name: "John Doe",
    age: 35,
    phoneNumber: "1234567890",
    address: "123 Main St, City",
    previousIssues: ["Anxiety", "Insomnia"],
    currentIssues: "Depression",
    sleepMode: "Trouble falling asleep",
    depression: ["Loss of interest", "Low energy"],
    ocd: ["Compulsive behavior"],
    prescription:
      "Medications: ABC Medication (1 tablet daily), XYZ Medication (2 tablets daily)\nDosage: Follow prescription instructions\nDuration: 2 weeks",
  });

  const handleDownloadPDF = async () => {
    const pdf = new jsPDF("p", "mm", "a4");
    const canvas = await html2canvas(prescriptionRef.current, {
      scale: 2,
    });

    const imgData = canvas.toDataURL("image/png");
    pdf.addImage(imgData, "PNG", 10, 20, 210, 120);

    pdf.save("patient_prescription.pdf");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded -mt-40 shadow-lg w-full lg:w-3/5 xl:w-2/4">
        <div ref={prescriptionRef}>
          <h1 className="text-3xl font-bold mb-8 text-center text-primary">
            Patient Prescription
          </h1>
          <table className="w-full text-lg">
            <tbody>
              <tr>
                <td className="font-semibold">Name:</td>
                <td>{patient.name}</td>
              </tr>
              <tr>
                <td className="font-semibold">Age:</td>
                <td>{patient.age}</td>
              </tr>
              <tr>
                <td className="font-semibold">Phone Number:</td>
                <td>{patient.phoneNumber}</td>
              </tr>
              <tr>
                <td className="font-semibold">Address:</td>
                <td>{patient.address}</td>
              </tr>
              <tr>
                <td className="font-semibold">Previous Issues:</td>
                <td>{patient.previousIssues.join(", ")}</td>
              </tr>
              <tr>
                <td className="font-semibold">Current Issues:</td>
                <td>{patient.currentIssues}</td>
              </tr>
              <tr>
                <td className="font-semibold">Sleep Mode:</td>
                <td>{patient.sleepMode}</td>
              </tr>
              <tr>
                <td className="font-semibold">Depression:</td>
                <td>{patient.depression.join(", ")}</td>
              </tr>
              <tr>
                <td className="font-semibold">OCD:</td>
                <td>{patient.ocd.join(", ")}</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-6 pb-6">
            <h2 className="text-xl font-semibold mb-4 text-primary">
              Prescription
            </h2>
            <p className="text-gray-700 pb-4">{patient.prescription}</p>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <button className="btn btn-primary" onClick={handleDownloadPDF}>
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientPrescriptionPage;

PatientPrescriptionPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
