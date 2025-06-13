import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { ChatError, ChatResponse } from '@/types/chat';


if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
  throw new Error('Missing Gemini API key');
}

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { question, context } = body;

    if (!question || !context) {
      return NextResponse.json<ChatResponse>(
        { error: 'Question and context are required' },
        { status: 400 }
      );
    }

    const prompt = `${context}\n\nQuestion: ${question}`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json<ChatResponse>({ response: text });
  } catch (error: unknown) {
    const chatError = error as ChatError;
    console.error('Error processing chat:', chatError);
    return NextResponse.json<ChatResponse>(
      { 
        error: 'Failed to process request',
        details: process.env.NODE_ENV === 'development' ? chatError.message : undefined 
      },
      { status: 500 }
    );
  }
}