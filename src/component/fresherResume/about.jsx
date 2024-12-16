import { Star } from "./star"


export const About = ({about, setabout})=>{

    const handleinputchange = (e)=>{
        setabout(e.target.value)
    }
    return(
        <>
         <div className="h-auto w-[95%] my-2 py-2 flex flex-col gap-2">
            <h1 className="text-2xl font-semibold mx-2 ">Summary:<Star/></h1>
            <textarea type="text" name="about" value={about} onChange={handleinputchange} placeholder="Enter summary" className="h-[auto] w-[60%] px-3 ml-5 py-2 border border-gray-500 outline-none hover:border-black font-semibold text-lg rounded" required/>
         </div>
        </>
    )
}