import { Bs1Circle, Bs2Circle, Bs3Circle, Bs4Circle } from "react-icons/bs"
import { FcApproval, FcRating } from "react-icons/fc"
import { Container } from "./container"


export const Hero = () => {
    return (
        <>
            <section className="h-auto w-[100vw] ">
                <div className="h-[70vh] w-[100%] py-12 my-4 px-6 ">
                    <div className="w-[95%] h-[100%] mx-auto block md:flex">
                        <div className="w-[auto] py-6 mr-4 ">
                            <h1 className="text-6xl font-bold text-center textshadow">AI Resume builder</h1>
                            <h2 className="text-lg font-medium mt-[15px] text-center ">Create a standout resume with our intuitive builder! Choose from sleek templates, customize effortlessly, and impress employers. Elevate your job search and land your dream job today!</h2>
                            <div className="flex items-center w-[100%] justify-center h-[50%] mt-5">

                                <button className="button font-bold rounded-full text-xl ">Create resume</button>
                            </div>
                        </div>
                        <div className="w-[50%] h-[100%] ml-4  ">
                            <div className="h-[100%] rounded-2xl transition-all duration-300 back">
                                <img src="/Resume_Design_Templates_04-removebg-preview.png" alt="" className="h-[100%] object-cover transition-all w-full duration-300 " />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-auto w-[90%] mx-auto py-3  ">
                    <h1 className="text-7xl text-center textshadow font-bold">Resume Templates for Every Career Path</h1>
                    <h3 className="text-center text-lg font-semibold">You can pick one of our handcrafted resume templates above. Start building your resume in less than 5 seconds, using predefined sections approved by recruiters worldwide. Customize it to your own needs and personality and hit 'Download'. It's THAT easy to use, even if you've never made a resume before!</h3>
                    <div className="h-[84vh] w-[90%] flex justify-around my-4 ">
                        <div className="text-center h-[90%] w-[35%] mx-auto   ">
                            <img src="/FresherResume1-EPEQXbIY.jpg" alt="" className="h-[100%] w-full cursor-pointer " />
                            <h4 className="text-2xl font-bold text-blue-600 ">Fresher Resume Template</h4>
                            <p className="text-base mt-[-5px] text-blue-400 ">No Experience No problem!</p>
                        </div>
                        <div className="text-center h-[90%] w-[38%]  ">
                            <img src="/ExpreinceResume1-CgXWjruW.png" alt="" className="h-[100%] w-full cursor-pointer " />
                            <h4 className="text-2xl font-bold text-blue-600 ">Experienced Template</h4>
                            <p className="text-base mt-[-5px] text-blue-400">Put your best foot forward with a professional resume template.</p>
                        </div>
                    </div>
                </div>
                <div className="h-auto w-[100%] py-6 px-4  ">
                    <h1 className="text-7xl text-center textshadow font-bold">Build Resume Faster and Easy.</h1>
                    <h3 className="text-center text-lg font-semibold mt-6 ">Resume Builder is lightning fast. No software to download. No multi-part sign-up form. No long-winded tutorials. Just a straightforward process.</h3>


                    <div className="h-[100px] w-[90%] py-4 px-16 flex justify-center gap-3 items-center mx-auto mt-5 bg-slate-300 ">
                        <span className="text-7xl h-[100%] w-auto flex items-center "><Bs1Circle /></span>
                        <div>
                            <h1 className="text-3xl font-bold">Pick a Template</h1>
                            <h3 className="text-lg font-semibold ">Choose from our ATS-friendly, hand-crafted resume templates.</h3>
                        </div>
                    </div>

                    <div className="h-[auto] w-[90%] py-4 px-14 flex justify-center gap-3 items-center mx-auto mt-5 ">
                        <span className="text-7xl h-[100%] w-auto flex items-center "><Bs2Circle /></span>
                        <div>
                            <h1 className="text-3xl font-bold">Customize Your Layout</h1>
                            <h3 className="text-[16px] font-semibold ">Make the resume template truly your own. Customize the layout based on your experience level.</h3>
                        </div>
                    </div>

                    <div className="h-[auto] w-[90%] py-4 px-16 flex justify-center gap-3 items-center mx-auto mt-5 bg-slate-300 ">
                        <span className="text-7xl h-[100%] w-auto flex items-center "><Bs3Circle /></span>
                        <div>
                            <h1 className="text-3xl font-bold">Fill in the Blanks</h1>
                            <h3 className="text-[16px] font-semibold ">Fill in your resume information, let our AI content analyzer do its job, and see your resume changes dynamically in real time.</h3>
                        </div>
                    </div>

                    <div className="h-[auto] w-[90%] py-4 px-8 flex justify-center gap-3 items-center mx-auto mt-5 ">
                        <span className="text-7xl h-[100%] w-auto flex items-center "><Bs4Circle /></span>
                        <div>
                            <h1 className="text-3xl font-bold">Hit 'Download!'</h1>
                            <h3 className="text-[16px] font-semibold ">And yes, it's free! We don't hit you with a paywall once you've completed your resume. If you use any premium features, the software will let you know.</h3>
                        </div>
                    </div>
                </div>
                <div className="h-auto w-[100%] px-3 py-3 ">
                    <h1 className="text-7xl text-center textshadow font-bold" >Why us?</h1>
                    <div className="h-auto w-[85%] mx-auto flex flex-wrap gap-3 p-2 ">
                        <Container para1={"Free use"} para2="Create your resume at free of cost" icon={<FcRating />} />                    
                        <Container para1={"Creative and Professional Resume Templates"} para2="Whether it's a classic template or something more unique, we have what you need!"/>                    
                        <Container para1={"Edit Your Resume in Real Time"} para2="See changes to your resume instantly as you edit." />                    
                        <Container para1={"ATS-Friendly"} para2="Our templates are ATS-friendly, ensuring your resume gets noticed." />                    
                        <Container para1={"No Hidden Fees"} para2="No surprise charges. Know upfront if you're using any premium features." />                    
                        <Container para1={"Free to download"} para2="Download free without any fees." />                    
                    </div>
                </div>
            </section>
        </>
    )
}