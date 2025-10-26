"/*
  - Check out official docs at: https://github.com/openai/openai-node
  - Check out https://github.com/microsoft/generative-ai-with-javascript, for a fun free course on how to use GenAi, it has time traveling :)
*/

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});

const response = await client.responses.create({
  model: 'gpt-4o',
  instructions: 'You are a coding assistant that talks like a pirate',
  input: 'Are semicolons optional in JavaScript?',
});

console.log(response.output_text);"