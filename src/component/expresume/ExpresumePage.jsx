import { useState } from "react"
import { Profile } from "./profile"
import { Summary } from "./summary"
import { Experience } from "./jobExp"
import { Education } from "./education"
import { Skill } from "./skill"
import { NavLink } from "react-router-dom"


export const ExpInput = () => {
    const [info, setinfo] = useState({ name: '', email: '', mob: '',link:'' })
    const [summary, setsummary] = useState()
    const [exp, setexp] = useState([{companyName:'', position:'',location:'',date:'',points:['']}])
    const [education, seteducation] = useState([{clg:'',year:'',course:''}])
    const [skill, setskill] = useState([{title:'', skill:''}])

    const handleSubmit = (e)=>{
        e.preventDefault()
        const data = {info, summary, exp, education, skill}
        console.log(data);
        
    }
    return (
        <>
            <NavLink to={"/temp"} className="text-[red] mx-5 " >Home/experience</NavLink>

            <section className="h-auto w-[65vw] mx-auto shadow-2xl my-2 " >
                <h1 className="text-6xl font-bold text-center textshadow">Fresher resume form</h1>
                <p className="text-2xl font-bold text-red-700 text-center">Fill of fields</p>

                <section className="h-auto w-[98%] mx-auto ">
                    <form className="h-[100%] w-[60vw] mx-auto py-3 " onSubmit={handleSubmit} >
                        <Profile info={info} setinfo={setinfo} />
                        <hr className="h-[3px] my-2 bg-black w-[100%] rounded " />

                        <Summary about={summary} setabout={setsummary} />
                        <hr className="h-[3px] my-2 bg-black w-[100%] rounded " />

                        <Experience exp={exp} setexp={setexp} />
                        <hr className="h-[3px] my-2 bg-black w-[100%] rounded " />

                        <Education education={education} seteducation={seteducation} />
                        <hr className="h-[3px] my-2 bg-black w-[100%] rounded " />

                        <Skill skill={skill} setskill={setskill} />

                        <button className="h-auto w-[80%] mx-auto px-3 py-2 bg-blue-400 hover:bg-blue-500 font-bold text-lg border border-transparent text-white rounded-lg ">SUBMIT</button>
                    </form>
                </section>
            </section>
        </>
    )
}