import { GoogleGenAI } from "@google/genai";
import { parse } from "safe-json-parse";
import { useState } from "react";
const Gemini_Api_Key = "AIzaSyBg6u75j_toWrBy-tO35dFhE1sZM_hpIRo"
const ai = new GoogleGenAI({ apiKey: Gemini_Api_Key })

export const ATSChecker = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCheck = async () => {
    if (!file) return alert("Please upload a resume file.");

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    setLoading(false);
  };

  return (
    <div className="p-4 w-full max-w-md mx-auto space-y-4">
      <h1 className="text-xl font-bold">ATS Resume Checker</h1>
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
        className="border p-2 w-full"
      />
      <button
        onClick={handleCheck}
        disabled={loading}
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        {loading ? "Checking..." : "Check"}
      </button>

      {/* {data && (
        <div className="mt-4 p-4 border rounded bg-gray-100 text-sm">
          <h2 className="font-semibold mb-2">Parsed Resume Info:</h2>
          <pre className="whitespace-pre-wrap">{JSON.stringify(data, null, 2)}</pre>
        </div>
      )} */}
    </div>
  );
};
