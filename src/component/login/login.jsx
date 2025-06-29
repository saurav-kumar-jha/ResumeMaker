import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { toast } from "react-toastify";
import axios from "axios";
import { account } from "../AppWrite/appwriteConfig";
import { useResume } from "../Context/resumeContext";

const API = import.meta.env.VITE_APP_API_URL

export const Login = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState()
  const navigate = useNavigate()
  const { user, setUser, isloggedIn, setisLoggedIn } = useResume()


  const handleLogin = async (e) => {
    e.preventDefault()
    setloading(true)

    try {
      await account.createEmailPasswordSession(email, password)
      const acc = await account.get()

      
      if (acc.status) {
        setisLoggedIn(true)
        setemail('')
        setpassword('')
        navigate("/")
        setUser({name:acc.name, email:acc.email})
      } else {
        alert("Please check your detail")
      }
      setloading(false)
    } catch (err) {
      setloading(false)
    }
  }

  if (loading) return <h1>Loading...</h1>
  return (
    <>
      <div className="h-auto w-[100%] px-4 py-2 flex justify-left items-center bg-gray-100 text-[red] text-[18px] ">
        <NavLink to="/">home</NavLink>
      </div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-4xl font-extrabold text-center mb-6">Login</h1>
          <form action="" onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-xl font-semibold">Email:</label>
              <input type="email" id="name" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Enter your email" required className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>

            <div>
              <label htmlFor="pass" className="block text-xl font-semibold">Password:</label>
              <input type="password" id="password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="Enter password" required className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>

            <div>
              <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold text-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );

}