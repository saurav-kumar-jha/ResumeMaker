import { useState } from "react";

const templates = [
    { id: "template1", img: "/FresherResume1.jpg" },
    { id: "template2", img: "/color-block-resume-blue.webp" },
    { id: "template3", img: "/ExpreinceResume1.png" },
    { id: "template4", img: "/Resume_Design_Templates_04.png" },
];

const TemplateSelector = ({ onSelect }) => {
    const [selectedId, setSelectedId] = useState("");

    const handleSelect = (id) => {
        setSelectedId(id);  
        onSelect(id);
    };

    return (
        <div className="py-4 mt-2 border rounded shadow-xl">
            <h1 className="text-lg text-center font-semibold">Select Template</h1>
            <ul className="flex flex-wrap w-full justify-between gap-1 p-2 ">
                {
                    templates.map((template) => (
                        <li key={template.id} onClick={() => handleSelect(template.id)} className={`h-[170px] w-[150px] overflow-hidden p-2 rounded cursor-pointer mx-0 my-2 sm:mx-auto hover:scale-105 duration-75 border-2 ${selectedId === template.id ? "border-gray-600" : "border-transparent"}`} >
                            <img src={template.img} alt={template.id} className="object-contain my-1 w-full h-full scale-110 " />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default TemplateSelector;
