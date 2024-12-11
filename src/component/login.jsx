

export const Login = ()=>{
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-semibold text-center text-gray-700 mb-6">Login</h1>
          <form action="" className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-600 font-medium">Email:</label>
              <input type="email" id="name" placeholder="Enter your email" required className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
            </div>
  
            <div>
              <label htmlFor="pass" className="block text-gray-600 font-medium">Password:</label>
              <input type="password" id="pass" placeholder="Enter password" required className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
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