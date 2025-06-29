import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
// import { auth, db } from "./firebase"
import { doc, getDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { FaUser, FaUserCircle } from "react-icons/fa"
import axios from "axios"
import { useResume } from "../Context/resumeContext"
import { account } from "../AppWrite/appwriteConfig"


const API = import.meta.env.VITE_APP_API_URL
const TOKEN = localStorage.getItem("token")

export const Nav = () => {
    const [userDetail, setuserDetail] = useState(null)
    const navigate = useNavigate()
    const { user, isloggedIn, setUser, setisLoggedIn } = useResume()
    const handleSignup = () => {
        navigate("/signup")
    }
    const handlelogin = async () => {
        navigate("/login")       
    }
    const handleLogo = () => {
        navigate("/")
    }
    useEffect(()=>{
        const getUser = async()=>{
            try{
                const acc = await account.get();
                if(acc.status){
                    setisLoggedIn(true)
                    setTimeout(() => {                        
                        setUser({name:acc.name,email:acc.email})
                    }, 2000);
                }
            }catch(e){
                console.log(e);
            }
        }
        getUser()
    })
    const handlelogout = async () => {
        try {
            await account.deleteSessions()
            setuserDetail(null)
            setUser({name:'',email:''})
            setisLoggedIn(false)
        } catch (error) {
            console.log(error.message);
        }
    }
   

    return (
        <>
            <nav className="h-[80px] w-[100vw] flex items-center shadow-xl py-auto px-4 bg-[#e4dede83] ">
                <div className=" w-[80%] h-[90%] flex justify-between mx-auto items-center ">
                    <div className="md:w-[60%] w-auto h-[100%] cursor-pointer" >
                        <img src="logo2.png" alt="" onClick={handleLogo} className="h-[100%] scale-150 w-fit bg-transparent " />
                    </div>
                    {
                        isloggedIn ? (
                            <div className="md:w-[35%] w-[auto] h-[100%] flex justify-around md:gap-0 gap-2 items-center">
                                <p className="flex w-[fit] h-[100%] items-center  text-xl font-semibold "><span className="text-3xl mx-2 text-blue-500 cursor-pointer "><FaUserCircle /></span>{user.name.toUpperCase() || "User"} </p>
                                <div>
                                    <button onClick={handlelogout} className="h-[auto] w-auto px-6 py-1 bg-[#ff0015b6] text-lg font-semibold outline-none hover:scale-105 duration-150 ml-4 text-white cursor-pointer shadow-2xl  ">Logout</button>
                                </div>
                            </div>
                        ) : (
                            <div className="md:w-[35%] w-[auto] h-[100%] flex justify-around md:gap-0 gap-2 items-center">
                                <button className="h-[auto] w-auto px-6 py-1 bg-[#007bff] text-lg font-semibold rounded-full outline-none hover:scale-105 duration-150 text-white cursor-pointer shadow-2xl " onClick={handlelogin}>Login</button>
                                <button className="h-[auto] w-auto px-6 py-1 bg-[#ffffff] text-lg font-semibold rounded-full outline-none hover:scale-105 duration-150 text-[#007bff] cursor-pointer shadow-2xl " onClick={handleSignup}>Sign up</button>
                            </div>
                        )
                    }

                </div>
            </nav>
        </>
    )
}