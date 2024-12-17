import { useEffect, useState } from "react"
import { Skills } from "./fresherResume/skills"
import { Education } from "./fresherResume/educationDetail"
import { Projects } from "./fresherResume/project"
import { Certificate } from "./fresherResume/certification"
import { Social } from "./fresherResume/social"
import { Profile } from "./fresherResume/profile"
import { IoLinkSharp } from "react-icons/io5"
import { About } from "./fresherResume/about"
import html2pdf from "html2pdf.js"
import { NavLink } from "react-router-dom"



export const Fresher = () => {
    const [links, setlinks] = useState([{ plateform: '', url: '' }])
    const [exp, setexp] = useState([{ name: '', position: '', year: '', des: '' }])
    const [cer, setcer] = useState([{ name: '', org: '', year: '' }])
    const [info, setinfo] = useState({ name: '', email: '', mob: '' })
    const [education, seteducation] = useState([{ clg: '', year: '', title: '' }])
    const [skills, setskills] = useState([{ title: '', skill: '' }])
    const [project, setProject] = useState([{ name: '', link: '', year: '', points: [''] }]);
    const [about, setabout] = useState("")
    const [show, setshow] = useState(false)
    const [checkbox, setcheckbox] = useState(false)
    const [loading, setloading] = useState(false)

    // useEffect(()=>{
    //     const fetchData = async ()=>{
    //         const res = await axios.get(data)
    //         console.log(res.data)
    //     }
    //     fetchData()
    // },[])

    // const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
    // const getTargetElement = () => document.getElementById('resume-content');
    // const option = {
    //     method:'open',
    //     page:{
    //         margin:Margin.MEDIUM,
    //         format:'A4',
    //         orientation:'portrait'
    //     },
    //     canvas: {
    //        qualityRatio: 5
    //     },
    // }

    const generatePDF = () => {
        setloading(true)
        const element = document.getElementById("resume-content");
        const options = {
            margin: [0, 1, 0.5, 1],
            filename: "resume.pdf",
            html2canvas: { scale: 5 },
            quality: 1,
            jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
        };
        // html2pdf().from(element).set(options).save(); 
        html2pdf().from(element).set(options).output('blob').then((blob) => {
            const pdfURL = URL.createObjectURL(blob);
            window.open(pdfURL, '_blank');
            setloading(false)
        })
    };


    const handlesubmit = (e) => {
        e.preventDefault()
        const data = { info, cer, education, exp, skills, project, links }
        // console.log(data);

        setshow(true)
        console.log(checkbox)
    }
    return (
        <>
         <NavLink to={"/"} className="text-[red] mx-5 " >Home/fresher</NavLink>
            <h1 className="text-6xl font-bold text-center textshadow">Fresher resume form</h1>
            <p className="text-2xl font-bold text-red-700 text-center">Fill of fields</p>
            <section className="h-auto w-[60vw] mx-auto shadow-2xl  ">
                <form className="h-[100%] w-[98%] mx-auto py-3 " onSubmit={handlesubmit}>

                    <Profile info={info} setinfo={setinfo} />

                    <hr className="h-[3px] my-2 bg-black w-[100%] rounded " />
                    <About about={about} setabout={setabout} />


                    <hr className="h-[3px] my-2 bg-black w-[100%] rounded " />
                    <Social links={links} setlinks={setlinks} />

                    <hr className="h-[3px] my-2 bg-black w-[100%] rounded " />
                    <Skills skills={skills} setskills={setskills} />

                    <hr className="h-[3px] my-2 bg-black w-[100%] rounded " />
                    <Education education={education} seteducation={seteducation} />

                    <hr className="h-[3px] my-2 bg-black w-[100%] rounded " />
                    <Projects project={project} setProject={setProject} />



                    {/* <hr className="h-[3px] my-2 bg-black w-[100%] rounded " />
                    <p className="font-medium text-sm mb-[-20px] ml-[30px] ">if u don't have any experience then remove the experience section.</p>
                    <Experience Exp={exp} setExp={setexp} checkbox={checkbox} /> */}

                    <hr className="h-[3px] my-2 bg-black w-[100%] rounded " />
                    <Certificate cer={cer} setcer={setcer} />

                    <button className="h-auto w-[80%] mx-auto px-3 py-2 bg-blue-400 hover:bg-blue-500 font-bold text-lg border border-transparent text-white rounded-lg ">SUBMIT</button>
                </form>
            </section>
            {/* Here is part of resume .......................................... */}

            
            <div className={`${show?"block":"hidden"}`} >
            <h1 className="text-center text-3xl font-semibold my-3" >Here your generator PDF</h1>
            <div className="w-[600px] h-auto border border-black mx-auto  px-3 py-2 " >
                <div className={`${show ? "block" : "hidden"} h-[auto] w-[99%]  mx-auto html2pdf__page-break `} id="resume-content" >
                    <div className="h-[auto] w-[100%] ">
                        <h1 className="font-bold text-4xl text-center uppercase ">{info.name} </h1>
                        <p className="flex items-center justify-center w-[100%] text-center ml-[-10px] ">{info.email} | +91{info.mob} </p>
                        <div className="h-auto w-[100%]  flex justify-evenly ">
                        {
                            links.map((item, index) => (
                                <div key={index}>                                    
                                        <a className="text-center text-[16px] text-blue-700 " title={item.plateform} href={item.url} >{item.url} </a>
                                    
                                </div>
                            ))
                        }
                        </div>
                    </div>
                    <hr className="h-[2px] w-[100%] bg-gray-500 my-2 " />


                    <div className="h-auto w-[100%] ">
                        <h1 className="text-2xl uppercase font-semibold">Summary:</h1>
                        <p className="text-lg ml-3 font-semibold">{about} </p>
                    </div>


                    <hr className="h-[2px] w-[100%] bg-gray-500 my-2 " />


                    <div className="h-[auto] w-[100%] ">
                        <h1 className="text-2xl uppercase font-semibold ">Technical Skills:</h1>
                        {
                            skills.map((item, index) => (
                                <div key={index}>
                                    <div className="ml-3 font-medium "><span className="font-bold mr-2">{item.title.toUpperCase()}: </span>{item.skill} </div>
                                </div>
                            ))
                        }
                    </div>
                    <hr className="h-[2px] w-[100%] bg-gray-500 my-2 " />

                    <div className="h-auto w-[100%] ">
                        <h1 className="text-2xl uppercase font-semibold">Education Detail:</h1>
                        {
                            education.map((item, index) => (
                                <div key={index} className="h-auto w-[95%] mx-auto my-2 ">
                                    <div className="w-[100%] flex justify-between items-center ">
                                        <h2 className="text-lg font-semibold">{item.clg.toUpperCase()} </h2>
                                        <h2 className="text-lg font-semibold">{item.year} </h2>
                                    </div>
                                    <h2 className="text-lg font-semibold ml-2">{item.title.toUpperCase()} </h2>
                                </div>
                            ))
                        }
                    </div>
                    <hr className="h-[2px] w-[100%] bg-gray-500 my-2 " />

                    <div className="h-auto w-[100%] ">
                        <h1 className="text-2xl uppercase font-semibold my-[-2px] ">Projects:</h1>
                        <div className="w-[97%] h-auto mx-auto my-2 ">
                            {
                                project.map((item, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between items-center">
                                            <h2 className="text-lg font-semibold flex items-center gap-2 ">{item.name.toUpperCase()} <a href={item.link} className="h-auto w-fit text-xl mt-1 "><IoLinkSharp /></a> </h2>
                                            <h2 className="text-lg font-semibold ">{item.year} </h2>
                                        </div>
                                        <div className="w-[95%] mx-auto ">
                                            <ol className="list-disc  pl-2 break-words whitespace-normal">
                                                {
                                                    item.points.map((point, pointindex) => (
                                                        <li className="mb-1 " key={pointindex}> {point}</li>
                                                    ))
                                                }
                                            </ol>
                                        </div>

                                    </div>
                                ))
                            }

                        </div>
                    </div>
                    <hr className="h-[2px] w-[100%] bg-gray-500 my-2 " />

                    {/* work experience....................................... */}



                    {/* <div className={`h-auto w-[100%] ${checkbox ? "hidden" : "block"} `} >
                    <h1 className="text-2xl uppercase font-semibold my-[-2px] ">Work experience:</h1>
                    {
                        exp.map((item, index) => (
                            <div key={index} className="w-[97%] h-auto mx-auto my-2 ">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-xl font-bold flex items-center gap-2 "> {item.position} |{item.name}</h2>
                                    <h2 className="text-lg font-semibold ">{item.year} </h2>
                                </div>
                                <div className="w-[95%] mx-auto ">
                                    <p className="text-[16px] font-semibold ">{item.des}</p>
                                </div>
                            </div>
                        ))
                    }

                    <hr className="h-[2px] w-[100%] bg-gray-500 my-2 " />
                </div> */}

                    {/* certification section ...................................... */}



                    <div className="h-auto w-[100%] ">
                        <h1 className="text-2xl uppercase font-semibold my-[auto] ">Certificate:</h1>
                        <div className="w-[95%] mx-auto  ">
                            <ol className="list-disc pl-2 break-words whitespace-normal">
                                {
                                    cer.map((item, index) => (
                                        <li key={index} className="w-[100%] text-lg font-semibold relative "> <span>{item.name.toUpperCase()} | {item.org.toUpperCase()} </span><span className="absolute right-2 ">{item.year}</span> </li>
                                    ))
                                }
                            </ol>
                        </div>

                    </div>

                </div>
            </div>
            {/* <Downbutton onClick={generatePDF} /> */}
            <div className="h-auto w-[600px] mx-auto my-5 ">

            <button className="h-auto w-auto bg-slate-400 rounded-full border-transparent text-black font-semibold px-4 py-2 flex justify-center items-center " onClick={generatePDF}>{loading ? "Generating PDF..." : "DOWNLOAD"} </button>
            </div>
            </div>
        </>
    )
}