import Groq from "groq-sdk";
//import type { ChatCompletionMessageParam } from "groq-sdk/resources/chat/completions";

export const prerender = false; // Ensure this endpoint is server-rendered on demand

async function getGroqChatCompletion(chatHistory, apiKey) {
  const groq = new Groq({ apiKey });

  try {
    return await groq.chat.completions.create({
      messages: chatHistory,
      model: "llama3-70b-8192",
    });
  } catch (error) {
    console.error("Error:", error);
    return {
      choices: [{ message: { content: "Sorry, something went wrong." } }],
    };
  }
}

export async function POST({ request }) {
  const { chatHistory } = await request.json();
  const apiKey = import.meta.env.SECRET_GROQ_API_KEY;

  try {
    const chatCompletion = await getGroqChatCompletion(chatHistory, apiKey);
    return new Response(JSON.stringify(chatCompletion), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response("Server error", { status: 500 });
  }
}
