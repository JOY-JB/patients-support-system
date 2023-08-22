import RootLayout from "@/components/Layouts/RootLayout";
import { useState } from "react";

const PrimaryQuestionsPage = () => {
  const [patientData, setPatientData] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phoneNumber: "",
    address: "",
    previousIssues: [],
    previousConsultant: "",
    currentIssues: "",
    sleepMode: "",
    depression: [],
    ocd: [],
    recommendation: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const updatedArray = formData[name].includes(value)
        ? formData[name].filter((item) => item !== value)
        : [...formData[name], value];

      setFormData((prevData) => ({ ...prevData, [name]: updatedArray }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "number" ? parseInt(value) : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, age, phoneNumber, address, ...primaryQuestions } = formData;
    const data = { name, age, phoneNumber, address, doctorId: 1 };

    const patientCreate = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/patient/create-patient`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        return data;
      });

    const primaryQuestionsData = {
      receptionistId: 1,
      patientId: patientCreate?.data?.id,
      ...primaryQuestions,
    };

    fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/primaryQuestionForm/create-form`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(primaryQuestionsData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          window.alert("Primary Questions added successfully!");
        }
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-4">Primary Questions</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <label className="block">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="input input-bordered w-full"
            />
          </label>

          {/* Age */}
          <label className="block">
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="input input-bordered w-full"
            />
          </label>

          {/* Phone Number */}
          <label className="block">
            Phone Number:
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="input input-bordered w-full"
            />
          </label>

          {/* Address */}
          <label className="block">
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="input input-bordered w-full"
            />
          </label>

          {/* Previous Issues */}
          <label className="block">
            Previous Issues:
            <div className="space-y-2 ml-8">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="previousIssues"
                  value="anxiety"
                  checked={formData.previousIssues.includes("anxiety")}
                  onChange={handleInputChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Anxiety</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="previousIssues"
                  value="depression"
                  checked={formData.previousIssues.includes("depression")}
                  onChange={handleInputChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Depression</span>
              </label>
            </div>
          </label>

          {/* Current Issues */}
          <label className="block">
            Previous Consultant :
            <textarea
              name="previousConsultant"
              value={formData.previousConsultant}
              onChange={handleInputChange}
              className="input input-bordered w-full"
            />
          </label>

          {/* Current Issues */}
          <label className="block">
            Current Issues:
            <textarea
              name="currentIssues"
              value={formData.currentIssues}
              onChange={handleInputChange}
              className="input input-bordered w-full"
            />
          </label>

          {/* Sleep Mode */}
          <label className="block">
            Sleep Mode:
            <div className="space-y-2 ml-8">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="sleepMode"
                  value="good"
                  checked={formData.sleepMode === "good"}
                  onChange={handleInputChange}
                  className="form-radio"
                />
                <span className="ml-2">Good</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="sleepMode"
                  value="poor"
                  checked={formData.sleepMode === "poor"}
                  onChange={handleInputChange}
                  className="form-radio"
                />
                <span className="ml-2">Poor</span>
              </label>
            </div>
          </label>

          {/* Depression */}
          <label className="block">
            Depression:
            <div className="space-y-2 ml-8">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="depression"
                  value="unstable"
                  checked={formData.depression.includes("unstable")}
                  onChange={handleInputChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Unstable</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="depression"
                  value="irritated"
                  checked={formData.depression.includes("irritated")}
                  onChange={handleInputChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Irritated</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="depression"
                  value="fatigued"
                  checked={formData.depression.includes("fatigued")}
                  onChange={handleInputChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Fatigued</span>
              </label>
            </div>
          </label>

          {/* OCD */}
          <label className="block">
            OCD:
            <div className="space-y-2 ml-8">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="ocd"
                  value="extra-washing"
                  checked={formData.ocd.includes("extra-washing")}
                  onChange={handleInputChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Extra Washing</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="ocd"
                  value="order-obsession"
                  checked={formData.ocd.includes("order-obsession")}
                  onChange={handleInputChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Order Obsession</span>
              </label>
            </div>
          </label>

          {/* Recommendation */}
          <label className="block">
            Recommendation:
            <textarea
              name="recommendation"
              value={formData.recommendation}
              onChange={handleInputChange}
              className="input input-bordered w-full"
            />
          </label>

          <button type="submit" className="btn btn-primary w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PrimaryQuestionsPage;

PrimaryQuestionsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
