import RootLayout from "@/components/Layouts/RootLayout";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleGoogleSignIn = () => {
    signIn("google");
  };

  const handleRegistration = () => {
    // Implement user registration logic here
    // You can use formData to submit user registration data
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h1 className="text-3xl font-bold mb-4">Registration</h1>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
        className="input input-bordered input-primary mb-4 w-full max-w-sm"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
        className="input input-bordered input-primary mb-4 w-full max-w-sm"
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleInputChange}
        className="input input-bordered input-primary mb-4 w-full max-w-sm"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
        className="input input-bordered input-primary mb-4 w-full max-w-sm"
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleInputChange}
        className="input input-bordered input-primary mb-4 w-full max-w-sm"
      />
      <button
        className="btn btn-primary input-primary mt-4"
        onClick={handleRegistration}
      >
        Register
      </button>
      <p className="text-gray-600 my-2">Or</p>
      <div class="px-6 sm:px-0 max-w-sm">
        <button
          type="button"
          class="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
          onClick={handleGoogleSignIn}
        >
          <svg
            class="mr-2 -ml-1 w-4 h-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
          </svg>
          Sign up with Google<div></div>
        </button>
      </div>
      <p className="text-gray-600 mt-4">
        Already have a account?{" "}
        <Link href="/login" className="text-primary">
          Login here
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;

RegisterPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
