import Groq from "groq-sdk";
import dotenv from "dotenv";
dotenv.config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function getWebsiteResponse(prompt) {
    const chatCompletion = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [
            {
                role: "user",
                content: `${prompt}\n\nIf the user is asking to open a website, provide the exact URL. If not, provide a helpful response.`
            }
        ],
        max_tokens: 300,
    });

    return chatCompletion.choices[0].message.content;
}

export default getWebsiteResponse;