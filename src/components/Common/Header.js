import Link from "next/link";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            {/* <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li> */}
            <li>
              <a>Doctor</a>
            </li>
            <li>
              <a>Patient</a>
            </li>
          </ul>
        </div>
        <Link href={"/"} className="btn btn-ghost normal-case text-xl">
          Health Care
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Admin Management</summary>
              <ul className="p-2 min-w-max bg-indigo-50">
                <li>
                  <Link href={"/primary-questions"}>doctor management</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href={"/primary-questions"}>Patient Query</Link>
          </li>
          <li>
            <Link href={"/patient-prescription"}>Patient Prescription</Link>
          </li>
          <li>
            <Link href={"/prescription-management"}>
              Prescription Management
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href={"/registration"} className="btn">
          Registration
        </Link>
      </div>
    </div>
  );
};

export default Header;
