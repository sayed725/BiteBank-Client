import { useContext } from "react";
import logo from "../assets/images/smalllogo.png";
import { AuthContext } from "../providers/AuthProvider";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <li >
        <NavLink className={({ isActive }) =>
            isActive
              ? " active px-3 py-2 rounded-md bg-[#ebb475] text-white hover:text-black"
              : " px-3 py-2 bg-white hover:px-3 hover:py-2 hover:rounded-md hover:bg-[#ebb475] "
          }
         to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) =>
            isActive
              ? " active px-3 py-2 rounded-md bg-[#ebb475] text-white hover:text-black"
              : "bg-white px-3 py-2 hover:px-3 hover:py-2 hover:rounded-md hover:bg-[#ebb475] "
          }
         to="/foods">AvailableFoods</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) =>
            isActive
              ? " active px-3 py-2 rounded-md bg-[#ebb475] text-white hover:text-black"
              : "bg-white px-3 py-2 hover:px-3 hover:py-2 hover:rounded-md hover:bg-[#ebb475] "
          }
         to="/contact">Contact</NavLink>
      </li>

      {user && (
        <li>
          <NavLink className={({ isActive }) =>
            isActive
              ? " active px-3 py-2 rounded-md bg-[#ebb475] text-white hover:text-black"
              : "bg-white px-3 py-2 hover:px-3 hover:py-2 hover:rounded-md hover:bg-[#ebb475] "
          }
           to="/add-food">
            Add Food
          </NavLink>
        </li>
      )}

      {user && (
        <li>
          <NavLink className={({ isActive }) =>
            isActive
              ? " active px-3 py-2 rounded-md bg-[#ebb475] text-white hover:text-black"
              : "bg-white px-3 py-2 hover:px-3 hover:py-2 hover:rounded-md hover:bg-[#ebb475] "
          }
           to="/my-posted-food">ManageMyFood</NavLink>
        </li>
      )}

      {user && (
        <li>
          <NavLink className={({ isActive }) =>
            isActive
              ? " active px-3 py-2 rounded-md bg-[#ebb475] text-white hover:text-black"
              : "bg-white px-3 py-2 hover:px-3 hover:py-2 hover:rounded-md hover:bg-[#ebb475] "
          }
           to="/my-food-requests">My Food Request</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar sticky top-0 z-10 bg-white shadow-sm lg:container  mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className=" flex flex-col gap-4 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="flex gap-2 items-center">
          <img className="w-auto h-7" src={logo} alt="logo" />
          <p className="font-bold">Bite Bank</p>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="flex justify-between gap-4 text-sm ">{links}</ul>
      </div>

      <div className="navbar-end">
        <ul className="flex justify-between gap-2  text-sm">
          {!user && (
            <li>
              <NavLink className={({ isActive }) =>
            isActive
              ? " active px-3 py-2 rounded-md bg-[#ebb475] text-white hover:text-black"
              : "bg-white px-3 py-2 hover:px-3 hover:py-2 hover:rounded-md hover:bg-[#ebb475] "
          }
               to="/login">Login</NavLink>
            </li>
          )}
          {!user && (
            <li >
              <NavLink className={({ isActive }) =>
            isActive
              ? " active px-3 py-2 rounded-md bg-[#ebb475] text-white hover:text-black"
              : "bg-white px-3 py-2 hover:px-3 hover:py-2 hover:rounded-md hover:bg-[#ebb475] "
          }
               to="/registration">Register</NavLink>
            </li>
          )}
        </ul>

        {user && (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div title={user?.displayName} className="w-10 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile Photo"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold"
            >
              <li>{user && user?.displayName}</li>
              <li className="mt-2">
                <button
                  onClick={logOut}
                  className="bg-[#ebb475] text-white px-3 py-2 hover:bg-[#ebb475] hover:text-black block text-center"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
