// require('dotenv').config();
// import interactionCreate from "./src/listeners/interactionCreate";
// import ready from "./src/listeners/ready";

// import { Client, Events, GatewayIntentBits } from 'discord.js';

// import { setupCommand } from "./src/commands";




// const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

// const setup = async (client : Client) => {
//     await setupCommand();
//     ready(client);
//     interactionCreate(client);
// }


// setup(client).catch((err) => {
//     console.log(err)
// })

// //make sure this line is the last line
// client.login(process.env.CLIENT_TOKEN); 