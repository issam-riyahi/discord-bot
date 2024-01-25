import interactionCreate from "./listeners/interactionCreate";
import ready from "./listeners/ready";

require('dotenv').config();
const { Client, Events, GatewayIntentBits } = require('discord.js');



const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });


ready(client);
interactionCreate(client);

//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN); 