import { Bs1Circle, Bs2Circle, Bs3Circle, Bs4Circle } from "react-icons/bs"
import { Container } from "./container"
import { useNavigate } from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"
import { Star_Ani } from "./Animation/star";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";


export const Hero = () => {
    const navigate = useNavigate()
    const handlecreate = () => {
        navigate("/prompt")
    }
    useEffect(() => {

        const initAos = () => {
            AOS.init({
                once: false,
                offset: 10
            })
        }
        initAos()
    }, [])
    return (
        <>
            <section className="h-auto w-[100vw] " data-aos="fade">
                <div className="md:h-[70vh] w-[100%] py-12 my-4 px-6 ">
                    <div className="w-[95%] h-[100%] mx-auto block md:flex items-center justify-between">
                        <div className="md:w-[50%] py-6 mr-4  ">
                            <h1 className="md:text-6xl text-4xl font-bold flex justify-center items-center textshadow" data-aos="fade-up">AI Resume builder</h1>
                            <h2 className="md:text-lg text-base font-medium mt-[15px] text-center ">Create a standout resume with our intuitive builder! Choose from sleek templates, customize effortlessly, and impress employers. Elevate your job search and land your dream job today!</h2>
                            <div className="flex items-center w-[100%] justify-center h-[50%] mt-5">
                                <button className="button font-bold rounded-full text-xl " data-aos="fade-up-right" data-aos-delay="1000" onClick={handlecreate} >Create resume</button>
                            </div>
                        </div>
                        <div className="md:w-[50%] md:block hidden w-full h-[100%] mx-auto md:ml-4 " data-aos="fade-up-left" data-aos-duration="400" data-aos-delay="400">
                            <div className="md:h-[100%] h-[70vh] w-[70%] md:w-[58%] cursor-pointer rounded-2xl transition-all duration-300 back hover:scale-105 hover:z-50 mx-auto ">
                                <img src="/Resume_Design_Templates_04-removebg-preview.png" alt="" className="h-[100%] mx-auto object-cover transition-all w-[90%] duration-300 " />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-auto  w-[95%] max-w-screen-xl mx-auto py-6 px-2 sm:px-4">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-center textshadow font-semibold md:font-bold" data-aos="fade-up" data-aos-duration="300" data-aos-delay="500" > Resume Templates for Every Career Path </h1>
                    <h3 className="text-center text-sm sm:text-base md:text-lg font-medium md:font-semibold mt-2" data-aos="fade-up-right" data-aos-duration="400" data-aos-delay="700" > You can pick one of our handcrafted resume templates above. Start building your resume in less than 5 seconds, using predefined sections approved by recruiters worldwide. Customize it to your own needs and personality and hit 'Download'. It's THAT easy to use, even if you've never made a resume before! </h3>

                    <Carousel   >
                        <CarouselContent className="h-[auto] my-2 w-full flex items-center justify-center gap-6 py-6">
                            <CarouselItem className=" w-full sm:w-[70%] md:w-[45%] lg:w-[30%] text-center md:basis-1/2 lg:basis-1/3 ">
                                <img src="/FresherResume1.jpg" alt="Fresher Template" className=" w-full object-cover rounded-lg" />
                                <h4 className="text-xl font-bold text-blue-600 mt-2">Fresher Resume Template</h4>
                                <p className="text-sm text-blue-400 mt-[-2px]">No Experience No problem!</p>
                            </CarouselItem>

                            <CarouselItem className="w-full sm:w-[70%] md:w-[45%] lg:w-[30%] text-center md:basis-1/2 lg:basis-1/3">
                                <img src="/ExpreinceResume1.png" alt="Experience Template" className="w-full object-cover rounded-lg" />
                                <h4 className="text-xl font-bold text-blue-600 mt-2">Experience Resume Template</h4>
                                <p className="text-sm text-blue-400 mt-[-2px]">Experience Required</p>
                            </CarouselItem>

                            <CarouselItem className="w-full sm:w-[70%] md:w-[45%] lg:w-[30%] text-center md:basis-1/2 lg:basis-1/3">
                                <img src="/color-block-resume-blue.webp" alt="Microsoft Template" className="w-full object-cover rounded-lg" />
                                <h4 className="text-xl font-bold text-blue-600 mt-2">Microsoft Resume Template</h4>
                            </CarouselItem>

                        </CarouselContent>
                        <CarouselPrevious className="cursor-pointer" />
                        <CarouselNext className="cursor-pointer" />
                    </Carousel>
                </div>

                <div className="h-auto w-[100%] py-6 px-4  ">
                    <h1 className="text-4xl md:text-7xl text-center textshadow font-semibold md:font-bold" data-aos="fade-up" data-aos-delay="300" data-aos-duration="300" >Build Resume Faster and Easy.</h1>
                    <h3 className="text-center text-base md:text-lg font-medium md:font-semibold mt-6 " data-aos="fade" data-aos-delay="400" data-aos-duration="200" >Resume Builder is lightning fast. No software to download. No multi-part sign-up form. No long-winded tutorials. Just a straightforward process.</h3>


                    <div className="h-[100px] w-[90%] py-4 px-16 flex justify-center gap-3 items-center mx-auto mt-5 hover:bg-slate-500 duration-200 bg-slate-400 cursor-pointer" data-aos="fade-right" data-aos-delay="500" data-aos-duration="400" >
                        <span className="md:text-7xl text-4xl h-[100%] w-auto flex items-center "><Bs1Circle /></span>
                        <div>
                            <h1 className="md:text-3xl text-2xl font-bold">Pick a Template</h1>
                            <h3 className="md:text-lg text-base font-semibold ">Choose from our ATS-friendly, hand-crafted resume templates.</h3>
                        </div>
                    </div>

                    <div className="h-[auto] w-[90%] py-4 px-14 flex justify-center hover:bg-slate-100 duration-200 gap-3 items-center mx-auto mt-5 cursor-pointer" data-aos="fade-left" data-aos-delay="500" data-aos-duration="400">
                        <span className="md:text-7xl text-4xl h-[100%] w-auto flex items-center "><Bs2Circle /></span>
                        <div>
                            <h1 className="md:text-3xl text-2xl font-bold">Customize Your Layout</h1>
                            <h3 className="md:text-lg text-base font-semibold ">Make the resume template truly your own. Customize the layout based on your experience level.</h3>
                        </div>
                    </div>

                    <div className="h-[auto] w-[90%] py-4 px-16 flex justify-center gap-3 items-center mx-auto mt-5 hover:bg-slate-500 duration-200 bg-slate-400 cursor-pointer" data-aos="fade-right" data-aos-delay="500" data-aos-duration="400">
                        <span className="md:text-7xl text-4xl h-[100%] w-auto flex items-center "><Bs3Circle /></span>
                        <div>
                            <h1 className="md:text-3xl text-2xl font-bold">Fill in the Blanks</h1>
                            <h3 className="md:text-lg text-base font-semibold ">Fill in your resume information, let our AI content analyzer do its job, and see your resume changes dynamically in real time.</h3>
                        </div>
                    </div>

                    <div className="h-[auto] w-[90%] py-4 px-8 flex justify-center hover:bg-slate-100 duration-200 gap-3 items-center mx-auto mt-5 cursor-pointer" data-aos="fade-left" data-aos-delay="500" data-aos-duration="400">
                        <span className="md:text-7xl text-4xl h-[100%] w-auto flex items-center "><Bs4Circle /></span>
                        <div>
                            <h1 className="md:text-3xl text-2xl font-bold">Hit 'Download!'</h1>
                            <h3 className="md:text-lg text-base font-semibold ">And yes, it's free! We don't hit you with a paywall once you've completed your resume. If you use any premium features, the software will let you know.</h3>
                        </div>
                    </div>
                </div>
                <div className="h-auto w-[100%] px-3 py-3 " data-aos="fade" data-aos-duratin="400" >
                    <h1 className="text-4xl md:text-7xl text-center textshadow font-semibold md:font-bold" data-aos="fade-down" data-aos-duration="400" data-aos-delay="400" >Why us?</h1>
                    <div className="h-auto w-[95%] md:w-[85%] mx-auto block md:flex md:flex-wrap gap-3 p-2 ">
                        <Container para1={"Free use"} para2="Create your resume at free of cost" icon={<Star_Ani />} />
                        <Container para1={"AI Resume"} para2="Create your resume with the help of AI and edit them." icon={<Star_Ani />} />
                        <Container para1={"Creative and Professional Resume Templates"} para2="Whether it's a classic template or create with the help of AI." />
                        <Container para1={"Edit Your Resume in Real Time"} para2="See changes to your resume instantly as you edit." />
                        <Container para1={"ATS-Friendly"} para2="Our templates are ATS-friendly, ensuring your resume gets noticed." />
                        <Container para1={"No Hidden Fees"} para2="No surprise charges. Know upfront if you're using any premium features." />
                    </div>
                </div>
            </section>
        </>
    )
}