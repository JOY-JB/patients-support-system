import RootLayout from "@/components/Layouts/RootLayout";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef, useState } from "react";

const PrescriptionPage = () => {
  const prescriptionRef = useRef(null);

  const [selectedPatient, setSelectedPatient] = useState(null);

  const patients = [
    // List of patients, you can fetch this data from an API or database
    // Example patient data:
    {
      id: 1,
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
    },
    // Add more patients as needed...
  ];

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
                    <td>{selectedPatient.previousIssues.join(", ")}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Current Issues:</td>
                    <td>{selectedPatient.currentIssues}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Sleep Mode:</td>
                    <td>{selectedPatient.sleepMode}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Depression:</td>
                    <td>{selectedPatient.depression.join(", ")}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">OCD:</td>
                    <td>{selectedPatient.ocd.join(", ")}</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-6 pb-6">
                <h2 className="text-xl font-semibold mb-4 text-primary">
                  Prescription
                </h2>
                <p className="text-gray-700 pb-4">
                  {selectedPatient.prescription}
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
          </div>
        )}
      </div>
    </div>
  );
};

PrescriptionPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default PrescriptionPage;
