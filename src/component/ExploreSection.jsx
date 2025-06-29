import { ChevronDown, ChevronUp, CircleCheckBig, SquarePlus } from "lucide-react";
import { useState } from "react";

export const ExploreSection = () => {
    const [show, setShow] = useState(false);

    const [sections, setSections] = useState({
        Profile: true,
        About: true,
        SocialLinks: true,
        Skills: true,
        Education: true,
        Project: false,
        Certificate: false,
        Achievement: false,
        Language: false,
        Interest: false,
        Refrence: false,
    });

    const toggleSection = (key) => {
        if (sections[key] === false) {
            setSections((prev) => ({
                ...prev,
                [key]: !prev[key],
            }));
        }
    };

    return (
        <section className="w-auto h-auto py-4 px-4 mt-4 shadow-2xl rounded mx-10">
            <div className="py-4 mt-4 border rounded shadow-xl">
                <button className="cursor-pointer h-auto w-auto px-4 flex justify-between items-center gap-2" onClick={() => setShow(!show)}>Explore Section {show ? <ChevronUp /> : <ChevronDown />}</button>

                {
                    show && (
                        <ul className="ml-6 mt-4 space-y-2">
                            {Object.entries(sections).map(([key, value]) => (
                                <li key={key} className="flex items-center gap-2 cursor-pointer" onClick={() => toggleSection(key)} >
                                    {value ? (<CircleCheckBig className="text-green-600" />) : (<SquarePlus className="text-blue-600" />)}
                                    <span className="font-medium">{key}</span>
                                </li>
                            ))}
                        </ul>
                    )}
            </div>
        </section>
    );
};
