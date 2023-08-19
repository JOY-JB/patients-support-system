import RootLayout from "@/components/Layouts/RootLayout";
import { useState } from "react";

const AddDoctor = () => {
  const [formData, setFormData] = useState({
    name: "",
    specialization: "",
    email: "",
    age: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddDoctor = () => {
    // Implement logic to add doctor using formData
    // This could involve making an API request to your backend
    // to save the new doctor's information
    console.log("Adding doctor:", formData);
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
          className="input input-bordered input-primary mb-4 w-full"
        />
        <input
          type="text"
          name="specialization"
          placeholder="Specialization"
          value={formData.specialization}
          onChange={handleInputChange}
          className="input input-bordered input-primary mb-4 w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="input input-bordered input-primary mb-4 w-full"
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleInputChange}
          className="input input-bordered input-primary mb-4 w-full"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          className="input input-bordered input-primary mb-4 w-full"
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
