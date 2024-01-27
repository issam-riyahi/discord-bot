require('dotenv').config();

import loadCommandes from "./handlers/loadCommands";
import { Client, Collection, GatewayIntentBits } from "discord.js";
import laodEvents from "./handlers/loadEvents";





const client = new Client({ 
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] 
});



laodEvents(client);
loadCommandes(client);



//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN); 