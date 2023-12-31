import RootLayout from "@/components/Layouts/RootLayout";
// import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const LoginPage = () => {
  const [role, setRole] = useState("patient");
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
    // signIn(role, { email: formData.email, password: formData.password });
  };

  const handleGoogleLogin = async () => {
    // const response = await signIn("google", {
    //   callbackUrl: "/",
    // });
    // if (response?.error) {
    //   console.error(response.error);
    // }
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
      {/* <p className="text-gray-600 my-2">Or</p>
      <div className="px-6 sm:px-0 max-w-sm">
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Sign in with Google
        </button>
      </div> */}
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
