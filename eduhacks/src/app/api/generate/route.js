import { NextResponse } from 'next/server';
const { GoogleGenerativeAI } = require('@google/generative-ai');

export async function POST(req,res) {
  const data = await req.json();
  const prompt = data.body;
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const respone = result.response;
    const output = respone.text();

    return NextResponse.json({ output: output });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Error generating content' });
  }
}
