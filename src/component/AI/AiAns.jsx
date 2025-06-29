import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { IoClose } from "react-icons/io5";

export const AIAns = ({ans})=>{
    const [show, setshow] = useState(false)
    const handleclose = (e)=>{
        e.preventDefault()
        setshow(!show)
    }

    return(
        <section className={`z-50 px-4 absolute top-[10vh] left-[15vw] backdrop-blur-lg bg-[#000000a8] text-white h-[80vh] w-auto min-w-[70vw] border border-black ${ !show ? "block" : "hidden"} `} >
            <div className="h-[30px] w-[30px] bg-transparent hover:bg-red-600 cursor-pointer flex justify-center items-center absolute right-0 top-0 " >
                <button onClick={handleclose} ><IoClose /></button> </div>
            <p className="absolute top-[35px] " >
            {ans}
            </p>

            <p>Please copy the text and paste to the field</p>
            
        </section>
    )
}