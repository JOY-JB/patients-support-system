import RootLayout from "@/components/Layouts/RootLayout";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const LoginPage = () => {
  const [role, setRole] = useState("patient"); // Default role is patient
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = () => {
    signIn(role, { email: formData.email, password: formData.password });
  };

  const handleGoogleSignIn = () => {
    signIn("google");
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <select
        name="role"
        value={role}
        onChange={handleRoleChange}
        className="input input-bordered input-primary mb-4 w-full max-w-sm"
      >
        <option value="doctor">Doctor</option>
        <option value="receptionist">Receptionist</option>
        <option value="admin">Admin</option>
      </select>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
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
      <button
        className="btn btn-primary input-primary mt-4"
        onClick={handleLogin}
      >
        Login
      </button>
      <p className="text-gray-600 my-2">Or</p>
      <div className="px-6 sm:px-0 max-w-sm">
        <button
          type="button"
          className="text-white w-full bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
          onClick={handleGoogleSignIn}
        >
          <svg
            className="mr-2 -ml-1 w-4 h-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            {/* Google icon */}
          </svg>
          Login with Google<div></div>
        </button>
      </div>
      <p className="text-gray-600 mt-4">
        Not registered yet?{" "}
        <Link href="/registration" className="text-primary">
          Register here
        </Link>
      </p>
    </div>
  );
};

LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default LoginPage;
