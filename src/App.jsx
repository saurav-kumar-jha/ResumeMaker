import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Home } from './component/home'
import { Resume } from './component/resume'
import { Template } from './component/template'
import { Login } from './component/login/login'
import { Signup } from './component/login/signup'
import Prompt from './component/prompt'
import { TrailInput } from './component/input'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [{
      path: "/login",
      element: <Login />
    },
    {
      path:"/prompt",
      element:<Prompt/>
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
    path:"/form",
    element:<TrailInput/>
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
