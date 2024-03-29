import { NextResponse } from "next/server";
import openai from "@/openai";

export async function POST(request: Request) {
  // todos in the body of the POST req
  const { todos } = await request.json();

  // communicate with openAI GPT
  const response = await openai.createChatCompletion({
    model: "gpt-3-turbo",
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content: `When responding, welcome the user always as User and say welcome to Tasker! Limit the response to 200 characters`,
      },
      {
        role: "user",
        content: `Hi there, provide a summary of the following projects. Count how many projects are in each category such as To Do, In Progress and Done, then tell the user to have a productive day! Here's the data: ${JSON.stringify(
          todos
        )}`,
      },
    ],
  });
  const { data } = response;

  return NextResponse.json(data.choices[0].message);
}
