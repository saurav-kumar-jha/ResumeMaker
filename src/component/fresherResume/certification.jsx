import { useState } from "react"
import { Star } from "./star"


export const Certificate = ({cer,setcer})=>{
    // const [cer, setcer] = useState([{name:'',org:'', year:''}])

    const handleinput = (index,e)=>{
        const {name, value} = e.target
        const updatedvalue = [...cer]
        updatedvalue[index][name] = value
        setcer(updatedvalue)
    }
    const handleAddMore = (e)=>{
        e.preventDefault()
        if(cer.length < 5){
            setcer([...cer,{name:'',org:'', year:''}])
        }else{
            alert("u can't add more!!")
        }
    }
    const handleRemove = (index,e)=>{
        e.preventDefault()
        const value = cer.filter((_,i)=> i !== index)
        setcer(value)
    }
    return(
        <>
         <div className="h-auto w-[95%] my-2 py-2 flex flex-col gap-2">
            <label className="text-2xl font-semibold mx-2">Certificate:<Star /></label>
            <div>
                {
                    cer.map((item,index)=>(
                        <div key={index} className="flex flex-col gap-2 mx-3">
                            <input type="text" className="h-[40px] w-[80%] md:w-[40%] px-3 py-2 border border-gray-500 outline-none hover:border-black font-semibold text-lg rounded" name="name" onChange={(e)=>handleinput(index,e)} value={item.name || ""}  placeholder="Certificate name"  required/>
                            <input type="text" className="h-[40px] w-[80%] md:w-[40%] px-3 py-2 border border-gray-500 outline-none hover:border-black font-semibold text-lg rounded" name="org" value={item.org || ""} onChange={(e)=>handleinput(index,e)} placeholder="Organization (eg: Udemy)"  required/>
                            <input type="text" className="h-[40px] w-[80%] md:w-[40%] px-3 py-2 border border-gray-500 outline-none hover:border-black font-semibold text-lg rounded" name="year" value={item.year || ""} onChange={(e)=>handleinput(index,e)} placeholder="Year (eg: 2021)"  required/>
                            <button className="h-auto w-fit px-3 py-2 bg-red-600 border border-transparent cursor-pointer font-bold rounded-lg text-white" onClick={(e) => handleRemove(index, e)} > Remove </button>
                            <hr className="h-[2px] w-[100%] bg-gray-400 rounded my-2 " />
                        </div>
                    ))
                }
            </div>
            <button className="h-auto w-fit px-3 py-2 bg-blue-600 border border-transparent cursor-pointer font-bold rounded-lg text-white ml-3" onClick={handleAddMore} > Add more </button>
         </div>
        </>
    )
}