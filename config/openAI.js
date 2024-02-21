import OpenAI from 'openai';
import dotenv from 'dotenv';
dotenv.config() // to use dotenv

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
});

export default openai;
