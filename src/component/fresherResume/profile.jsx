import { Star } from "./star";


export const Profile = ({info,setinfo }) => {
    const handleinfochange = (e) => {
        const { name, value } = e.target
        setinfo((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }
    return (
        <>
            <div className="h-auto w-[95%] my-2 flex flex-col gap-2 py-2 ">
                <label className="text-2xl font-semibold mx-2 ">Personal Information:<Star/> </label>
                <input type="text" className="h-[40px] w-[80%] md:w-[40%] px-3 py-2 border border-gray-500 outline-none hover:border-black font-semibold text-lg rounded ml-5 " name="name" value={info.name} onChange={handleinfochange} placeholder="eg: John deo" required />
                <input type="email" className="h-[40px] w-[80%] md:w-[40%] px-3 py-2 border border-gray-500 outline-none hover:border-black font-semibold text-lg rounded ml-5 " name="email" value={info.email} onChange={handleinfochange} placeholder="eg: xyz@email.com" required />
                <input type="text" className="h-[40px] w-[80%] md:w-[40%] px-3 py-2 border border-gray-500 outline-none hover:border-black font-semibold text-lg rounded ml-5 " name="mob" value={info.mob} onChange={handleinfochange} placeholder="eg: 99******72" required />
            </div>
        </>
    )
}