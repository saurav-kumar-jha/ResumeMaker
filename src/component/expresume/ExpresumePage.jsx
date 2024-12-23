import { useState } from "react"
import { Profile } from "./profile"
import { Summary } from "./summary"
import { Experience } from "./jobExp"
import { Education } from "./education"
import { Skill } from "./skill"
import { NavLink } from "react-router-dom"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"


export const ExpInput = () => {
    const [info, setinfo] = useState({ name: '', email: '', mob: '', link: '' })
    const [summary, setsummary] = useState()
    const [exp, setexp] = useState([{ companyName: '', position: '', location: '', date: '', points: [''] }])
    const [education, seteducation] = useState([{ clg: '', year: '', course: '' }])
    const [skill, setskill] = useState([{ title: '', skill: '' }])
    const [show, setShow] = useState(false)
    const [loading, setloading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = { info, summary, exp, education, skill }
        console.log(data);
        setShow(true)
    }

    const generatePDF = async () => {
        setloading(true);

        const element = document.getElementById("resume-content");
        if (!element) return;

        // Define scaling options for better resolution
        const options = {
            scale: 3, // Adjust for higher resolution
            useCORS: true, // Fix cross-origin issues
        };

        try {
            // Convert HTML to canvas
            const canvas = await html2canvas(element, options);
            const imgData = canvas.toDataURL("image/png");

            // Define PDF configuration
            const pdf = new jsPDF("p", "mm", "a4");
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();

            // Scale the image dimensions to fit A4
            const imgWidth = pdfWidth;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            let heightLeft = imgHeight;
            let position = 0;

            // Add content across multiple pages if necessary
            while (heightLeft > 0) {
                pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
                heightLeft -= pdfHeight;
                position -= pdfHeight;

                if (heightLeft > 0) {
                    pdf.addPage();
                }
            }

            pdf.save("resume.pdf"); // Save the PDF
        } catch (error) {
            console.error("Error generating PDF:", error);
        } finally {
            setloading(false);
        }
    };
    return (
        <>

            <div className="h-auto w-[100%] px-4 py-2 flex justify-left items-center text-[red] text-[18px] ">
                <NavLink to="/" className="hover:text-blue-800" >home</NavLink>
                <NavLink to="/temp" className="hover:text-blue-800"  >/template</NavLink>
            </div>
            <section className="h-auto md:w-[65vw] w-[77vw] mx-auto shadow-2xl my-2 " >
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


            <section className={`${show ? "block" : "hidden"}  `} >
                <h1 className="text-center text-5xl font-semibold my-3" >Here your generator PDF</h1>
                <p className="md:hidden block w-[90vw] mx-auto text-xl font-semibold text-red-500 ">{`Ignore this generated PDF view because it is sample. It is in A4 size when you download it..`} </p>

                <div className="h-auto  w-[80vw] md:w-[680px] p-[20px] mx-auto html2pdf__page-break " id="resume-content">
                    <h1 className="text-3xl font-bold text-center uppercase " >{info.name} </h1>
                    <div className="h-[2px] w-[90%] bg-gray-600 my-2 mx-auto "></div>

                    <div className="h-auto w-[95%] mx-auto text-base font-medium flex justify-evenly mt-[-5px]">
                        <p>+91 {info.mob} </p>
                        <p className="underline">{info.email} </p>
                        <p className="underline">{info.link} </p>
                    </div>

                    <div className="h-auto w-[95%] mx-auto my-2  ">
                        <h2 className="h-auto w-[100%] p-0 uppercase bg-[#add3f800] text-[23px] font-semibold text-center ">Summary</h2>
                        <p className="text-base ml-3 font-medium "> {summary} </p>
                    </div>

                    {/* Experience section here___________________________________ */}
                    <div className="h-auto w-[95%] mx-auto my-2 ">
                        <h2 className="h-auto w-[100%] p-0 uppercase bg-[#add3f800] text-2xl font-semibold text-center ">Profession Experience</h2>
                        {
                            exp.map((item, index) => (
                                <div key={index} className="h-auto w-[98%] mx-auto my-2 ">
                                    <p className="text-xl font-semibold" > {item.position.toUpperCase()}</p>
                                    <p className="text-base ml-1 font-semibold flex justify-between"><span>{item.companyName.charAt(0).toUpperCase() + item.companyName.slice(1).toLowerCase()} | {item.location} </span>{item.date} </p>
                                    <ol className="list-disc break-words ml-6 text-base font-medium ">
                                        {
                                            item.points.map((points, pointsIndex) => (
                                                <div key={pointsIndex}>
                                                    <li>{points} </li>
                                                </div>
                                            ))
                                        }
                                    </ol>
                                </div>
                            ))
                        }
                    </div>

                    {/* Education Detail here ____________________________________________________ */}

                    <div className="h-auto w-[95%] mx-auto my-2 ">
                        <h2 className="h-auto w-[100%] p-0 uppercase bg-[#add3f800] text-2xl font-semibold text-center ">Education Detail</h2>
                        {
                            education.map((item, index) => (
                                <div key={index} className="w-[98%] mx-auto text-base font-medium  my-1">
                                    <p className="flex justify-between">{item.clg.toUpperCase()}<span>{item.year} </span> </p>
                                    <p className="mt-[-8px] ml-2 ">{item.course.toUpperCase()} </p>
                                </div>
                            ))
                        }
                    </div>

                    {/* skill section here____________________________________________________ */}

                    <div className="h-auto w-[95%] mx-auto my-2 ">
                        <h2 className="h-auto w-[100%] p-0 uppercase bg-[#add3f800] text-2xl font-semibold text-center ">Skills</h2>
                        {
                            skill.map((item, index) => (
                                <div key={index}>
                                    <p className="text-base font-medium my-[-2px] ml-2 "><span className="text-lg font-semibold">{item.title.charAt(0).toUpperCase() + item.title.slice(1).toLowerCase()} :- </span> {item.skill} </p>

                                </div>
                            ))
                        }
                    </div>

                </div>
                <div className="h-auto w-[800px] mx-auto my-5 py-4 px-2 ">
                    <button className="h-auto w-auto bg-slate-400 rounded-full border-transparent text-black font-bold px-4 py-2 flex justify-center items-center hover:scale-105 duration-150 " onClick={generatePDF}>{loading ? "Generating PDF..." : "DOWNLOAD"} </button>
                </div>
            </section>
        </>
    )
}