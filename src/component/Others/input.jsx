import { NavLink, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, CircleCheckBig, SquarePlus } from "lucide-react";
import { Star_Ani } from "../Animation/star";
import TemplateSelector from "./TemplateSelector";
import { useResume } from "../Context/resumeContext";
import { MicrosoftResume } from "../Resume/microsoftResume";
import { FresherResume } from "../Resume/fresherResume";
import { ExperienceResume } from "../Resume/experienceResume";
import { ShowResume } from "./ShowResume";


export const TrailInput = () => {
    const { resumeData } = useResume()
    const [info, setinfo] = useState({ name: '', email: '', mob: '' })
    const [about, setabout] = useState("")
    const [links, setlinks] = useState([{ plateform: '', url: '' }])
    const [skills, setskills] = useState([{ title: '', skill: '' }])
    const [education, seteducation] = useState([{ clg: '', year: '', title: '' }])
    const [project, setProject] = useState([{ name: '', link: '', year: '', points: [''] }]);
    const [cer, setcer] = useState([{ name: '', org: '', year: '' }])
    const [achievements, setAchievements] = useState([{ text: "" }]);
    const [languages, setLanguages] = useState([{ name: "" }]);
    const [interests, setInterests] = useState([{ name: "" }]);
    const [references, setReferences] = useState([{ name: "", contact: "" }]);
    const [show, setshow] = useState(false)
    const [resumeShow, setresumeShow] = useState(false)
    const [sections, setSections] = useState({ Profile: true, About: true, SocialLinks: true, Skills: true, Education: true, Project: false, Certificate: false, Achievement: false, Language: false, Interest: false, Refrence: false, });
    const [templateId, setTemplateId] = useState("");
    const { isloggedIn } = useResume()
    const navigate = useNavigate()

    useEffect(()=>{
        if(!isloggedIn){
            navigate("/login")
        }
    },[])


    const handleinfochange = (e) => {
        const { name, value } = e.target
        setinfo((prevState) => ({
            ...prevState,
            [name]: value
        }) || { name: "Saurav", email: "example@gmail.com", mob: 9876543210 });
    }
    const handleAboutChange = (e) => {
        setabout(e.target.value)
    }
    const handleSocialLinkChange = (index, event) => {
        const { name, value } = event.target
        const updatedLinks = [...links]
        updatedLinks[index][name] = value
        setlinks(updatedLinks)
    }
    const handleSocialAddMore = (e) => {
        e.preventDefault()
        if (links.length < 3) {

            setlinks([...links, { platform: '', url: '' }]);
        } else {
            alert("u can't add more!!")
        }
    };
    const handleSocialRemove = (index) => {
        if (links.lenght == 1) {
            alert("Cannot remove")
            return;
        }
        const updatedLinks = links.filter((_, i) => i !== index);
        setlinks(updatedLinks);
    };
    const handleSkillInputchange = (index, e) => {
        const { name, value } = e.target
        const updatedSkill = [...skills]
        updatedSkill[index][name] = value
        setskills(updatedSkill)
    }
    const handleSkillAddmore = (e) => {
        e.preventDefault()
        if (skills.length < 5) {
            setskills([...skills, { title: '', skill: '' }])
        } else {
            alert("u can't add more!!")
        }
    }
    const handleSkillRemove = (index, e) => {
        e.preventDefault()
        if (skills.length == 1) {
            alert("Cannot remove")
            return;
        }


        const updatedSkill = skills.filter((_, i) => i !== index)
        setskills(updatedSkill)
    }
    const handleEdInputchange = (index, e) => {
        const { name, value } = e.target
        const updateddetail = [...education]
        updateddetail[index][name] = value
        seteducation(updateddetail)
    }
    const handleEdAddmore = (e) => {
        e.preventDefault()
        if (education.length < 3) {

            seteducation([...education, { clg: '', year: '', title: '' }])
        } else {
            alert("u can't add more!!")
        }
    }
    const handleEdRemove = (index) => {
        if (education.lenght == 1) {
            alert("Cannot remove")
            return;
        }
        const updatedSkill = education.filter((_, i) => i !== index)
        seteducation(updatedSkill)
    }
    const handlePrInputChange = (index, e) => {
        const { name, value } = e.target;
        const updatedProject = [...project];
        updatedProject[index][name] = value;
        setProject(updatedProject);
    };
    const handlePointsChange = (projectIndex, pointIndex, e) => {
        const { value } = e.target;
        const updatedProject = [...project];
        updatedProject[projectIndex].points[pointIndex] = value;
        setProject(updatedProject);
    };
    const addPoint = (index, e) => {
        e.preventDefault()
        const updatedProject = [...project];
        if (updatedProject[index].points.length < 4) {
            updatedProject[index].points.push('');
            setProject(updatedProject);
        } else {
            alert("u can't add more!!")
        }
    };
    const removePoint = (projectIndex, pointIndex, e) => {
        e.preventDefault()
        if (project.points.lenght == 1) {
            alert("Cannot remove")
            return;
        }
        const updatedProject = [...project];
        updatedProject[projectIndex].points = updatedProject[projectIndex].points.filter(
            (_, i) => i !== pointIndex
        );
        setProject(updatedProject);
    };
    const handlePrRemove = (index) => {
        if (project.lenght == 1) {
            alert("Cannot remove")
            return;
        }
        const updatedProject = project.filter((_, i) => i !== index);
        setProject(updatedProject);
    };
    const handlePrAddMore = (e) => {
        e.preventDefault()
        if (project.length < 3) {
            setProject([
                ...project,
                { name: '', link: '', year: '', points: [''] },
            ]);
        } else {
            alert("u can't add more!!")
        }
    };
    const handleCrInput = (index, e) => {
        const { name, value } = e.target
        const updatedvalue = [...cer]
        updatedvalue[index][name] = value
        setcer(updatedvalue)
    }
    const handleCrAddMore = (e) => {
        e.preventDefault()
        if (cer.length < 5) {
            setcer([...cer, { name: '', org: '', year: '' }])
        } else {
            alert("u can't add more!!")
        }
    }
    const handleCrRemove = (index, e) => {
        e.preventDefault()
        if (cer.length == 1) {
            alert("Cannot remove")
            return;
        }
        const value = cer.filter((_, i) => i !== index)
        setcer(value)
    }
    const handleAchInputChange = (index, e) => {
        const { name, value } = e.target
        const uptvalue = [...achievements]
        uptvalue[index][name] = value
        setAchievements(uptvalue)
    }
    const handleAchAdd = (e) => {
        e.preventDefault()
        if (cer.length < 5) {
            setAchievements([...achievements, { text: '' }])
        } else {
            alert("u can't add more!!")
        }
    }
    const handleAchRemove = (index, e) => {
        e.preventDefault()
        if (achievements.length == 1) {
            alert("Cannot remove")
            return;
        }
        const value = achievements.filter((_, i) => i !== index)
        setAchievements(value)
    }
    const handleLgInputChange = (index, e) => {
        const { name, value } = e.target
        const uptvalue = [...languages]
        uptvalue[index][name] = value
        setLanguages(uptvalue)
    }
    const handleLgAdd = (e) => {
        e.preventDefault()
        if (languages.length < 5) {
            setLanguages([...languages, { name: '' }])
        } else {
            alert("u can't add more!!")
        }
    }
    const handleLgRemove = (index, e) => {
        e.preventDefault()
        if (languages.length == 1) {
            alert("Cannot remove")
            return;
        }
        const value = languages.filter((_, i) => i !== index)
        setLanguages(value)
    }
    const handleRefInputChange = (index, e) => {
        const { name, value } = e.target
        const uptvalue = [...references]
        uptvalue[index][name] = value
        setReferences(uptvalue)
    }
    const handleRefAdd = (e) => {
        e.preventDefault()
        if (references.length < 5) {
            setReferences([...references, { name: '', contact: '' }])
        } else {
            alert("u can't add more!!")
        }
    }
    const handleRefRemove = (index, e) => {
        e.preventDefault()
        const value = references.filter((_, i) => i !== index)
        setReferences(value)
    }
    const handleINInputChange = (index, e) => {
        const { name, value } = e.target
        const uptvalue = [...interests]
        uptvalue[index][name] = value
        setInterests(uptvalue)
    }
    const handleINAdd = (e) => {
        e.preventDefault()
        if (interests.length < 5) {
            setInterests([...interests, { name: '' }])
        } else {
            alert("u can't add more!!")
        }
    }
    const handleINRemove = (index, e) => {
        e.preventDefault()

        const value = interests.filter((_, i) => i !== index)
        setInterests(value)
    }
    const handlesubmit = (e) => {
        e.preventDefault()
        // if(info.name.length < 1 || info.email.length < 1 || info.mob.length < 1 || about.length < 1 || links.plateform.length < 1 || links.url.length < 1){console.error("Invalid"); return;} 
        alert("Check all the details, template and section.")
        setresumeShow(true)
    }
    const toggleSection = (key) => {
        if (sections[key] === false) {
            setSections((prev) => ({
                ...prev,
                [key]: !prev[key],
            }));
        }
    };
    const Divider = () => (
        <hr className="border-t border-gray-300 dark:border-gray-600 my-6" />
    );
    const handleTemplateSelect = (id) => {
        setTemplateId(id);
    };
    const renderSelectTemplate = () => {
        switch (templateId) {
            case "template1":
                return (<FresherResume resumeShow={resumeShow} info={info} about={about} links={links} skills={skills} education={education} project={project} cer={cer} achievements={achievements} languages={languages} interests={interests} references={references} section={sections} />);
            case "template2":
                return (<MicrosoftResume resumeShow={resumeShow} info={info} about={about} links={links} skills={skills} education={education} project={project} cer={cer} achievements={achievements} languages={languages} interests={interests} references={references} section={sections} />);
            case "template3":
                return (<ExperienceResume resumeShow={resumeShow} info={info} about={about} links={links} skills={skills} education={education} project={project} cer={cer} achievements={achievements} languages={languages} interests={interests} references={references} section={sections} />);
            case "template4":
                return (<ShowResume resumeShow={resumeShow} info={info} about={about} links={links} skills={skills} education={education} project={project} cer={cer} achievements={achievements} languages={languages} interests={interests} references={references} section={sections} />);
        }
    }

    useEffect(() => {
        if (resumeData) {
            setinfo(resumeData.info || { name: "", email: "", mob: "" });
            setabout(resumeData.about || "");
            setlinks(resumeData.links || [{ plateform: "", url: "" }]);
            setskills(resumeData.skills || [{ title: "", skill: "" }]);
            seteducation(resumeData.education || [{ clg: "", year: "", title: "" }]);
            setProject(resumeData.project || [{ name: "", link: "", year: "", points: [""] }]);
            setcer(resumeData.cer || [{ name: "", org: "", year: "" }]);
            setAchievements(resumeData.achievements || [{ text: "" }]);
            setLanguages(resumeData.languages || [{ name: "" }]);
            setInterests(resumeData.interests || [{ name: "" }]);
            setReferences(resumeData.references || [{ name: "", contact: "" }]);
        }
    }, [resumeData]);
    const Star = () => {
        return <Star_Ani />
    }
    return (
        <>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-2 textshadow">Fresher Resume Form</h1>
            <p className="text-lg sm:text-2xl font-semibold text-red-700 text-center mb-6">Fill in all fields carefully</p>
            <div className="w-full sm:py-4 sm:px-4 sm:flex sm:gap-6 overflow-hidden " >
                <section className="w-full sm:w-[90%] md:w-[60%] lg:w-[30%] xl:max-w-[22%] h-fit py-4 px-4 mt-2 sm:mt-4 rounded sm:mx-auto mx-auto">
                    <div className="py-4 mt-4 rounded shadow-xl">
                        <button
                            className="cursor-pointer h-auto w-full px-4 flex justify-between items-center gap-2"
                            onClick={() => setshow(!show)}
                        >
                            Explore Section {show ? <ChevronUp /> : <ChevronDown />}
                        </button>
                        {show && (
                            <ul className="ml-4 mt-4 space-y-2">
                                {Object.entries(sections).map(([key, value]) => (
                                    <li
                                        key={key}
                                        className="flex items-center gap-2 cursor-pointer"
                                        onClick={() => toggleSection(key)}
                                    >
                                        {value ? (
                                            <CircleCheckBig className="text-green-600" />
                                        ) : (
                                            <SquarePlus className="text-blue-600" />
                                        )}
                                        <span className="font-medium">{key}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <TemplateSelector onSelect={handleTemplateSelect} />
                </section>

                <section className="sm:w-[75%] w-full sm:py-10 ">
                    <div className="max-w-5xl mx-auto">
                        <form onSubmit={handlesubmit} className="w-full rounded-xl shadow-2xl px-4 sm:px-8 py-6 space-y-6">
                            {/* Profile Section */}
                            <div className={`w-full my-6 ${sections.Profile ? "block" : "hidden"} `}>
                                <div className="flex flex-col gap-4">
                                    <label className="text-xl sm:text-2xl font-semibold mx-2 flex items-center gap-1">Personal Information: <Star /></label>

                                    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 px-4">
                                        <input type="text" name="name" value={info.name} onChange={handleinfochange} placeholder="e.g., John Deo" className="w-full sm:w-[48%] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 font-medium text-base" required />
                                        <input type="email" name="email" value={info.email} onChange={handleinfochange} placeholder="e.g., xyz@email.com" className="w-full sm:w-[48%] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 font-medium text-base" required />
                                        <input type="text" name="mob" value={info.mob} onChange={handleinfochange} placeholder="e.g., 99******72" className="w-full sm:w-[48%] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 font-medium text-base" required />
                                    </div>
                                </div>
                                <Divider />
                            </div>

                            {/* About Section */}
                            <div className={`w-full my-4 ${sections.About ? "block" : "hidden"} `}>
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                    <label htmlFor="about" className="text-lg sm:text-xl font-semibold flex items-center gap-1 mx-2"> Summary: <Star /> </label>
                                    <textarea id="about" name="about" value={about} onChange={handleAboutChange} placeholder="Enter your professional summary here..." className="w-full sm:w-[80%] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 font-medium text-base resize-none" required rows={4} />
                                </div>
                                <Divider />
                            </div>

                            {/* Social Links */}
                            <div className={`w-full my-6 ${sections.SocialLinks ? "block" : "hidden"} `}>
                                <div className="flex flex-col gap-4">
                                    <label className="text-xl sm:text-2xl font-semibold mx-2 flex items-center gap-1"> Social Links: <Star /> </label>

                                    <div className="flex flex-col gap-4 px-4">
                                        {links.map((item, index) => (
                                            <div key={index} className="flex flex-col sm:flex-row sm:flex-wrap gap-4 items-start sm:items-center">
                                                <input type="text" name="plateform" placeholder="e.g., GitHub" value={item.plateform || ""} onChange={(e) => handleSocialLinkChange(index, e)} className="w-full sm:w-[40%] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 font-medium text-base" required />
                                                <input type="text" name="url" placeholder="e.g., https://github.com/johndeo" value={item.url} onChange={(e) => handleSocialLinkChange(index, e)} className="w-full sm:w-[50%] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 font-medium text-base" required />
                                                <button type="button" onClick={() => handleSocialRemove(index)} className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-md transition duration-200" > Remove </button>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="px-4">
                                        <button type="button" onClick={handleSocialAddMore} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md transition duration-200" > Add More </button>
                                    </div>
                                </div>
                                <Divider />
                            </div>

                            {/* Skills */}
                            <div className={`w-full my-6 ${sections.Skills ? "block" : "hidden"} `}>
                                <div className="flex flex-col gap-4">
                                    <label className="text-xl sm:text-2xl font-semibold mx-2 flex items-center gap-1"> Technical Skills: <Star /> </label>

                                    <div className="flex flex-col gap-4 px-4">
                                        {skills.map((item, index) => (
                                            <div key={index} className="flex flex-col sm:flex-row sm:flex-wrap gap-4 items-start sm:items-center">
                                                <input type="text" name="title" placeholder="e.g., Front-end" value={item.title} onChange={(e) => handleSkillInputchange(index, e)} className="w-full sm:w-[40%] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 font-medium text-base" required />
                                                <input type="text" name="skill" placeholder="e.g., HTML, CSS, JavaScript" value={item.skill} onChange={(e) => handleSkillInputchange(index, e)} className="w-full sm:w-[50%] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 font-medium text-base" required />
                                                <button type="button" onClick={(e) => handleSkillRemove(index, e)} className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-md transition duration-200" > Remove </button>
                                            </div>
                                        ))}

                                        <button type="button" onClick={handleSkillAddmore} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md transition duration-200 w-fit" > Add More </button>
                                    </div>
                                </div>
                                <Divider />
                            </div>

                            {/* Education */}
                            <div className={`w-full my-6 ${sections.Education ? "block" : "hidden"} `}>
                                <div className="flex flex-col gap-4">
                                    <label className="text-xl sm:text-2xl font-semibold mx-2 flex items-center gap-1"> Education Details: <Star /> </label>

                                    <div className="flex flex-col gap-6 px-4">
                                        {education.map((item, index) => (
                                            <div key={index} className="flex flex-col gap-4 border-b border-gray-300 pb-4">
                                                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 items-start sm:items-center">
                                                    <input type="text" name="clg" placeholder="e.g., College Name" value={item.clg} onChange={(e) => handleEdInputchange(index, e)} className="w-full sm:w-[30%] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 font-medium text-base" required />
                                                    <input type="text" name="year" placeholder="e.g., 2019–2022" value={item.year} onChange={(e) => handleEdInputchange(index, e)} className="w-full sm:w-[30%] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 font-medium text-base" required />
                                                    <input type="text" name="title" placeholder="e.g., BCA or Intermediate" value={item.title} onChange={(e) => handleEdInputchange(index, e)} className="w-full sm:w-[30%] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 font-medium text-base" required />
                                                    <button type="button" onClick={() => handleEdRemove(index)} className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-md transition duration-200" > Remove </button>
                                                </div>
                                            </div>
                                        ))}

                                        <button type="button" onClick={handleEdAddmore} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md transition duration-200 w-fit" > Add More </button>
                                    </div>
                                </div>
                                <Divider />
                            </div>

                            {/* Projects */}
                            <div className={`w-full my-6 ${sections.Project ? "block" : "hidden"} `}>
                                <div className="flex flex-col gap-4">
                                    <label className="text-xl sm:text-2xl font-semibold mx-2 flex items-center gap-1"> Projects Details: <Star /> <span className="text-sm " >(you can also add experience here.)</span> </label>

                                    <div className="flex flex-col gap-6 px-4">
                                        {project.map((item, index) => (
                                            <div key={index} className="flex flex-col gap-4 border-b border-gray-300 pb-6">
                                                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
                                                    <input type="text" name="name" value={item.name} onChange={(e) => handlePrInputChange(index, e)} placeholder="e.g., Project/Company Name" className="w-full sm:w-[32%] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 font-medium text-base" />
                                                    <input type="text" name="link" value={item.link} onChange={(e) => handlePrInputChange(index, e)} placeholder="e.g., https://your-project-link.com" className="w-full sm:w-[32%] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 font-medium text-base" />
                                                    <input type="text" name="year" value={item.year} onChange={(e) => handlePrInputChange(index, e)} placeholder="e.g., Oct 2023 – Nov 2023" className="w-full sm:w-[32%] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 font-medium text-base" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-lg font-semibold"> Project Points: <Star /> </label>
                                                    <ul className="flex flex-col gap-2">
                                                        {item.points.map((point, pointIndex) => (
                                                            <li key={pointIndex} className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
                                                                <input type="text" value={point} onChange={(e) => handlePointsChange(index, pointIndex, e)} placeholder="Enter a point" className="w-full sm:w-[80%] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 font-medium text-base" />
                                                                <button type="button" onClick={(e) => removePoint(index, pointIndex, e)} className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md font-semibold transition duration-200" > Remove </button>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <button type="button" onClick={(e) => addPoint(index, e)} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md w-fit" > Add Point </button>
                                                </div>
                                                <button type="button" onClick={() => handlePrRemove(index)} className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-md w-fit" > Remove Project </button>
                                            </div>
                                        ))}
                                        <button type="button" onClick={handlePrAddMore} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md w-fit" > Add More Project </button>
                                    </div>
                                </div>
                                <Divider />
                            </div>

                            {/* Certificates */}
                            <div className={`w-full my-6 ${sections.Certificate ? "block" : "hidden"} `}>
                                <div className="flex flex-col gap-4">
                                    <label className="text-xl sm:text-2xl font-semibold mx-2 flex items-center gap-1">Certificates: <Star /></label>
                                    <div className="flex flex-col gap-6 px-4">
                                        {cer.map((item, index) => (
                                            <div key={index} className="flex flex-col gap-4 border-b border-gray-300 pb-4">
                                                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
                                                    <input type="text" name="name" value={item.name || ""} onChange={(e) => handleCrInput(index, e)} placeholder="Certificate Name" className="w-full sm:w-[30%] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 font-medium text-base" />
                                                    <input type="text" name="org" value={item.org || ""} onChange={(e) => handleCrInput(index, e)} placeholder="Organization (e.g., Udemy)" className="w-full sm:w-[30%] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 font-medium text-base" />
                                                    <input type="text" name="year" value={item.year || ""} onChange={(e) => handleCrInput(index, e)} placeholder="Year (e.g., 2021)" className="w-full sm:w-[30%] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 font-medium text-base" />
                                                </div>
                                                <button type="button" onClick={(e) => handleCrRemove(index, e)} className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-md w-fit" > Remove </button>
                                            </div>
                                        ))}
                                        <button type="button" onClick={handleCrAddMore} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md w-fit" > Add More </button>
                                    </div>
                                </div>
                            </div>

                            {/* Achievements */}
                            <div className={`w-full my-6 ${sections.Achievement ? "block" : "hidden"} `}>
                                <label className="text-xl font-semibold">Achievements</label>
                                {achievements.map((item, index) => (
                                    <div key={index} className="flex gap-2 mt-2">
                                        <input type="text" placeholder="e.g. Won Hackathon" name="text" value={item.text} onChange={(e) => handleAchInputChange(index, e)} className="w-full px-3 py-2 border border-gray-300 rounded" />
                                        <button type="button" onClick={(e) => handleAchRemove(index, e)} className="text-white bg-red-600 px-3 py-2 rounded" > Remove </button>
                                    </div>
                                ))}
                                <button type="button" onClick={handleAchAdd} className="mt-2 text-white bg-blue-600 px-3 py-2 rounded" > Add More </button>
                            </div>

                            {/* Languages */}
                            <div className={`w-full my-6 ${sections.Language ? "block" : "hidden"} `}>
                                <label className="text-xl font-semibold">Languages</label>
                                {languages.map((item, index) => (
                                    <div key={index} className="flex gap-2 mt-2">
                                        <input type="text" placeholder="e.g. English" name="name" value={item.name} onChange={(e) => handleLgInputChange(index, e)} className="w-full px-3 py-2 border border-gray-300 rounded" />
                                        <button type="button" onClick={(e) => handleLgRemove(index, e)} className="text-white bg-red-600 px-3 py-2 rounded" > Remove </button>
                                    </div>
                                ))}
                                <button type="button" onClick={handleLgAdd} className="mt-2 text-white bg-blue-600 px-3 py-2 rounded" > Add More </button>
                            </div>

                            {/* Interests */}
                            <div className={`w-full my-6 ${sections.Interest ? "block" : "hidden"} `}>
                                <label className="text-xl font-semibold">Interests</label>
                                {interests.map((item, index) => (
                                    <div key={index} className="flex gap-2 mt-2">
                                        <input type="text" placeholder="e.g. Reading" name="name" value={item.name} onChange={(e) => handleINInputChange(index, e)} className="w-full px-3 py-2 border border-gray-300 rounded" />
                                        <button type="button" onClick={(e) => handleINRemove(index, e)} className="text-white bg-red-600 px-3 py-2 rounded" > Remove </button>
                                    </div>
                                ))}
                                <button type="button" onClick={handleINAdd} className="mt-2 text-white bg-blue-600 px-3 py-2 rounded" > Add More </button>
                            </div>

                            {/* References */}
                            <div className={`w-full my-6 ${sections.Refrence ? "block" : "hidden"} `}>
                                <label className="text-xl font-semibold">References</label>
                                {references.map((item, index) => (
                                    <div key={index} className="flex flex-col sm:flex-row gap-2 mt-2">
                                        <input type="text" placeholder="e.g. Dr. Sharma" name="name" value={item.name} onChange={(e) => handleRefInputChange(index, e)} className="w-full sm:w-1/2 px-3 py-2 border border-gray-300 rounded" />
                                        <input type="text" placeholder="e.g. 1234567890 / xyz@email.com" name="contact" value={item.contact} onChange={(e) => handleRefInputChange(index, e)} className="w-full sm:w-1/2 px-3 py-2 border border-gray-300 rounded" />
                                        <button type="button" onClick={(e) => handleRefRemove(index, e)} className="text-white bg-red-600 px-3 py-2 rounded" > Remove </button>
                                    </div>
                                ))}
                                <button type="button" onClick={handleRefAdd} className="mt-2 text-white bg-blue-600 px-3 py-2 rounded" > Add More </button>
                            </div>

                            <div className="flex justify-center">
                                <button type="submit" onSubmit={handlesubmit} className="w-[80%] md:w-[60%] lg:w-[40%] px-6 py-3 cursor-pointer font-bold text-lg text-white rounded-lg border border-transparent bg-blue-500 hover:bg-blue-600 transition-all duration-300" > SUBMIT </button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>

            <p className="text-center text-sm">The preview may change based on the selected template or PDF format.</p>

            <div className={` ${resumeShow ? "block" : "hidden"} md:w-[600px] w-[80vw] h-auto border border-black mx-auto  px-3 py-2`} >
                <h1 className="text-2xl font-semibold mb-[-18px] underline text-center " >Preview</h1>
                {renderSelectTemplate()}
            </div>
        </>
    );
}