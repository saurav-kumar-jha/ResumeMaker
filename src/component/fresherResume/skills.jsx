import { useState } from "react"
import { Star } from "./star"


export const Skills = ({skills,setskills}) => {
    // const [skills, setskills] = useState([{ title: '', skill: '' }])
    const handleinputchange = (index,e)=>{
        const {name, value} = e.target
        const updatedSkill = [...skills]
        updatedSkill[index][name] = value
        setskills(updatedSkill)
    }
    const handleAddmore = (e)=>{
        e.preventDefault()
        if(skills.length < 5){
            setskills([...skills,{ title: '', skill: '' } ])
        }else{
            alert("u can't add more!!")
        }
    }
    const handleremove = (index,e)=>{
        e.preventDefault()
        const updatedSkill = skills.filter((_,i)=> i !== index)
        setskills(updatedSkill)
    }

    return (
        <>
            <div className="h-auto w-[95%]  my-2 py-2 flex flex-col gap-2">
                <label className="text-2xl font-semibold mx-2 ">Technical Skills:<Star/> </label>
                <div className="flex flex-col gap-2 ml-3">
                    {
                        skills.map((item, index) => (
                            <div key={index} className="flex flex-wrap gap-2 ml-3">
                                <input type="text" className="h-[40px] w-[40%] px-3 py-2 border border-gray-500 outline-none hover:border-black font-semibold text-lg rounded" placeholder="eg: Front-end" name="title" value={item.title} onChange={(e)=> handleinputchange(index,e)} required />
                                <input type="text" className="h-[40px] w-[40%] px-3 py-2 border border-gray-500 outline-none hover:border-black font-semibold text-lg rounded" name="skill" value={item.skill} onChange={(e)=> handleinputchange(index,e)} placeholder="eg: HTML,CSS,JS" required />
                                <button className="h-auto w-fit px-3 py-2 bg-red-600 border border-transparent cursor-pointer font-bold rounded-lg text-white " onClick={(e)=> handleremove(index,e)}>Remove</button>
                            </div>
                        ))
                    }

                    <button className="h-auto w-fit px-3 py-2 bg-blue-600 border border-transparent cursor-pointer font-bold rounded-lg text-white ml-3" onClick={handleAddmore}>Add more</button>
                </div>
            </div>
        </>
    )
}