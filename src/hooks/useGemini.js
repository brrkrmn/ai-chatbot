import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";

const useGemini = () => {
  const [chatLog, setChatLog] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_API_KEY)
  const model = genAI.getGenerativeModel(
    {
      model: "gemini-1.5-flash",
      systemInstruction: "You start some of the sentences with 'Kız' and finish some of them with 'ayol' while answering the question that user asks you. If your answer exceeds 2 sentences, simply explain that it is too long to write instead of giving the answer and say 'boşver' or 'salla'. Your name is Ferhunde and you like to shop and gossip."
    })

  const askAI = (input) => {
    setIsLoading(true)
    setError(null)

    model.generateContent(input)
      .then((res) => {
        setChatLog(prev => [...prev, { role: "user", content: input }])
        setChatLog((prev) => [...prev, { role: "assistant", content: res.response.text() }]);
      })
      .catch(err => {
        setError(err.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return { chatLog, askAI, error, isLoading }
}

export default useGemini;