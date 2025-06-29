import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { auth, db } from "./firebase"
import { doc, getDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { FaUser, FaUserCircle } from "react-icons/fa"
import axios from "axios"


const API = import.meta.env.VITE_APP_API_URL
const TOKEN = localStorage.getItem("token")

export const Nav = () => {
    const [userDetail, setuserDetail] = useState(null)
    const navigate = useNavigate()
    const handleSignup = () => {
        navigate("/signup")
    }
    const handlelogin = async () => {
        try {
            if (TOKEN != null) {
                const res = await axios.post(`${API}/valid-token`, {}, {
                    headers: {
                        "Authorization": `Bearer ${TOKEN}`,
                        "Content-Type":"application/json"
                    },
                    withCredentials:true
                })
                console.log(res.data)
            } else {
                navigate("/login")
            }
        } catch (error) {
            console.log(error.message);
            navigate("/login")
        }
       
    }
    const handleLogo = () => {
        navigate("/")
    }
    const handlelogout = async () => {
        try {
            await auth.signOut()
            setuserDetail(null)
            navigate("/")
        } catch (error) {
            console.log(error.message);
        }
    }
    // const fetchUserData = async () => {
    //     auth.onAuthStateChanged(async (user) => {
    //         console.log(user);
    //         const docRef = doc(db, "Users", user.uid)
    //         const docSnap = await getDoc(docRef)
    //         if ((docSnap).exists()) {
    //             setuserDetail((docSnap).data())

    //         } else {
    //             console.log("User not found..")
    //         }
    //     })
    // }
    // useEffect(() => {
    //     fetchUserData()
    // }, [])


    return (
        <>
            <nav className="h-[80px] w-[100vw] border flex items-center shadow-xl py-auto px-4 bg-[#e4dede83] ">
                <div className=" w-[80%] h-[90%] flex justify-between mx-auto items-center ">
                    <div className="md:w-[60%] w-auto h-[100%] cursor-pointer" >
                        <img src="logo2.png" alt="" onClick={handleLogo} className="h-[100%] scale-150 w-fit bg-transparent " />
                    </div>
                    {
                        userDetail ? (
                            <div className="md:w-[35%] w-[auto] h-[100%] flex justify-around md:gap-0 gap-2 items-center">
                                <p className="flex w-[fit] h-[100%] items-center  text-xl font-semibold "><span className="text-3xl mx-2 text-blue-500 cursor-pointer "><FaUserCircle /></span>{userDetail.name.toUpperCase()} </p>
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