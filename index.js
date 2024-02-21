// import OpenAI from 'openai';
// import dotenv from 'dotenv';
import openai from './config/openAI.js'
import readlineSync from 'readline-sync';
import colors from 'colors';

// dotenv.config() // to use dotenv

// const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
// });

// async function main() {
//     const chatCompletion = await openai.chat.completions.create({
//         model: 'gpt-3.5-turbo',
//         messages:[
//             {"role": 'user', "content": 'Who are the number one seed in the NBA?'},

//         ],
//     });
//     console.log(chatCompletion.choices[0].message.content)
// }

async function main() {
    // const userName = readlineSync.question('What is your name?')
    // console.log(`Welcome ${userName}!`);
    console.log(colors.bold.green("Welcome to Dylan's ChatBOT program"));
    while(true) {
        const userInput = readlineSync.question(colors.yellow("You: "));

        try {
            // Call API with user input

            if (userInput.toLowerCase() === 'exit') {
                return;
            }
        } catch(error) {
            console.error(colors.red(error));
        }
    }
}
main()