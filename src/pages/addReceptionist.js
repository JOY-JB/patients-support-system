import RootLayout from "@/components/Layouts/RootLayout";
import { useState } from "react";

const AddReceptionistPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    age: false,
    password: false,
    confirmPassword: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddReceptionist = () => {
    // Check for required fields
    const newFormErrors = {
      name: !formData.name,
      email: !formData.email,
      age: !formData.age,
      password: !formData.password,
      confirmPassword: formData.password !== formData.confirmPassword,
    };

    setFormErrors(newFormErrors);

    if (!Object.values(newFormErrors).some((error) => error)) {
      const processedData = { ...formData, age: parseInt(formData.age) };
      const { confirmPassword, ...data } = processedData;

      // console.log("Receptionist data:", data);

      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/receptionist/create-receptionist`,
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
          if (data.status === 200) {
            window.alert("Receptionist added successfully!");
          }
        });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h1 className="text-3xl font-bold mb-4">Add Receptionist</h1>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
        className={`input input-bordered input-primary mb-4 w-full max-w-sm ${
          formErrors.name ? "border-red-500" : ""
        }`}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
        className={`input input-bordered input-primary mb-4 w-full max-w-sm ${
          formErrors.email ? "border-red-500" : ""
        }`}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleInputChange}
        className={`input input-bordered input-primary mb-4 w-full max-w-sm ${
          formErrors.age ? "border-red-500" : ""
        }`}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
        className={`input input-bordered input-primary mb-4 w-full max-w-sm ${
          formErrors.password ? "border-red-500" : ""
        }`}
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleInputChange}
        className={`input input-bordered input-primary mb-4 w-full max-w-sm ${
          formErrors.confirmPassword ? "border-red-500" : ""
        }`}
      />
      <button
        className="btn btn-primary input-primary mt-4"
        onClick={handleAddReceptionist}
      >
        Add Receptionist
      </button>
    </div>
  );
};

AddReceptionistPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default AddReceptionistPage;
