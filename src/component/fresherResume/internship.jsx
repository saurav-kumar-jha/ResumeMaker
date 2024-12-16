import { useState } from "react"
import {Star} from "./star"

export function Experience({Exp, setExp,checkbox }) {
    // const [exp, setexp] = useState([{ name: '', position: '', year: '', des: '' }])
    const handleInput = (index, e) => {
        const { name, value } = e.target
        const updatedvalue = [...Exp]
        updatedvalue[index][name] = value
        setExp(updatedvalue)
    }
    const handleAddMore = (e) => {
        e.preventDefault()
        if(Exp.length < 2){
            setExp([...Exp, { name: '', position: '', year: '', des: '' }])
        }else{
            alert("Not ")
        }
    }
    const handleRemove = (index, e) => {
        e.preventDefault()
        const value = Exp.filter((_, i) => i !== index)
        setExp(value)
    }
    return (
        <>
            <div className={`h-auto w-[95%] my-2 py-2 ${!checkbox? "flex" : "hidden"} flex-col gap-2`}>
                <label className="text-2xl font-semibold mx-2">Experience:<Star/> </label>
                <div className="flex flex-col my-2 gap-2">
                    {Exp.map((item, index) => (
                        <div key={index} className="flex flex-col gap-2 mx-3">
                            <input type="text" className="h-[40px] w-[60%] px-3 py-2 border border-gray-500 outline-none hover:border-black font-semibold text-lg rounded" name="name" value={item.name } onChange={(e) => handleInput(index, e)} placeholder="Company name" required />
                            <input type="text" className="h-[40px] w-[60%] px-3 py-2 border border-gray-500 outline-none hover:border-black font-semibold text-lg rounded" name="position" value={item.position } onChange={(e) => handleInput(index, e)} placeholder="eg: Web developer Intern" required />
                            <input type="text" className="h-[40px] w-[60%] px-3 py-2 border border-gray-500 outline-none hover:border-black font-semibold text-lg rounded" name="year" value={item.year } onChange={(e) => handleInput(index, e)} placeholder="eg: Oct 2023 - oct 2024" required />
                            <textarea type="text" className="h-[auto] w-[60%] px-3  py-2 border border-gray-500 outline-none hover:border-black font-semibold text-lg rounded" name="des" value={item.des } onChange={(e) => handleInput(index, e)} placeholder="Description" required />
                            <button className="h-auto w-fit px-3 py-2 bg-red-600 border border-transparent cursor-pointer font-bold rounded-lg text-white" onClick={(e) => handleRemove(index, e)}> Remove </button>
                            <hr className="h-[2px] w-[100%] bg-gray-400 rounded my-2 " />
                        </div>
                    ))}
                </div>
                <button className="h-auto w-fit px-3 py-2 bg-blue-600 border border-transparent cursor-pointer font-bold rounded-lg text-white ml-3" onClick={handleAddMore}> Add more </button>
            </div>
        </>
    )
}