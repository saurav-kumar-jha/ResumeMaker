import { Outlet, useLocation } from "react-router-dom"
import { Footer } from "./footer"
import { Hero } from "./hero"
import { Nav } from "./nav"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { TestAi } from "../AI/TestAi"

export const Home = ()=>{
  const navigate = useLocation()
    return(
        <>
          <section>
            <Nav/>
            {
               navigate.pathname == "/" ? <Hero/> :<Outlet/>
            }
            <Footer/> 
          </section>
        </>
    )
}