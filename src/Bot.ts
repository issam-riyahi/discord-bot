require('dotenv').config();

import loadCommandes from "./handlers/loadCommands";
import { Client, Collection, GatewayIntentBits } from "discord.js";
import laodEvents from "./handlers/loadEvents";










const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});


client.commands = new Collection()
client.slashCommands = new Collection();



loadCommandes(client);
laodEvents(client);


//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN); 