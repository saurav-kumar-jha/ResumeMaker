import { Outlet, useLocation } from "react-router-dom"
import { Footer } from "./footer"
import { Hero } from "./hero"
import { Nav } from "./nav"

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