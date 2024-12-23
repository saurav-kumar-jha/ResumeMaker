import { Star } from "../fresherResume/star"


export const Experience = ({ exp, setexp }) => {

    const handleInputChange = (index, e) => {
        const { name, value } = e.target;
        const updatedExp = [...exp];
        updatedExp[index][name] = value;
        setexp(updatedExp);
    };
    const handlePointsChange = (projectIndex, pointIndex, e) => {
        const { value } = e.target;
        const updatedProject = [...exp];
        updatedProject[projectIndex].points[pointIndex] = value;
        setexp(updatedProject);
      };

    const addPoint = (index,e)=>{
        e.preventDefault()
        const updatedExp = [...exp]
        if(updatedExp[index].points.length < 3){
            updatedExp[index].points.push('')
            setexp(updatedExp)
        }else{
            alert("u can't add more points")
        }
    }
    const handleAddMore = (e)=>{
        e.preventDefault()
        const updatedExp = [...exp]
        if(exp.length<3){
            setexp([...exp,{companyName:'', position:'',location:'',date:'',points:['']}])
        }else{
            alert("u can't add more")
        }
    }
    const handleRemove = (index,e)=>{
        e.preventDefault()
        const updatedExp = exp.filter((_,i)=> i !== index)
        setexp(updatedExp)
    }
    const removePoint = (projectIndex, pointIndex, e) => {
        e.preventDefault()
        const updatedProject = [...exp];
        updatedProject[projectIndex].points = updatedProject[projectIndex].points.filter(
            (_, i) => i !== pointIndex
        );
        setexp(updatedProject);
    };
    return (
        <>
            <div className="h-auto w-[95%] my-2 flex flex-col gap-2 py-2 ">
                <label className="text-2xl font-semibold mx-2">Experience:<Star /> </label>
                <div className="flex flex-col gap-2 ml-3">
                    {
                        exp.map((item, index) => (
                            <div key={index} className="flex flex-col ml-3">
                                <label className="text-lg font-semibold mb-[-2px] mt-1 ">Company Name:-</label>
                                <input type="text" name="companyName" value={item.companyName} onChange={(e) => handleInputChange(index, e)} placeholder="eg: Company-name" className="h-[40px] w-[80%] md:w-[40%] px-3 py-2 border border-gray-500 outline-none hover:border-black font-semibold text-lg rounded" required />

                                <label className="text-lg font-semibold mb-[-2px] mt-1 ">Job position:-</label>
                                <input type="text" name="position" value={item.position} onChange={(e) => handleInputChange(index, e)} placeholder="eg: Software-engineer" className="h-[40px] w-[80%] md:w-[40%] px-3 py-2 border border-gray-500 outline-none hover:border-black font-semibold text-lg rounded" required />

                                <label className="text-lg font-semibold mb-[-2px] mt-1 ">Job location:-</label>
                                <input type="text" name="location" value={item.location} onChange={(e) => handleInputChange(index, e)} placeholder="eg: Delhi" className="h-[40px] w-[80%] md:w-[40%] px-3 py-2 border border-gray-500 outline-none hover:border-black font-semibold text-lg rounded" required />

                                <label className="text-lg font-semibold mb-[-2px] mt-1 ">Period Date:-</label>
                                <input type="text" name="date" value={item.date} onChange={(e) => handleInputChange(index, e)} placeholder="eg: Dec 2022-Jan 2023" className="h-[40px] w-[80%] md:w-[40%] px-3 py-2 border border-gray-500 outline-none hover:border-black font-semibold text-lg rounded" required />

                                <div className="ml-3 mt-2">
                                    <label className="text-xl font-semibold">Key responsibilty:<Star /></label>
                                    <ul className="pl-6">
                                        {
                                            item.points.map((pitem, pindex) => (
                                                <li key={pindex} className="my-1">
                                                    <input type="text"  value={pitem} onChange={(e) => handlePointsChange(index, pindex, e)} className="h-[40px] w-[80%] md:w-[40%] px-3 py-2 border my-1 border-gray-500 outline-none hover:border-black font-semibold text-lg rounded" placeholder="Key responsibility" required />
                                                    <button className="px-2 py-1 ml-2 bg-red-600 text-white rounded" onClick={(e) => removePoint(index, pindex, e)} > Remove </button>

                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <button className="bg-blue-600 h-auto w-auto px-2 py-1 text-white font-semibold rounded-md ml-6 " onClick={(e) => addPoint(index,e)} > Add Point </button>
                                </div>

                                <button className="h-auto w-fit my-2 px-3 py-2 bg-red-600 border border-transparent cursor-pointer font-bold rounded-lg text-white" onClick={(e)=>handleRemove(index,e)}>Remove</button>
                                <hr className="h-[2px] bg-gray-500 w-[100%] rounded " />
                            </div>
                        ))
                    }
                    <button className="h-auto w-fit px-3 py-2 bg-blue-600 border border-transparent cursor-pointer font-bold rounded-lg text-white ml-3" onClick={handleAddMore} > Add more </button>
                </div>
            </div>
        </>
    )
}