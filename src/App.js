import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'; 
import Course from './Component/Course/Course';
import Main from './Layout/Main';
import Home from './Component/Home/Home';
import Signup from './Component/Signup/Signup';
import Login from './Component/Login/Login'
import CourseDetails from './Component/CourseDetails/CourseDetails';
import Blog from './Component/Blog/Blog';
import Faq from './Component/Faq/Faq';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Category from './Component/Category/Category';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element:<Home></Home>
        },
        {
          path: '/course',
          element: <Course></Course>
        },
        {
          path: '/signup',
          element:<Signup></Signup>
        },
        {
          path: '/login',
          element:<Login></Login>
        },
        {
          path: '/course/:id',
          element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>,
          loader: async ({ params })=>{
            return fetch(`https://server-liard-chi.vercel.app/products/${params.id}`)
          }
        },
        {
          path: '/category/:gory',
          loader: ({ params }) => {
            return params;
          },
          element: <Category></Category>
        },

        {
          path: '/blog',
          element: <Blog></Blog>,
          loader: async () => {
            return fetch(`https://server-liard-chi.vercel.app/products/`)
          }
        },
        {
          path: '/faq',
          element: <Faq></Faq>
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
