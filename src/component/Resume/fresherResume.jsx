import { useRef, useState } from "react"
import { useReactToPrint } from "react-to-print"


export const FresherResume = ({ resumeShow, info, about, links, skills, education, project, cer, achievements, languages, interests, references, section }) => {
    const [loading, setloading]= useState(false)
    const resume_content = useRef()

    const generatePDF = useReactToPrint({
        contentRef:resume_content,
        documentTitle:`${info.name}`
    })

    return (
        <>
            <div
                ref={resume_content}
                id="resume-content"
                className="w-full p-6 bg-white font-sans text-gray-800"
            >
                {/* Header */}
                <div className="flex justify-between items-start border-b border-gray-400 pb-4">
                    <div>
                        <h1 className="text-4xl font-bold">{info.name}</h1>
                        <p className="uppercase text-gray-600 text-sm font-medium">Graduate</p>
                    </div>
                    <div className="text-right text-sm leading-5 space-y-1">
                        <p>{info.email}</p>
                        <p>+91 {info.mob}</p>
                        {links.map((link, index) => (
                            <p key={index}>
                                <a href={link.url} className="text-blue-600 underline">
                                    {link.plateform}
                                </a>
                            </p>
                        ))}
                    </div>
                </div>

                {/* Summary */}
                {section.About && (
                    <div className="mt-6">
                        <h2 className="text-blue-600 font-bold uppercase text-sm tracking-wide mb-1">
                            Summary
                        </h2>
                        <p className="text-sm">{about}</p>
                    </div>
                )}

                {/* Skills */}
                {section.Skills && (
                    <div className="mt-6">
                        <h2 className="text-blue-600 font-bold uppercase text-sm tracking-wide mb-1">
                            Skills
                        </h2>
                        <div className="grid grid-cols-2 gap-y-2 text-sm">
                            {skills.map((skill, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <span className="font-medium">{skill.title}</span>
                                    <span className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <span
                                                key={i}
                                                className={`h-2 w-2 rounded-full ${i < (skill.level || 3) ? "bg-blue-600" : "bg-gray-300"
                                                    }`}
                                            />
                                        ))}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Experience / Projects */}
                {section.Project && (
                    <div className="mt-6">
                        <h2 className="text-blue-600 font-bold uppercase text-sm tracking-wide mb-1">
                            Experience
                        </h2>
                        {project.map((item, index) => (
                            <div key={index} className="mb-3">
                                <p className="font-semibold text-sm">{item.name}</p>
                                <p className="italic text-xs text-gray-600">
                                    {item.link ? item.link : ""} {item.year ? `· ${item.year}` : ""}
                                </p>
                                <ul className="list-disc ml-5 text-sm mt-1">
                                    {item.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}

                {/* Education */}
                {section.Education && (
                    <div className="mt-6">
                        <h2 className="text-blue-600 font-bold uppercase text-sm tracking-wide mb-1">
                            Education
                        </h2>
                        {education.map((item, index) => (
                            <div key={index} className="mb-2">
                                <p className="font-semibold text-sm">{item.title}</p>
                                <p className="text-sm text-gray-700">{item.clg}</p>
                                <p className="text-xs italic text-gray-600">{item.year}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Certificate */}
                {section.Certificate && (
                    <div className="mt-6">
                        <h2 className="text-blue-600 font-bold uppercase text-sm tracking-wide mb-1">
                            Certificates
                        </h2>
                        <ul className="list-disc ml-5 text-sm">
                            {cer.map((item, index) => (
                                <li key={index}>
                                    {item.name} — {item.org} ({item.year})
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Languages */}
                {section.Language && (
                    <div className="mt-6">
                        <h2 className="text-blue-600 font-bold uppercase text-sm tracking-wide mb-1">
                            Languages
                        </h2>
                        <div className="grid grid-cols-2 gap-y-2 text-sm">
                            {languages.map((item, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <span>{item.name}</span>
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <span
                                                key={i}
                                                className={`h-2 w-2 rounded-full ${i < 4 ? "bg-blue-600" : "bg-gray-300"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Achievements */}
                {section.Achievement && (
                    <div className="mt-6">
                        <h2 className="text-blue-600 font-bold uppercase text-sm tracking-wide mb-1">
                            Awards / Achievements
                        </h2>
                        <ul className="list-disc ml-5 text-sm">
                            {achievements.map((item, index) => (
                                <li key={index}>{item.text}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Interests */}
                {section.Interest && (
                    <div className="mt-6">
                        <h2 className="text-blue-600 font-bold uppercase text-sm tracking-wide mb-1">
                            Interests
                        </h2>
                        <p className="text-sm">{interests.map((i) => i.name).join(", ")}</p>
                    </div>
                )}

                {/* References */}
                {section.Refrence && (
                    <div className="mt-6">
                        <h2 className="text-blue-600 font-bold uppercase text-sm tracking-wide mb-1">
                            References
                        </h2>
                        {references.map((item, index) => (
                            <p key={index} className="text-sm">
                                {item.name} - {item.contact}
                            </p>
                        ))}
                    </div>
                )}
            </div>

            <div className="h-auto w-[600px] mx-auto my-5 ">
                <button className="h-auto w-auto bg-slate-400 rounded-full border-transparent text-black font-semibold md:m-0 ml-[5%] px-4 py-2 flex justify-center items-center " onClick={generatePDF}>{loading ? "Generating...":"DOWNLOAD"} </button>
            </div>
        </>
    )
}