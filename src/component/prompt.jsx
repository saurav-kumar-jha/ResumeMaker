import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { generateResumeJson } from "./AI/generatedJson";
import { useResume } from "./Context/resumeContext";

export default function Prompt() {
  const [prompt, setPrompt] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const { setResumeData } = useResume()

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await generateResumeJson(prompt, setResumeData);
      console.log(res);
      navigate("/form")
    } catch (err) {
      alert("Error generating resume.");
      console.error(err);
    }
    setLoading(false);
  };
  

  return (
    <div className="w-full max-w-3xl h-[60vh] mx-auto mt-8 p-6 bg-white shadow rounded-lg">
      { (
        <>
          <h1 className="text-2xl font-bold mb-4 text-center">AI Resume Generator</h1>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter a brief summary about your career..."
            className="w-full h-28 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none"
          />

          <div className="flex gap-4 mt-4 justify-center">
            <button
              onClick={handleGenerate}
              className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-semibold px-4 py-2 rounded-md"
              disabled={loading}
            >
              {loading ? "Generating..." : "Generate Resume"}
            </button>

            <button
              onClick={() => navigate("/form")}
              className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-4 py-2 rounded-md"
            >
              Continue Without AI
            </button>
          </div>
        </>
      )}
    </div>
  );
}
