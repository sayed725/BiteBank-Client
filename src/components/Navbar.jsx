import { useContext } from "react";
import logo from "../assets/images/smalllogo.png";
import { AuthContext } from "../providers/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import Darkmode from "./Darkmode";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " active px-3 py-3 rounded-md bg-[#ebb475] font-semibold text-white dark:text-gray-900 hover:text-black hover:bg-[#ebb475] "
              : " px-3 py-3 bg-white dark:bg-[#1E1E1E] dark:text-gray-200 font-semibold hover:px-3 hover:py-3 hover:rounded-md hover:bg-[#ebb475] "
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " active px-3 py-3 rounded-md bg-[#ebb475] font-semibold text-white dark:text-gray-900 hover:text-black hover:bg-[#ebb475] "
              : " px-3 py-3 bg-white dark:bg-[#1E1E1E] dark:text-gray-200 font-semibold hover:px-3 hover:py-3 hover:rounded-md hover:bg-[#ebb475] "
          }
          to="/foods"
        >
          AvailableFoods
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " active px-3 py-3 rounded-md bg-[#ebb475] font-semibold text-white dark:text-gray-900 hover:text-black hover:bg-[#ebb475] "
              : " px-3 py-3 bg-white dark:bg-[#1E1E1E] dark:text-gray-200 font-semibold hover:px-3 hover:py-3 hover:rounded-md hover:bg-[#ebb475] "
          }
          to="/recipes"
        >
          Recipes
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " active px-3 py-3 rounded-md bg-[#ebb475] font-semibold text-white dark:text-gray-900 hover:text-black hover:bg-[#ebb475] "
              : " px-3 py-3 bg-white dark:bg-[#1E1E1E] dark:text-gray-200 font-semibold hover:px-3 hover:py-3 hover:rounded-md hover:bg-[#ebb475] "
          }
          to="/contact"
        >
          Contact Us
        </NavLink>
      </li>

      {user && (
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? " active px-3 py-3 rounded-md bg-[#ebb475] font-semibold text-white dark:text-gray-900 hover:text-black hover:bg-[#ebb475] "
                : " px-3 py-3 bg-white dark:bg-[#1E1E1E] dark:text-gray-200 font-semibold hover:px-3 hover:py-3 hover:rounded-md hover:bg-[#ebb475] "
            }
            to="/add-food"
          >
            Add Food
          </NavLink>
        </li>
      )}

      {user && (
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? " active px-3 py-3 rounded-md bg-[#ebb475] font-semibold text-white dark:text-gray-900 hover:text-black hover:bg-[#ebb475] "
                : " px-3 py-3 bg-white dark:bg-[#1E1E1E] dark:text-gray-200 font-semibold hover:px-3 hover:py-3 hover:rounded-md hover:bg-[#ebb475] "
            }
            to="/my-posted-food"
          >
            ManageMyFood
          </NavLink>
        </li>
      )}

      {user && (
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? " active px-3 py-3 rounded-md bg-[#ebb475] font-semibold text-white dark:text-gray-900 hover:text-black hover:bg-[#ebb475] "
                : " px-3 py-3 bg-white dark:bg-[#1E1E1E] dark:text-gray-200 font-semibold hover:px-3 hover:py-3 hover:rounded-md hover:bg-[#ebb475] "
            }
            to="/my-food-requests"
          >
            My Food Request
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="bg-white dark:bg-[#1E1E1E] sticky top-0 z-10">
      <div className="navbar  bg-white dark:bg-[#1E1E1E] lg:container  mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost dark:text-gray-200 lg:hidden border-2 border-[#ebb475] mr-2"
            >
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
              className=" flex flex-col dark:bg-[#1E1E1E] gap-7 dropdown-content bg-base-100 rounded-box z-[1] mt-3  w-52 px-2 py-5  shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="flex gap-2 items-center">
            <img className="w-auto h-7" src={logo} alt="logo" />
            <p className="font-bold dark:text-gray-200">Bite Bank</p>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="flex justify-between gap-3 text-sm">{links}</ul>
        </div>

        <div className="navbar-end">
          <ul className="flex justify-between items-center sm:gap-2  text-sm ">
            <Darkmode className=""></Darkmode>
            {!user && (
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? " active px-3 py-3 rounded-md bg-[#ebb475] font-semibold text-white dark:text-gray-900 hover:text-black hover:bg-[#ebb475] "
                      : " px-3 py-3 bg-white dark:bg-[#1E1E1E] dark:text-gray-200 font-semibold hover:px-3 hover:py-3 hover:rounded-md hover:bg-[#ebb475] "
                  }
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
            )}
            {!user && (
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? " active px-3 py-3 rounded-md bg-[#ebb475] font-semibold text-white dark:text-gray-900 hover:text-black hover:bg-[#ebb475] "
                      : " px-3 py-3 bg-white dark:bg-[#1E1E1E] dark:text-gray-200 font-semibold hover:px-3 hover:py-3 hover:rounded-md hover:bg-[#ebb475] "
                  }
                  to="/registration"
                >
                  Register
                </NavLink>
              </li>
            )}
          </ul>

          {user && (
            <div className="dropdown  dropdown-end z-50">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost hover:border-2 border-[#ebb475] hover:border-[#ebb475] btn-circle avatar"
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
                className="menu menu-sm dropdown-content mt-3 z-[1] dark:bg-[#1E1E1E] dark:text-gray-200  mx-auto shadow bg-base-100 rounded-box w-[250px] font-bold"
              >
                <div className="p-3">
                <li>{user && user?.displayName}</li>
                <li className="mt-2">{user && user?.email}</li>
                <li className="mt-2">
                  <button
                    onClick={logOut}
                    className="bg-[#ebb475] text-white px-3 py-2 dark:text-gray-700 hover:bg-[#ebb475] hover:text-black block text-center"
                  >
                    Logout
                  </button>
                </li>
                </div>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
