import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { Client, Account, ID } from "appwrite";

const client = new Client()
    .setProject('675c3dcb001c63355f2b'); 

const account = new Account(client);

export const Signup = ()=>{
    const navigate = useNavigate()
    const [show, setshow] = useState(false)
    const [Show, setShow] = useState(false)
    const [email, setemail] = useState("")
    const [name, setname] = useState("")
    const [Pass, setPass] = useState("")
    const [pass, setpass] = useState("")
    const [cpass, setcpass] = useState("")
    const [error, seterror] = useState("")
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
        if(pass === cpass){
          setPass(pass)
        }else{
          alert("please enter same password")
        }
        setloading(true)
        try {
          const res = await account.create(ID,email,Pass)
          console.log(res);
          
        } catch (error) {
          seterror(error)
        }
    }
    return (
        <>
        <NavLink to="/">Home</NavLink>
          <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
              <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">Sign Up</h1>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-600 font-medium">Name:</label>
                  <input type="text" id="name" value={name} onChange={(e)=> setname(e.target.value)} placeholder="Enter name" required className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
                </div>
      
                <div>
                  <label htmlFor="email" className="block text-gray-600 font-medium">Email:</label>
                  <input type="email" id="email" value={email} onChange={(e)=> setemail(e.target.value)} placeholder="Enter your email" required className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
                </div>
      
                <div>
                  <label htmlFor="pass" className="block text-gray-600 font-medium">Password:</label>
                  <div className="mt-2 flex w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <input type={show?"text":"password"} id="pass" value={pass} onChange={(e)=> setpass(e.target.value)} placeholder="Enter password" required className="w-[80%] px-4 py-2 border border-transparent rounded-md shadow-sm font-semibold focus:outline-none"/><span onClick={handleshow} className="w-[20%] h-[100%] px-4 flex justify-end text-xl py-2 cursor-pointer ">{show?<FaEye />:<FaEyeSlash />}</span>
                  </div>
                </div>

                <div>
                  <label htmlFor="cpass" className="block text-gray-600 font-medium">Confirm Password:</label>
                  <div className="mt-2 w-full border flex border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 justify-between items-center focus:border-transparent">
                  <input type={Show?"text":"password"} id="cpass" value={cpass} onChange={(e)=> setcpass(e.target.value)} placeholder="Enter password" required className="w-[80%] px-4 py-2 border border-transparent rounded-md font-semibold shadow-sm focus:outline-none"/><span onClick={handleShow} className="w-[20%] h-[100%] px-4 flex justify-end text-xl py-2 cursor-pointer ">{Show?<FaEye />:<FaEyeSlash />}</span>
                  </div>
                </div>
      
                <div>
                  <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" onClick={handlesubmit}>Sign Up </button>
                </div>
              </form>
      
              <p className="text-center text-gray-600 mt-4">Already have an account? <span onClick={handlelogin} className="text-blue-500 cursor-pointer">Log in</span></p>
            </div>
          </div>
        </>
      );
      
}