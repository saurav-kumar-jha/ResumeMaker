import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth ,db} from "../firebase";
import { toast } from "react-toastify";


export const Login = ()=>{
  const [email, setemail] = useState("")
  const [pass, setpass] = useState("")
  const [loading, setloading] = useState(false)
  const navigate = useNavigate()
  const handleLogin = async (e)=>{
    e.preventDefault()
    setloading(true)
    try {
      await signInWithEmailAndPassword(auth, email, pass)
      setloading(false)
      toast.success("Logging successfully")
      setTimeout(() => {
        navigate("/") 
        
      }, 2000);
    } catch (error) {
      setloading(false)
      console.log(error.code);
      
      if (error.code === "auth/user-not-found") {
        toast.error("No user found with this email.");
      } else if (error.code === "auth/wrong-password") {
        toast.error("Incorrect password.");
      } else if (error.code === "auth/invalid-credential"){
        toast.error("You are not register")
        navigate("/signup")
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  }

  if(loading) return <h1>Loading...</h1>
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
              <input type="email" id="name" value={email} onChange={(e)=> setemail(e.target.value)} placeholder="Enter your email" required className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
            </div>
  
            <div>
              <label htmlFor="pass" className="block text-xl font-semibold">Password:</label>
              <input type="password" id="pass" value={pass} onChange={(e)=> setpass(e.target.value)} placeholder="Enter password" required className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
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