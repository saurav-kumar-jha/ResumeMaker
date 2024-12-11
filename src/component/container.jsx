

export const Container = ({para1, icon, para2})=> {
    return (
        <>
            <div className="h-[200px] w-[30%] shadow px-2 py-3 hover:shadow-xl cursor-pointer hover:scale-105 duration-200 transition-all ">
            <h1 className="text-xl font-bold text-left drop-shadow-2xl flex items-center gap-2 my-2">{para1}{icon}</h1>
            <h2 className="text-lg  text-left">{para2}</h2>
            </div>
        </>
    )
}