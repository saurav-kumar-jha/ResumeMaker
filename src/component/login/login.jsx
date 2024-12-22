import { useState } from "react";
import { Client, Account } from "appwrite";
import { NavLink, useNavigate } from "react-router-dom";

const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject("675c3dcb001c63355f2b");

const account = new Account(client);

export const Login = ()=>{
  const [email, setemail] = useState("")
  const [pass, setpass] = useState("")
  const [error, seterror] = useState("")
  const [loading, setloading] = useState(false)
  const handleLogin = async (e)=>{
    e.preventDefault()
    setloading(true)
    seterror("")
    try {
      const session = await account.createEmailPasswordSession(email, pass);
      console.log(session);
      setloading(false)
    } catch (error) {
      seterror(error)
    }
  }
  return (
    <>
    <div className="h-auto w-[100%] px-4 py-2 flex justify-left items-center bg-gray-100 text-[red] text-[18px] ">
            <NavLink to="/">home</NavLink>
         </div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-semibold text-center text-gray-700 mb-6">Login</h1>
          <form action="" onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-600 font-medium">Email:</label>
              <input type="email" id="name" value={email} onChange={(e)=> setemail(e.target.value)} placeholder="Enter your email" required className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
            </div>
  
            <div>
              <label htmlFor="pass" className="block text-gray-600 font-medium">Password:</label>
              <input type="password" id="pass" value={pass} onChange={(e)=> setpass(e.target.value)} placeholder="Enter password" required className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
            </div>
  
            <div>
              <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
  
}