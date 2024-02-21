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
    console.log(colors.bold.yellow("Welcome to Dylan's ChatBOT program"));
    console.log(colors.bold.yellow("What would you like to ask?"))

    const chatHistory = []; // stores past conversation between user and bot
    while(true) {
        const userInput = readlineSync.question(colors.brightBlue("You: "));

        try {
            const messages = chatHistory.map(([role, content]) => ({role, content}))

            //add latest user input
            messages.push({role: 'user', content: userInput})
            // Call API with user input
            const chatCompletion = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: messages,
            });
            // grabs specific message generated by bot
            const botText = chatCompletion.choices[0].message.content
            // console.log(chatCompletion.choices[0].message.content);
        // if user types exit it leaves the program
        if (userInput.toLowerCase() === ('exit' | 'bye')) {
            console.log(colors.yellow("Dylan's bot: ") + botText)
            return;
        }
        console.log(colors.yellow("Dylan's bot : ") + botText)
        // updates chat history with current conversation
        chatHistory.push(['user', userInput])
        chatHistory.push(['assistant', botText])
        // console.log(chatHistory)
        }
        catch(error) {
            console.error(colors.red(error));
        }
    }
}
main()