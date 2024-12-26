import { useContext } from 'react'
import logo from '../assets/images/smalllogo.png'
import { AuthContext } from '../providers/AuthProvider'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)

  const links = (
    <>


    </>
  )

  
  return (
    <div className='navbar bg-base-100 shadow-sm lg:container px-4 mx-auto'>
      <div className='flex-1'>
        <Link to='/' className='flex gap-2 items-center'>
          <img className='w-auto h-7' src={logo} alt='logo' />
          <p className='font-bold hidden sm:block'>Bite Bank</p>
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal sm:px-1 font-bold'>
          <li>
            <NavLink   to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink   to='/foods'>AvailableFoods</NavLink>
          </li>

          {!user && (
            <li className='hidden sm:block'>
              <NavLink   to='/login'>Login</NavLink>
            </li>
          )}
          {!user && (
            <li >
              <NavLink   to='/registration'>Register</NavLink>
            </li>
          )}
        </ul>

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
  )
}

export default Navbar
