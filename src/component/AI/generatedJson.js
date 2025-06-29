import { GoogleGenAI } from "@google/genai";
import { useResume } from "../Context/resumeContext";

// Template JSON structure to guide AI response
const templateJson = `{
  "info": { "name": "Alex Developer", "email": "alex.developer@example.com", "mob": "+1 (555) 123-4567" },
  "about": "Highly motivated and results-oriented Java Developer...",
  "links": [ { "plateform": "LinkedIn", "url": "..." }, { "plateform": "GitHub", "url": "..." } ],
  "skills": [ { "title": "Programming Languages", "skill": "..." } ],
  "education": [ { "clg": "...", "year": "...", "title": "..." } ],
  "project": [ { "name": "...", "link": "...", "year": "...", "points": ["..."] } ],
  "cer": [ { "name": "...", "org": "...", "year": "..." } ],
  "achievements": [ { "text": "..." } ],
  "languages": [ { "name": "..." } ],
  "interests": [ { "name": "..." } ],
  "references": [ { "name": "...", "contact": "..." } ] 
}`;

// Access API key from env
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const Ai = new GoogleGenAI({ apiKey: API_KEY });

/**
 * Sends a prompt to the Gemini model and returns the parsed resume JSON.
 * @param {string} prompt - The user prompt (e.g., "Create a resume for a React developer").
 * @returns {Promise<object|null>} - Parsed resume JSON or null if error.
 */
export const generateResumeJson = async (prompt, setResumeData) => {
  try {
    const res = await Ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
        ${prompt}
        Return only JSON format so I can easily use it to show user output.
        Use this JSON format to give output:
        ${templateJson}
      `
    });

    // Some models return a stream, await `.response.text()` or `.text()`
    const raw = typeof res.text === "function" ? await res.text() : res.text;

    const cleaned = raw
      .replace(/^```json\s*/, "")
      .replace(/^```/, "")
      .replace(/```$/, "")
      .trim();

    const parsed = JSON.parse(cleaned);
    setResumeData(parsed)
    return parsed;
  } catch (error) {
    console.error("Failed to generate JSON:", error);
    return null;
  }
};
