import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";


export const Login = ()=>{
  const [email, setemail] = useState("")
  const [pass, setpass] = useState("")
  const [error, seterror] = useState("")
  const [loading, setloading] = useState(false)
  const handleLogin = (e)=>{
    e.preventDefault()
    
  }
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