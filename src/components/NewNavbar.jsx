
import { Link } from 'react-router-dom';
import logo from '../assets/images/smalllogo.png'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';


const NewNavbar = () => {

const { user, logOut } = useContext(AuthContext)

    const links = (
        <>
        <li><a>Item 1</a></li>
       
       <li><a>Item 3</a></li>
    
        </>
      )


    return (
        <div>
            <div className="navbar container mx-auto bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <Link to='/' className='flex gap-2 items-center'>
             <img className='w-auto h-7' src={logo} alt='logo' />
             <p className='font-bold hidden sm:block'>Bite Bank</p>
           </Link>
  </div>



  
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
     {user && (
              <div className='dropdown dropdown-end z-50'>
                <div
                  tabIndex={0}
                  role='button'
                  className='btn btn-ghost btn-circle avatar'
                >
                  <div title={user?.displayName} className='w-10 rounded-full'>
                    <img
                      referrerPolicy='no-referrer'
                      alt='User Profile Photo'
                      src={user?.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold'
                >
                  <li>
                    <NavLink to='/add-food' className='justify-between'>
                      Add a Food
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/my-posted-food'>ManageMyFood</NavLink>
                  </li>
                  <li>
                    <NavLink to='/my-food-requests'>My Food Request</NavLink>
                  </li>
                  <li className='mt-2'>
                    <button
                      onClick={logOut}
                      className='bg-gray-200 block text-center'
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
  </div>
</div>
        </div>
    );
};

export default NewNavbar;