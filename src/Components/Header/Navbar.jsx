import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>

      <nav className="flex justify-between items-center py-5 px-5 shadow-md">
          <div><img className="w-[150px] " src="/Logo.png" alt="" /></div>
        <ul className="flex gap-5  ">
          <li className="font-semibold">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A]  underline" : ""
              }
            >
              Home
            </NavLink>
          </li >
          <li className="font-semibold">
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A]  underline" : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li className="font-semibold">
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A]  underline" : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
