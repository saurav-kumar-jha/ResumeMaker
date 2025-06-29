import { useRef, useState } from "react"
import { useReactToPrint } from "react-to-print"


export const MicrosoftResume = ({ resumeShow, info, about, links, skills, education, project, cer, achievements, languages, interests, references, section }) => {

    const [loading, setloading]= useState(false)
    const resume_content = useRef()

    const generatePDF = useReactToPrint({
        contentRef:resume_content,
        documentTitle:`${info.name}`
    })
    return (
        <>
            <div className="w-[100%] h-auto flex text-black font-sans" ref={resume_content} id="resume-content">
                {/* LEFT SIDEBAR */}
                <div className="w-[30%] bg-teal-700 text-white p-4 flex flex-col gap-6">
                    <div className="border-b border-white pb-3">
                        <h1 className="text-3xl font-bold">{info.name.split(' ')[0]}</h1>
                        <h1 className="text-3xl font-light">{info.name.split(' ')[1]}</h1>
                        <p className="mt-2 text-sm uppercase">{about.split(" ").slice(0, 6).join(" ")}...</p>
                    </div>

                    <div>
                        <h2 className="text-lg font-bold uppercase border-b border-white pb-1 mb-1">Contact</h2>
                        <p className="text-sm">{info.mob}</p>
                        <p className="text-sm">{info.email}</p>
                        {links.map((item, index) => (
                            <a key={index} href={item.url} className="text-sm underline block">{item.plateform}</a>
                        ))}
                    </div>

                    {section.Skills && (
                        <div>
                            <h2 className="text-lg font-bold uppercase border-b border-white pb-1 mb-1">Skills</h2>
                            <ul className="list-disc ml-5 text-sm">
                                {skills.map((item, index) => (
                                    <li key={index}>
                                        <span className="font-semibold">{item.title}:</span> {item.skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {section.Education && (
                        <div>
                            <h2 className="text-lg font-bold uppercase border-b border-white pb-1 mb-1">Education</h2>
                            {education.map((item, index) => (
                                <div key={index} className="mb-2 text-sm">
                                    <p className="font-semibold">{item.clg}</p>
                                    <p>{item.title}</p>
                                    <p>{item.year}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* RIGHT CONTENT */}
                <div className="w-[70%] bg-white p-6 flex flex-col gap-6">
                    {section.About && (
                        <div>
                            <h2 className="text-xl font-bold uppercase text-teal-700 mb-1">Profile</h2>
                            <p className="text-sm">{about}</p>
                        </div>
                    )}

                    {section.Project && (
                        <div>
                            <h2 className="text-xl font-bold uppercase text-teal-700 mb-1">Experience</h2>
                            {project.map((item, index) => (
                                <div key={index} className="mb-3">
                                    <div className="flex justify-between text-sm font-semibold">
                                        <p>{item.name}</p>
                                        <p>{item.year}</p>
                                    </div>
                                    <ul className="list-disc ml-6 text-sm">
                                        {item.points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    )}

                    {section.Certificate && (
                        <div>
                            <h2 className="text-xl font-bold uppercase text-teal-700 mb-1">Certificates</h2>
                            <ul className="list-disc ml-6 text-sm">
                                {cer.map((item, index) => (
                                    <li key={index}>
                                        <span className="font-semibold">{item.name}</span> | {item.org} - {item.year}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {section.Achievement && (
                        <div>
                            <h2 className="text-xl font-bold uppercase text-teal-700 mb-1">Achievements</h2>
                            <ul className="list-disc ml-6 text-sm">
                                {achievements.map((item, index) => (
                                    <li key={index}>{item.text}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {section.Language && (
                        <div>
                            <h2 className="text-xl font-bold uppercase text-teal-700 mb-1">Languages</h2>
                            <p className="text-sm">{languages.map((l) => l.name).join(', ')}</p>
                        </div>
                    )}

                    {section.Interest && (
                        <div>
                            <h2 className="text-xl font-bold uppercase text-teal-700 mb-1">Interests</h2>
                            <p className="text-sm">{interests.map((i) => i.name).join(', ')}</p>
                        </div>
                    )}

                    {section.Refrence && (
                        <div>
                            <h2 className="text-xl font-bold uppercase text-teal-700 mb-1">References</h2>
                            {references.map((ref, index) => (
                                <p key={index} className="text-sm">{ref.name} - {ref.contact}</p>
                            ))}
                        </div>
                    )}
                </div>
            </div>
             <div className="h-auto w-[600px] mx-auto my-5 ">
                <button className="h-auto w-auto bg-slate-400 rounded-full border-transparent text-black font-semibold md:m-0 ml-[5%] px-4 py-2 flex justify-center items-center " onClick={generatePDF}>{loading ? "Generating...":"DOWNLOAD"} </button>
            </div>
        </>
    )
}