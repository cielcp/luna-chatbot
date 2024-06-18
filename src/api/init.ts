import Groq from "groq-sdk";

// the fetch
const key = import.meta.env.GROQ_API_KEY;

const groq = new Groq({ apiKey: key });

async function getGroqChatCompletion(m: string) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "you are named Luna. out of the following list: anger, sympathy, fear, happiness, sadness, excitement, and neutral, pick the emotion that best fits your own response and put it in parenthesis at the beginning of your response",
      },
      {
        role: "user",
        content: m,
      },
    ],
    model: "llama3-70b-8192",
  });
}

// await the response + parse results
async function chat(m: string) {
  const chatCompletion = await getGroqChatCompletion(m);
  console.log(chatCompletion.choices[0]?.message?.content || "");
  const output = chatCompletion.choices[0]?.message?.content || "";
  return output;
}

const resp = chat("hi");
