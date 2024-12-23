import { Star } from "./star"


export const Social = ({ links, setlinks }) => {
    const handleInputChange = (index, event) => {
        const { name, value } = event.target
        const updatedLinks = [...links]
        updatedLinks[index][name] = value
        setlinks(updatedLinks)
    }
    const handleAddMore = (e) => {
        e.preventDefault()
        if(links.length < 3){

            setlinks([...links, { platform: '', url: '' }]);
        }else{
            alert("u can't add more!!")
        }
    };
    const handleRemove = (index) => {
        const updatedLinks = links.filter((_, i) => i !== index);
        setlinks(updatedLinks);
    };
    return (
        <>
            <div className="h-auto w-[95%]  my-2 py-2 flex flex-col gap-2">
                <label className="text-2xl font-semibold mx-2 ">Social links:<Star/> </label>
                <div className="md:flex flex-col gap-2 mx-2">
                    {links.map((item, index) => (
                        <div key={index} className="flex flex-wrap gap-2 ml-3">
                            <input type="text" name="platform" className="h-[40px] w-[80%] md:w-[40%] px-3 py-2 border border-gray-500 outline-none hover:border-black font-semibold text-lg rounded" placeholder="eg: Github" value={item.platform|| ""} onChange={(e) => handleInputChange(index, e)} required />
                            <input type="text" name="url" className="h-[40px] w-[80%] md:w-[40%] px-3 py-2 border border-gray-500 outline-none hover:border-black font-semibold text-lg rounded" placeholder="eg: https:/github.com/johndeo" value={item.url} onChange={(e) => handleInputChange(index, e)} required/>
                            <button className="h-auto w-fit my-1 px-3 py-2 bg-red-600 border border-transparent cursor-pointer font-bold rounded-lg text-white" onClick={() => handleRemove(index)} > Remove </button>

                        </div>
                    ))}
                </div>
                <div className="mx-2 ">
                    <button className="h-auto w-fit px-3 py-2 bg-blue-600 border border-transparent cursor-pointer font-bold rounded-lg text-white ml-3" onClick={handleAddMore}>Add more</button>
                </div>
            </div>
        </>
    )
}