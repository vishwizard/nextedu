import { NextResponse } from 'next/server';
const { GoogleGenerativeAI } = require('@google/generative-ai');

export async function POST(req) {
  const { prompt } = await req.json();

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);
  try {
    const model = genAI.getGenerativeModel({ model: "text-embedding-004" });
    const result = await model.embedContent(prompt);
    const embedding = result.embedding;

    return NextResponse.json({ embedding: embedding.values });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Error generating content' });
  }
}
