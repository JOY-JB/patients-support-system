import RootLayout from "@/components/Layouts/RootLayout";
import { useState } from "react";

const AddDoctor = () => {
  const [formData, setFormData] = useState({
    name: "",
    specialization: "",
    email: "",
    age: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    specialization: false,
    email: false,
    age: false,
    password: false,
    confirmPassword: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const processedValue = name === "age" ? parseInt(value) : value;

    setFormData((prevData) => ({ ...prevData, [name]: processedValue }));
  };

  const handleAddDoctor = () => {
    // Check for required fields and matching passwords
    const newFormErrors = {
      name: !formData.name,
      specialization: !formData.specialization,
      email: !formData.email,
      age: !formData.age,
      password: !formData.password,
      confirmPassword: formData.password !== formData.confirmPassword,
    };

    setFormErrors(newFormErrors);

    const { confirmPassword, ...filteredData } = formData;

    if (!Object.values(newFormErrors).some((error) => error)) {
      // console.log("Adding doctor:", filteredData);

      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/doctor/create-doctor`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(filteredData),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 200) {
            window.alert("Doctor added successfully!");
          }
        });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[73vh] bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-full lg:w-1/2 xl:w-1/3">
        <h1 className="text-3xl font-bold mb-6 text-center text-primary">
          Add a Doctor
        </h1>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          className={`input input-bordered input-primary mb-4 w-full ${
            formErrors.name ? "border-red-500" : ""
          }`}
        />
        <input
          type="text"
          name="specialization"
          placeholder="Specialization"
          value={formData.specialization}
          onChange={handleInputChange}
          className={`input input-bordered input-primary mb-4 w-full ${
            formErrors.specialization ? "border-red-500" : ""
          }`}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className={`input input-bordered input-primary mb-4 w-full ${
            formErrors.email ? "border-red-500" : ""
          }`}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleInputChange}
          className={`input input-bordered input-primary mb-4 w-full ${
            formErrors.age ? "border-red-500" : ""
          }`}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          className={`input input-bordered input-primary mb-4 w-full ${
            formErrors.password ? "border-red-500" : ""
          }`}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          className={`input input-bordered input-primary mb-4 w-full ${
            formErrors.confirmPassword ? "border-red-500" : ""
          }`}
        />
        <button className="btn btn-primary mt-4" onClick={handleAddDoctor}>
          Add Doctor
        </button>
      </div>
    </div>
  );
};

AddDoctor.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default AddDoctor;
