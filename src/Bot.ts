require('dotenv').config();
import interactionCreate from "./listeners/interactionCreate";
import ready from "./listeners/ready";

import { Client, Events, GatewayIntentBits } from 'discord.js';

import { setupCommand } from "./commands";




const client = new Client({ 
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] 
});



//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN); 