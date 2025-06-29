import { html2pdf } from "html2pdf.js";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

export const ShowResume = ({ resumeShow, info, about, links, skills, education, project, cer, achievements, languages, interests, references, section }) => {

    const [loading, setloading]= useState(false)
    const resume_content = useRef()

    const generatePDF = useReactToPrint({
        contentRef:resume_content,
        documentTitle:`${info.name}`
    })

    return (
        <>
            <div className={`h-[auto] w-[99%] p-2 mx-auto html2pdf__page-break`} ref={resume_content} id="resume-content" >
                <div className="h-[auto] w-[100%] ">
                    <h1 className="font-bold text-4xl text-center uppercase ">{info.name}</h1>
                    <p className="flex items-center justify-center w-[100%] text-center ml-[-10px] ">{info.email} | +91{info.mob}</p>
                    <div className="h-auto w-[100%]  flex justify-evenly ">
                        {links.map((item, index) => (
                            <div key={index}>
                                <a className="text-center text-[16px] text-blue-700 " title={item.plateform} href={item.url}>{item.plateform}</a>
                            </div>
                        ))}
                    </div>
                </div>
                <hr className="h-[2px] w-[100%] bg-gray-500 my-2 " />

                {section.About && (
                    <div className="h-[100%] w-[100%]">
                        <h1 className="text-2xl uppercase font-semibold">Summary:</h1>
                        <p className="text-lg ml-3 font-semibold">{about}</p>
                    </div>
                )}

                {section.Skills && (
                    <>
                        <hr className="h-[2px] w-[100%] bg-gray-500 my-2 " />
                        <div className="h-[auto] w-[100%]">
                            <h1 className="text-2xl uppercase font-semibold ">Technical Skills:</h1>
                            {skills.map((item, index) => (
                                <div key={index}>
                                    <div className="ml-3 font-medium "><span className="font-bold mr-2">{item.title.toUpperCase()}:</span>{item.skill}</div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {section.Education && (
                    <>
                        <hr className="h-[2px] w-[100%] bg-gray-500 my-2 " />
                        <div className="h-auto w-[100%]">
                            <h1 className="text-2xl uppercase font-semibold">Education Detail:</h1>
                            {education.map((item, index) => (
                                <div key={index} className="h-auto w-[95%] mx-auto my-2 ">
                                    <div className="w-[100%] flex justify-between items-center ">
                                        <h2 className="text-lg font-semibold">{item.clg.toUpperCase()}</h2>
                                        <h2 className="text-lg font-semibold">{item.year}</h2>
                                    </div>
                                    <h2 className="text-lg font-semibold ml-2">{item.title.toUpperCase()}</h2>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {section.Project && (
                    <>
                        <hr className="h-[2px] w-[100%] bg-gray-500 my-2 " />
                        <div className="h-auto w-[100%]">
                            <h1 className="text-2xl uppercase font-semibold my-[-2px]">Projects:</h1>
                            <div className="w-[97%] h-auto mx-auto my-2 ">
                                {project.map((item, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between items-center">
                                            <h2 className="text-lg font-semibold flex items-center gap-2 ">{item.name.toUpperCase()} <a href={item.link} className="h-auto w-fit text-xl mt-1 "></a></h2>
                                            <h2 className="text-lg font-semibold ">{item.year}</h2>
                                        </div>
                                        <div className="w-[95%] mx-auto ">
                                            <ol className="list-disc  pl-2 break-words whitespace-normal">
                                                {item.points.map((point, pointindex) => (
                                                    <li className="mb-1 " key={pointindex}> {point}</li>
                                                ))}
                                            </ol>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}

                {section.Certificate && (
                    <>
                        <hr className="h-[2px] w-[100%] bg-gray-500 my-2 " />
                        <div className="h-auto w-[100%]">
                            <h1 className="text-2xl uppercase font-semibold my-[auto]">Certificate:</h1>
                            <div className="w-[95%] mx-auto">
                                <ol className="list-disc pl-2 break-words whitespace-normal">
                                    {cer.map((item, index) => (
                                        <li key={index} className="w-[100%] text-lg font-semibold relative "><span>{item.name.toUpperCase()} | {item.org.toUpperCase()}</span><span className="absolute right-2 ">{item.year}</span></li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </>
                )}

                {section.Achievement && achievements.length > 0 && (
                    <>
                        <hr className="h-[2px] w-[100%] bg-gray-500 my-2 " />
                        <div className="h-auto w-[100%]">
                            <h1 className="text-2xl uppercase font-semibold">Achievements:</h1>
                            <ul className="list-disc pl-4">
                                {achievements.map((item, index) => (
                                    <li key={index} className="text-lg font-semibold">{item.text}</li>
                                ))}
                            </ul>
                        </div>
                    </>
                )}

                {section.Language && languages.length > 0 && (
                    <>
                        <hr className="h-[2px] w-[100%] bg-gray-500 my-2 " />
                        <div className="h-auto w-[100%]">
                            <h1 className="text-2xl uppercase font-semibold">Languages:</h1>
                            <p className="text-lg font-semibold ml-3">{languages.map((item) => item.name).join(', ')}</p>
                        </div>
                    </>
                )}

                {section.Interest && interests.length > 0 && (
                    <>
                        <hr className="h-[2px] w-[100%] bg-gray-500 my-2 " />
                        <div className="h-auto w-[100%]">
                            <h1 className="text-2xl uppercase font-semibold">Interests:</h1>
                            <p className="text-lg font-semibold ml-3">{interests.map((item) => item.name).join(', ')}</p>
                        </div>
                    </>
                )}

                {section.Refrence && references.length > 0 && (
                    <>
                        <hr className="h-[2px] w-[100%] bg-gray-500 my-2 " />
                        <div className="h-auto w-[100%]">
                            <h1 className="text-2xl uppercase font-semibold">References:</h1>
                            {references.map((item, index) => (
                                <div key={index} className="ml-3">
                                    <p className="text-lg font-semibold">{item.name} - {item.contact}</p>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
            <div className="h-auto w-[600px] mx-auto my-5 ">
                <button className="h-auto w-auto bg-slate-400 rounded-full border-transparent text-black font-semibold md:m-0 ml-[5%] px-4 py-2 flex justify-center items-center " onClick={generatePDF}>{loading ? "Generating...":"DOWNLOAD"} </button>
            </div>
        </>
    )
}