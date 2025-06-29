import Aos from "aos"
import { useEffect } from "react"
import {motion} from "motion/react"


export const Container = ({ para1, icon, para2 }) => {
    useEffect(()=>{
        const initAos = ()=>{
            Aos.init({
                once:false,
                easing:"ease-in-out"
            })
        }

        initAos()
    },[])
    return (
        <>
            <motion.div whileHover={{scale:1.08,transition:{duration:0.1}}} whileFocus={{scale:0.9}} className="min-h-[200px] mx-auto w-[60%] md:w-[30%] shadow-xl px-2 py-3 cursor-pointer hover:shadow-2xl " data-aos="fade-up-right" data-aos-duration="200"  >
                <h1 data-aos="fade-up" data-aos-duration="400" data-aos-delay="600" className="md:text-xl text-2xl font-extrabold md:font-bold text-left drop-shadow-2xl flex items-center gap-2 my-2">{para1}{icon}</h1>
                <h2 data-aos="fade-down" data-aos-duration="400" data-aos-delay="800" className="text-lg  text-left">{para2}</h2>
            </motion.div>
        </>
    )
}