import { NavLink, useNavigate } from "react-router-dom"


export const Template = () => {
    const navigate = useNavigate()
    const handlefresher = ()=>{
        navigate("/fresher")
    }
    const handleExp = ()=>{
        navigate("/exp")
    }
    return (
        <>
         <div className="h-auto w-[100%] px-4 py-2 flex justify-left items-center text-[red] text-[18px] ">
            <NavLink to="/">home</NavLink>
         </div>
            <div>
                <h1 className="text-6xl font-bold text-center textshadow">Choose one template for your resume.</h1>
                <p className="text-xl text-red-600 font-medium mt-[15px] text-center ">Pick any one of them</p>
            </div>
            <div className="h-[auto] md:w-[100%] w-[90%] md:flex justify-around my-4  ">
                <div className="text-center h-[90%] w-[80%] md:w-[35%] mx-auto " onClick={handlefresher}>
                    <img src="/FresherResume1-EPEQXbIY.jpg" alt="" className="h-[100%] w-full cursor-pointer " />
                    <h4 className="text-2xl font-bold text-blue-600 ">Fresher Resume Template</h4>
                    <p className="text-base mt-[-5px] text-blue-400 ">No Experience No problem!</p>
                </div>
                <hr className="md:hidden block h-[2px] w-[100%] ml-5 my-2 bg-gray-700 " />
                <div className="text-center h-[90%] w-[80%] mx-auto md:w-[38%]  " onClick={handleExp}>
                    <img src="/ExpreinceResume1-CgXWjruW.png" alt="" className="h-[100%] w-full cursor-pointer " />
                    <h4 className="text-2xl font-bold text-blue-600 ">Experienced Template</h4>
                    <p className="text-base mt-[-5px] text-blue-400">Put your best foot forward with a professional resume template.</p>
                </div>
            </div>
        </>
    )
}