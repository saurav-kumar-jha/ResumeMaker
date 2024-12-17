import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Home } from './component/home'
import { Login } from './component/login'
import { Signup } from './component/singup'
import { Resume } from './component/resume'
import { Template } from './component/template'
import { Fresher } from './component/fresher'
import { ExpResume } from './component/expresume/resume'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [{
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <Signup />
    },
    {
      path: "/resume",
      element: <Resume />
    },
  {
    path:"/temp",
    element:<Template/>
  },
  {
    path:"/fresher",
    element:<Fresher/>
  },
  {
    path:"/exp",
    element:<ExpResume/>
  }
]
  } 
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
