import { IoLinkSharp } from "react-icons/io5"
import { LuDot } from "react-icons/lu"
import html2pdf from "html2pdf.js";

export const Resume = () => {

    const generatePDF = () => {
        const element = document.getElementById("resume-content");
    
        const options = {
        //   margin: 0.5, 
          filename: "resume.pdf", 
          html2canvas: { scale: 2 },
          jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
        };
    
        html2pdf().from(element).set(options).save(); 
      };


    return (
        <>
            <div className="h-[uto] w-[595px]  mx-auto px-3 py-4 " id="resume-content" >
                <div className="h-[auto] w-[100%] ">
                    <h1 className="font-bold text-3xl text-center uppercase ">SAURAV KUMAR JHA</h1>
                    <div className=" flex justify-evenly w-[auto] mx-auto text-[15px] font-normal  ">
                        <p>skjsaurav1@gmail.com  </p>
                        <p className="flex items-center ml-[-10px] "><LuDot className="text-2xl font-bold" /> +91 9934787172</p>
                        <a href="https://github.com/saurav-kumar-jha" className="flex items-center ml-[-5px] "><LuDot className="text-2xl font-bold " /> https://github.com/saurav-kumar-jha   </a>
                    </div>
                    <a className="text-center text-[16px] flex justify-center " href="link">https://www.linkedin.com/in/saurav-kumar-jha</a>
                </div>

                <hr className="h-[2px] w-[100%] bg-gray-500 my-2 " />

                <div className="h-[auto] w-[100%] ">
                    <h1 className="text-2xl uppercase font-semibold ">Technical Skills</h1>
                    <div className="ml-3 font-medium "><span className="font-bold mr-2">Frontend:</span> HTML, CSS, Taiwind CSS, Javascript, React JS</div>
                    <div className="ml-3 font-medium"><span className="font-bold mr-2">Backend:</span> SpringBoot, Java</div>
                    <div className="ml-3 font-medium"><span className="font-bold mr-2">Database:</span> PostgresSQL, MongoDB, SQL</div>
                    <div className="ml-3 font-medium"><span className="font-bold mr-2">Other Skills:</span> GIT, Github, Vercel, Docker, VS Code, Intellija Idea, AWS</div>
                </div>


                <hr className="h-[2px] w-[100%] bg-gray-500 my-2 " />

                <div className="h-auto w-[100%] ">
                    <h1 className="text-2xl uppercase font-semibold">Education Detail</h1>
                    <div className="h-auto w-[95%] mx-auto my-2 ">
                        <div className="w-[100%] flex justify-between items-center ">
                            <h2 className="text-lg font-semibold">Catalyst College, Patna</h2>
                            <h2 className="text-lg font-semibold">2023 - 2026</h2>
                        </div>
                        <h2 className="text-lg font-semibold ml-2">BCA</h2>
                    </div>
                    <div className="h-auto w-[95%] mx-auto my-1 ">
                        <div className="w-[100%] flex justify-between items-center ">
                            <h2 className="text-lg font-semibold">Lakshmishwar Academy, Madhubani</h2>
                            <h2 className="text-lg font-semibold">2021 - 2023</h2>
                        </div>
                        <h2 className="text-lg font-semibold ml-2">INTERMEDIATE</h2>
                    </div>
                    <div className="h-auto w-[95%] mx-auto my-1 ">
                        <div className="w-[100%] flex justify-between items-center ">
                            <h2 className="text-lg font-semibold">Lakshmishwar Academy, Madhubani</h2>
                            <h2 className="text-lg font-semibold">2019 - 2021</h2>
                        </div>
                        <h2 className="text-lg font-semibold ml-2">MATRICULATION</h2>
                    </div>

                </div>



                <hr className="h-[2px] w-[100%] bg-gray-500 my-2 " />
                <div className="h-auto w-[100%] ">
                    <h1 className="text-2xl uppercase font-semibold my-[-2px] ">Projects</h1>
                    <div className="w-[97%] h-auto mx-auto my-2 ">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-semibold flex items-center gap-2 ">Resume Maker <a href="https://resume-maker-five-omega.vercel.app/" className="h-auto w-fit text-xl mt-1 "><IoLinkSharp /></a> </h2>
                            <h2 className="text-lg font-semibold ">Dec 2024 - present</h2>
                        </div>
                        <div className="w-[95%] mx-auto ">
                            <ul>
                                <li className="flex items-center text-lg font-semibold"><LuDot /> Free to use.</li>
                                <li className="flex items-center text-lg font-semibold"><LuDot /> Easy and efficient.</li>
                                <li className="flex items-center text-lg font-semibold  "><LuDot /> Build a resume maker to make resume for fresher and experience.</li>
                            </ul>
                        </div>
                    </div>
                    <hr className="h-[2px] w-[100%] bg-gray-500 my-2 " />
                    <div className="w-[97%] h-auto mx-auto my-2">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-semibold flex items-center gap-2 ">Quiz App <a href="https://github.com/saurav-kumar-jha/Quiz-App" className="h-auto w-fit text-xl mt-1 "><IoLinkSharp /></a> </h2>
                            <h2 className="text-lg font-semibold ">Nov 2024 - present</h2>
                        </div>
                        <div className="w-[95%] mx-auto ">
                            <ul>
                                <li className="flex items-center text-lg font-semibold l"><LuDot /> Build a full stack quiz app which help many teacher to take exam online.</li>
                                <li className="flex items-center text-lg font-semibold"><LuDot /> Easy and efficient.</li>
                                <li className="flex items-center text-lg font-semibold  "><LuDot /> Build a resume maker to make resume for fresher and experience.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="h-[2px] w-[100%] bg-gray-500 my-2 " />
            </div>
            <button className="h-auto w-auto bg-slate-400 rounded-full border-transparent text-black font-semibold px-4 py-2 " onClick={generatePDF}>SUBMIT</button>
        </>
    )
}