import Image from "next/image";
import doctorImage from "../../assets/images/doctor.png";

const AboutUs = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image src={doctorImage} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Our Mission</h1>
          <p className="py-6">
            We are dedicated to revolutionizing the healthcare experience by
            connecting patients with top-tier medical professionals, enabling
            timely and personalized medical care. Our goal is to empower
            patients and doctors with a streamlined platform that ensures
            effective communication, reliable prescription management, and
            comprehensive medical record access.
          </p>
          <p className="mt-4 text-gray-600">
            Join us in our journey to reshape the healthcare landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
