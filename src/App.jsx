import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Home } from './component/home'
import { Login } from './component/login'
import { Signup } from './component/singup'
import { Resume } from './component/resume'

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
    }]
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
