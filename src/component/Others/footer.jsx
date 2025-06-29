import { FcLike } from "react-icons/fc"


export const Footer = () => {
  return (
    <>
      <div className="md:h-[20vh] w-[100%] bg-[#23184b] text-white md:flex md:justify-center ">
        <div className="h-[100%] md:w-[30%] flex justify-center items-center ">
          <h1 className="text-3xl font-semibold">Resume builder</h1>
        </div>
        <div className="h-[100%] md:w-[30%] w-[80%] md:text-start  text-center mx-auto md:pt-4 px-4 ">
          <h1 className="md:text-2xl text-3xl font-semibold my-3">Follow us</h1>
          <div className="flex flex-col md:ml-4 mx-auto w-[50%] ">
            <a href="https://github.com/saurav-kumar-jha" target="_blank" className="text-lg font-medium hover:underline hover:text-blue-600">Github</a>
            <a href="#" className="text-lg font-medium hover:underline hover:text-blue-600">Instagram</a>
          </div>
        </div>
        <h1 className="flex h-[100%] md:w-[30%] justify-center items-center py-4 text-xl ">Made with &nbsp; <FcLike /> </h1>
      </div>
    </>
  )
}