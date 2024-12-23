import { Star } from "../fresherResume/star"


export const Education = ({ education, seteducation }) => {

    const handleinputchange = (index, e) => {
        const { name, value } = e.target
        const updatedEdu = [...education]
        updatedEdu[index][name] = value
        seteducation(updatedEdu)
    }
    const handleremove = (index,e)=>{
        e.preventDefault()
        const updatedEdu = education.filter((_,i)=> i !== index)
        seteducation(updatedEdu)

    }

    const handleAddmore = (e)=>{
        e.preventDefault()
        if(education.length < 3){
            seteducation([...education,{clg:'',year:'',course:''}])
        }else{
            alert("u can't add more ")
        }
    }

    return (
        <>
            <div className="h-auto w-[95%]  my-2 py-2 flex flex-col gap-2">
                <label className="text-2xl font-semibold mx-2 ">Education Details:<Star /> </label>
                <div className="flex flex-col gap-2 ml-3">
                    {
                        education.map((item, index) => (
                            <div key={index} className="flex flex-wrap gap-2 ml-3">
                                <input type="text" className="h-[40px] w-[80%] md:w-[40%] px-3 py-2 border border-gray-500 outline-none hover:border-black font-semibold text-lg rounded" placeholder="eg: College name" name="clg" value={item.clg} onChange={(e) => handleinputchange(index, e)} required />
                                <input type="text" className="h-[40px] w-[80%] md:w-[40%] px-3 py-2 border border-gray-500 outline-none hover:border-black font-semibold text-lg rounded" name="year" value={item.year} onChange={(e) => handleinputchange(index, e)} placeholder="eg: 2019-2022" required />
                                <input type="text" className="h-[40px] w-[80%] md:w-[40%] px-3 py-2 border border-gray-500 outline-none hover:border-black font-semibold text-lg rounded" name="course" value={item.course} onChange={(e) => handleinputchange(index, e)} placeholder="eg: BCA or INTERMEDIATE" required />
                                <button className="h-auto w-fit px-3 py-2 bg-red-600 border border-transparent cursor-pointer font-bold rounded-lg text-white " onClick={(e) => handleremove(index,e)}>Remove</button>
                                <hr className="h-[3px] my-2 bg-gray-500 w-[100%] rounded " />
                            </div>
                        ))
                    }

                    <button className="h-auto w-fit px-3 py-2 bg-blue-600 border border-transparent cursor-pointer font-bold rounded-lg text-white ml-3" onClick={handleAddmore}>Add more</button>
                </div>
            </div>
        </>
    )
}