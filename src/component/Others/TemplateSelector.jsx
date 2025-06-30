import { useState } from "react";

const templates = [
    { id: "template1", img: "/FresherResume1.jpg" },
    { id: "template2", img: "/color-block-resume-blue.webp" },
    { id: "template3", img: "/ExpreinceResume1.png" },
    { id: "template4", img: "/Simple-Resume.webp" },
];

const TemplateSelector = ({ onSelect }) => {
    const [selectedId, setSelectedId] = useState("");

    const handleSelect = (id) => {
        setSelectedId(id);
        onSelect(id);
    };

    return (
        <div className="py-4 mt-2 rounded shadow-xl w-full max-w-[1200px] mx-auto">
            <h1 className="text-lg text-center font-semibold">Select Template</h1>
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-6 p-4">
                {templates.map((template) => (
                    <li
                        key={template.id}
                        onClick={() => handleSelect(template.id)}
                        className={`w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] h-[180px] overflow-hidden p-2 rounded cursor-pointer hover:scale-105 duration-150 border-2 ${selectedId === template.id ? "border-gray-600" : "border-transparent"
                            }`}
                    >
                        <img
                            src={template.img}
                            alt={template.id}
                            className="object-contain w-full h-full"
                        />
                    </li>
                ))}
            </ul>
        </div>

    );
};

export default TemplateSelector;
