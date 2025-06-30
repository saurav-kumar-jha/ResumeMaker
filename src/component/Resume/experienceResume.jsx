import { useEffect, useRef, useState } from "react"
import { useReactToPrint } from "react-to-print"
import { useResume } from "../Context/resumeContext"
import { useNavigate } from "react-router-dom"


export const ExperienceResume = ({ resumeShow, info, about, links, skills, education, project, cer, achievements, languages, interests, references, section }) => {

    const [loading, setloading] = useState(false)
    const resume_content = useRef()
    const { isloggedIn } = useResume()
    const navigate = useNavigate()
    
    const printResume = useReactToPrint({
        contentRef:resume_content,
        documentTitle:`${info.name}`
    })

    const generatePDF = ()=>{
        if(!isloggedIn){
            navigate("/login")
            return;
        }
        printResume()
    }

    return (
        <>
            <div
                ref={resume_content}
                id="resume-content"
                className="w-full max-w-4xl mx-auto p-6 font-serif text-gray-900 bg-white"
            >
                {/* Header */}
                <div className="text-center">
                    <h1 className="text-3xl font-bold tracking-wide uppercase">{info.name}</h1>
                    <p className="text-sm mt-1">
                        +91 {info.mob} | {info.email} | {info.address} |{" "}
                        {links.map((l, i) => (
                            <a key={i} className="text-blue-700 underline" href={l.url}>
                                {l.plateform}
                            </a>
                        ))}
                    </p>
                </div>

                {/* Summary */}
                {section.About && (
                    <div className="mt-6">
                        <div className="bg-blue-100 px-2 py-1 mb-1">
                            <h2 className="uppercase font-bold tracking-wide text-sm">Summary</h2>
                        </div>
                        <p className="text-sm leading-relaxed">{about}</p>
                    </div>
                )}

                {/* Experience / Projects */}
                {section.Project && (
                    <div className="mt-6">
                        <div className="bg-blue-100 px-2 py-1 mb-1">
                            <h2 className="uppercase font-bold tracking-wide text-sm">Professional Experience</h2>
                        </div>
                        <div className="space-y-4">
                            {project.map((item, index) => (
                                <div key={index}>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="font-semibold text-sm">{item.name}</p>
                                            <p className="italic text-xs text-gray-600">{item.link}</p>
                                        </div>
                                        <p className="text-xs font-medium whitespace-nowrap">{item.year}</p>
                                    </div>
                                    <ul className="list-disc ml-6 mt-1 text-sm space-y-1">
                                        {item.points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Education */}
                {section.Education && (
                    <div className="mt-6">
                        <div className="bg-blue-100 px-2 py-1 mb-1">
                            <h2 className="uppercase font-bold tracking-wide text-sm">Education</h2>
                        </div>
                        {education.map((item, index) => (
                            <div key={index} className="flex justify-between items-start mb-2">
                                <div>
                                    <p className="font-semibold text-sm">{item.clg}</p>
                                    <p className="text-sm italic text-gray-700">{item.title}</p>
                                </div>
                                <p className="text-xs font-medium whitespace-nowrap">{item.year}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Skills */}
                {section.Skills && (
                    <div className="mt-6">
                        <div className="bg-blue-100 px-2 py-1 mb-1">
                            <h2 className="uppercase font-bold tracking-wide text-sm">Skills</h2>
                        </div>
                        <div className="text-sm space-y-1">
                            {skills.map((item, i) => (
                                <div key={i}>
                                    <span className="font-bold">{item.title}:</span> {item.skill}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Languages */}
                {section.Language && languages.length > 0 && (
                    <div className="mt-6">
                        <div className="bg-blue-100 px-2 py-1 mb-1">
                            <h2 className="uppercase font-bold tracking-wide text-sm">Languages</h2>
                        </div>
                        <p className="text-sm">{languages.map((l) => l.name).join(", ")}</p>
                    </div>
                )}

                {/* Achievements */}
                {section.Achievement && achievements.length > 0 && (
                    <div className="mt-6">
                        <div className="bg-blue-100 px-2 py-1 mb-1">
                            <h2 className="uppercase font-bold tracking-wide text-sm">Awards</h2>
                        </div>
                        <ul className="list-disc ml-6 text-sm">
                            {achievements.map((item, i) => (
                                <li key={i}>{item.text}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <div className="h-auto w-[600px] mx-auto my-5 ">
                <button className="h-auto w-auto bg-slate-400 rounded-full border-transparent cursor-pointer text-black font-semibold md:m-0 ml-[5%] px-4 py-2 flex justify-center items-center " onClick={generatePDF}>{loading ? "Generating..." : "DOWNLOAD"} </button>
            </div>
        </>
    )
}