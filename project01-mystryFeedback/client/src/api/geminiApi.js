import { GoogleGenerativeAI } from "@google/generative-ai";
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
import config from '../config';

const genAI = new GoogleGenerativeAI(config.geminiApiKey);

async function run() {
    const safetySettings = [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
      ];
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", safetySettings});

  const prompt = "Write three questions that I want to ask to others 'no description just question'."

  const result = await model.generateContentStream(prompt);
  const response = await result.response;
  const text = response.text();
  return text;
}

export default run;