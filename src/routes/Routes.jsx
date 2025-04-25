import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home'
import Login from '../pages/Authentication/Login'
import Register from '../pages/Authentication/Register'
import ErrorPage from '../pages/ErrorPage'
import PrivateRoute from './PrivateRoute'
import AvailableFoods from '../pages/AvailableFoods'
import AddFood from '../pages/AddFood'
import FoodDetails from '../pages/FoodDetails'
import MyFoodRequest from '../pages/MyFoodRequest'

import ManageMyFood from '../pages/ManageMyFood'
import UpdateFood from '../pages/UpdateFood'
import Contact from '../components/Contact'
import Recipes from '../pages/Recipes'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/foods',
        element: <AvailableFoods />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/registration',
        element: <Register />,
      },
      {
        path: '/food/:id',
        element: (
        
            <FoodDetails />
        
        ),
      },
      {
        path: '/update-food/:id',
        element: (
          <PrivateRoute>
            <UpdateFood />
          </PrivateRoute>
        ),
      },
      {
        path: '/add-food',
        element: (
          <PrivateRoute>
            <AddFood />
          </PrivateRoute>
        ),
      },
      {
        path: '/my-posted-food',
        element: (
          <PrivateRoute>
            <ManageMyFood />
          </PrivateRoute>
        ),
      },
      {
        path: '/my-food-requests',
        element: (
          <PrivateRoute>
            < MyFoodRequest/>
          </PrivateRoute>
        ),
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/recipes',
        element: <Recipes></Recipes>
      }
    ],
  },
])

export default router
