import { FaCheckSquare, FaCog, FaFileAlt } from "react-icons/fa";

const WhatWeDo = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-bold mb-8 text-center">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceDescription
            icon={<FaCheckSquare className="text-4xl text-blue-500" />}
            title="Enhanced Healthcare"
            description="We provide a seamless platform for patients to connect with doctors, facilitating improved healthcare management and quick access to medical advice."
          />
          <ServiceDescription
            icon={<FaFileAlt className="text-4xl text-blue-500" />}
            title="Streamlined Prescriptions"
            description="Our system simplifies the prescription process, allowing doctors to create, manage, and share prescriptions with patients securely and efficiently."
          />
          <ServiceDescription
            icon={<FaCog className="text-4xl text-blue-500" />}
            title="Integrated Medical Records"
            description="Centralize patient medical records for easy access, enabling doctors to make well-informed decisions and provide personalized care."
          />
        </div>
      </div>
    </div>
  );
};

const ServiceDescription = ({ icon, title, description }) => {
  return (
    <div className="bg-blue-100 p-6 rounded-lg flex flex-col items-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default WhatWeDo;
