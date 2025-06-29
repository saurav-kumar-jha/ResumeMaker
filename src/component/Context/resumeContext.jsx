import { createContext, useContext, useState } from "react";

const ResumeContext = createContext();

export const ResumeProvider = ({children})=>{
    const [resumeData, setResumeData]= useState(null)
    const [user, setUser] = useState({name:'',email:''})
    const [isloggedIn, setisLoggedIn] = useState(false)

    return(
        <ResumeContext.Provider value={{resumeData, setResumeData, user, setUser, isloggedIn, setisLoggedIn}} >
            {children}
        </ResumeContext.Provider>
    )
}

export const useResume = ()=> useContext(ResumeContext);