import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';

export const AiBtn = ({ input }) => {
    const [error, setError] = useState("");
    const [wait, setWait] = useState(false);
    const [res, setRes] = useState([]); // Initialize as an empty array
    const [popup, setPopup] = useState(false); // Show popup when response is available

    const genAi = new GoogleGenerativeAI("AIzaSyD--WvJZEG41ERdlqUD3h3LKX4gfM5Wm8w");
    const model = genAi.getGenerativeModel({ model: "gemini-1.5-flash" });

    const handleBtn = async (e) => {
        e.preventDefault();
        setWait(true);

        if (input === "") {
            setError("Enter something about you...");
            setTimeout(() => {
                setError("");
            }, 3000);
        } else {
            const prompt = `Generate profile summary for fresher resume for this ${input}`;
            const response = await model.generateContent(prompt);
            const summary = response.response.text();

            // Clean up the summary text and split into options
            const formattedResponse = formatResponse(summary);

            // Set the formatted response as an array
            setRes(formattedResponse);
            setPopup(true);
        }
        setWait(false);
    };

    const formatResponse = (text) => {
        // Split the response into options by detecting patterns
        const regex = /Option \d+.*?(\>.*?)(?=Option \d+|$)/gs; // Match each option block
        const matches = [...text.matchAll(regex)];
        
        // Convert the matches into an array of objects
        return matches.map((match, index) => {
            return {
                title: `Option ${index + 1}`,
                content: match[0].replace(">", "").trim() // Remove the '>' and clean the text
            };
        });
    };

    const handleCut = () => {
        setPopup(false);
    };

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <>
            <button
                onClick={handleBtn}
                className="w-fit h-auto mt-2 px-4 py-2 border border-gray-500 rounded-full active:border-black active:scale-95 duration-100 ease-in-out flex items-center text-lg font-medium"
            >
                {wait ? "Generating..." : <>Generate &nbsp; {<FaLongArrowAltRight />}</>}
            </button>

            {error !== "" && <h1 className="text-sm font-normal text-red-700 ml-4">{error}</h1>}

            <Popup open={popup} onClose={handleCut} position="top center">
                <div className="w-3/4 max-w-lg p-4 bg-white shadow-lg rounded-lg border border-gray-300">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold">Generated Summary</h3>
                        <button
                            onClick={handleCut}
                            className="text-red-500 font-semibold hover:text-red-700"
                        >
                           <IoClose/>
                        </button>
                    </div>
                    <div className="mt-2 text-lg">
                        {res.length > 0 ? (
                            res.map((option, index) => (
                                <div key={index} className="mb-4">
                                    <h4 className="font-bold">{option.title}</h4>
                                    <p>{option.content}</p>
                                    <button
                                        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                                        onClick={() => handleCopy(option.content)}
                                    >
                                        Copy
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p>No options available</p>
                        )}
                    </div>
                </div>
            </Popup>
        </>
    );
};
