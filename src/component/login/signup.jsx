import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { auth ,db} from "../firebase";
import {setDoc, doc} from "firebase/firestore"
import { toast } from "react-toastify";


export const Signup = ()=>{
    const navigate = useNavigate()
    const [show, setshow] = useState(false)
    const [Show, setShow] = useState(false)
    const [email, setemail] = useState("")
    const [name, setname] = useState("")
    const [pass, setpass] = useState("")
    const [cpass, setcpass] = useState("")
    const [loading, setloading] = useState(false)
    const handlelogin = ()=>{
        navigate("/login")
    }
    const handleshow = ()=>{
        setshow(!show)
    }
    const handleShow = ()=>{
        setShow(!Show)
    }
    const handlesubmit = async (e)=>{
        e.preventDefault()
        if(pass !== cpass){
          toast.error("Password doesn't match.")
          return;
        }


        setloading(true)
        try {
          await createUserWithEmailAndPassword(auth, email, pass)
          const user = auth.currentUser 
          if(user){
            await setDoc(doc(db,"Users", user.uid),{
              email:user.email,
              name:name,
              password:pass
            })
          }
          setname("")
          setemail("")
          setpass("")
          setcpass("")
          setloading(false) 
          toast.success("Loggin successfully")
          navigate("/")       
          
        } catch (error) {
          toast.error(error.message)
        }
        
    }
    if(loading) return <h1>Loading....</h1>
    return (
        <>
        <div className="h-auto w-[100%] px-4 py-2 flex justify-left bg-gray-100 items-center  text-[red] text-[18px] ">
            <NavLink to="/">home</NavLink>
         </div>
          <div className="flex justify-center items-center bg-gray-100 min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
              <h1 className="text-4xl font-bold text-center mb-6">Sign Up</h1>
              <form className="space-y-4" >
                <div>
                  <label htmlFor="name" className="block font-semibold text-xl">Name:</label>
                  <input type="text" id="name" value={name} onChange={(e)=> setname(e.target.value)} placeholder="Enter name" required className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
                </div>
      
                <div>
                  <label htmlFor="email" className="block font-semibold text-xl">Email:</label>
                  <input type="email" id="email" value={email} onChange={(e)=> setemail(e.target.value)} placeholder="Enter your email" required className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
                </div>
      
                <div>
                  <label htmlFor="pass" className="block font-semibold text-xl">Password:</label>
                  <div className="mt-2 flex w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <input type={show?"text":"password"} id="pass" value={pass} onChange={(e)=> setpass(e.target.value)} placeholder="Enter password" required className="w-[80%] px-4 py-2 border border-transparent rounded-md shadow-sm font-semibold focus:outline-none"/><span onClick={handleshow} className="w-[20%] h-[100%] px-4 flex justify-end text-xl py-2 cursor-pointer ">{show?<FaEye />:<FaEyeSlash />}</span>
                  </div>
                </div>

                <div>
                  <label htmlFor="cpass" className="block font-semibold text-xl">Confirm Password:</label>
                  <div className="mt-2 w-full border flex border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 justify-between items-center focus:border-transparent">
                  <input type={Show?"text":"password"} id="cpass" value={cpass} onChange={(e)=> setcpass(e.target.value)} placeholder="Enter password" required className="w-[80%] px-4 py-2 border border-transparent rounded-md font-semibold shadow-sm focus:outline-none"/><span onClick={handleShow} className="w-[20%] h-[100%] px-4 flex justify-end text-xl py-2 cursor-pointer ">{Show?<FaEye />:<FaEyeSlash />}</span>
                  </div>
                </div>
      
                <div>
                  <button type="submit" className="w-full bg-blue-500 text-white py-2 text-xl font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" onClick={handlesubmit}>Sign Up </button>
                </div>
              </form>
      
              <p className="text-center text-lg mt-4">Already have an account? <span onClick={handlelogin} className="text-blue-500 cursor-pointer">Log in</span></p>
            </div>
          </div>
        </>
      );
      
}