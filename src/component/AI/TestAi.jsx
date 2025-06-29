import { GoogleGenerativeAI } from "@google/generative-ai"


export const TestAi = async ()=>{
    const genAi = new GoogleGenerativeAI("AIzaSyD--WvJZEG41ERdlqUD3h3LKX4gfM5Wm8w");
    const model = genAi.getGenerativeModel({model:"gemini-1.5-flash"})

    const prompt = "How are u?"
    const res = await model.generateContent(prompt)
    console.log(res.response.text())

    return (
        <>
          
        </>
    )
}