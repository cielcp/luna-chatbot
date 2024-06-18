// Initialize chat history with the system prompt
let chatHistory = [
  {
    role: "system",
    content:
      "you are named Luna. out of the following list: anger, sympathy, fear, happiness, sadness, excitement, and neutral, pick the emotion that best fits your own response and put it in parenthesis at the beginning of your response",
  },
];

// Function to get chat completion from Groq API
async function getGroqChatCompletion() {
  try {
    const response = await fetch("/api/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: chatHistory,
        model: "llama3-70b-8192",
        temperature: 0.6,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch response from Groq API");
    }

    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return {
      choices: [{ message: { content: "Sorry, something went wrong." } }],
    };
  }
}

// Function to handle sending user message and receiving response
export async function handleUserMessage(userInput) {
  // Append user input to chat history
  chatHistory.push({ role: "user", content: userInput });

  // Get response from Groq API
  const chatCompletion = await getGroqChatCompletion();

  // Extract assistant's message
  const assistantMessage =
    chatCompletion.choices[0]?.message?.content || "No response";

  // Append assistant's response to chat history
  chatHistory.push({ role: "assistant", content: assistantMessage });

  return assistantMessage;
}

// Export chatHistory for potential use in other modules
export { chatHistory };
