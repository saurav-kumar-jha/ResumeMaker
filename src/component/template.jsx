import { useNavigate } from "react-router-dom"


export const Template = () => {
    const navigate = useNavigate()
    const handlefresher = ()=>{
        navigate("/fresher")
    }
    return (
        <>
            <div>
                <h1 className="text-6xl font-bold text-center textshadow">Choose one template for your resume.</h1>
                <p className="text-xl text-red-600 font-medium mt-[15px] text-center ">Pick any one of them</p>
            </div>
            <div className="h-[auto] w-[90%] flex justify-around my-4 ">
                <div className="text-center h-[90%] w-[35%] mx-auto " onClick={handlefresher}>
                    <img src="/FresherResume1-EPEQXbIY.jpg" alt="" className="h-[100%] w-full cursor-pointer " />
                    <h4 className="text-2xl font-bold text-blue-600 ">Fresher Resume Template</h4>
                    <p className="text-base mt-[-5px] text-blue-400 ">No Experience No problem!</p>
                </div>
                <div className="text-center h-[90%] w-[38%]  ">
                    <img src="/ExpreinceResume1-CgXWjruW.png" alt="" className="h-[100%] w-full cursor-pointer " />
                    <h4 className="text-2xl font-bold text-blue-600 ">Experienced Template</h4>
                    <p className="text-base mt-[-5px] text-blue-400">Put your best foot forward with a professional resume template.</p>
                </div>
            </div>
        </>
    )
}