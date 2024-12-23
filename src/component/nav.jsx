import { useNavigate } from "react-router-dom"

export const Nav = ()=>{
    const navigate = useNavigate()
    const handleSignup = ()=>{
        navigate("/signup")
    }
    const handlelogin = ()=>{
        navigate("/login")
    }
    const handleLogo = ()=>{
        navigate("/")
    }
    return(
        <>
        <nav className="h-[80px] w-[100vw] border flex items-center shadow-xl py-auto px-4 bg-[#e4dede83] ">
            <div className=" w-[80%] h-[90%] flex justify-between mx-auto items-center ">
                <div className="md:w-[60%] w-auto h-[100%] cursor-pointer" >
                    <img src="/logo2.png" alt="" onClick={handleLogo} className="h-[100%] scale-150 w-fit bg-transparent " />
                </div>
                <div className="md:w-[35%] w-[auto] h-[100%] flex justify-around md:gap-0 gap-2 items-center">
                    <button className="h-[atuo] w-auto px-6 py-1 bg-[#007bff] text-lg font-semibold rounded-full outline-none hover:scale-105 duration-150 text-white cursor-pointer shadow-2xl " onClick={handlelogin}>Login</button>
                    <button className="h-[atuo] w-auto px-6 py-1 bg-[#ffffff] text-lg font-semibold rounded-full outline-none hover:scale-105 duration-150 text-[#007bff] cursor-pointer shadow-2xl " onClick={handleSignup}>Sign up</button>
                </div>
            </div>
        </nav>
        </>
    )
}