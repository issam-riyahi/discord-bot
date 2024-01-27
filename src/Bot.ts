require('dotenv').config();

import loadCommandes from "./handlers/loadCommands";
import { Client, Collection, GatewayIntentBits } from "discord.js";
import laodEvents from "./handlers/loadEvents";





const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
});


client.commands = new Collection()
client.slashCommands = new Collection()

console.log(client.commands)
console.log(client.slashCommands)

laodEvents(client);
loadCommandes(client)

console.log(client.commands)




//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN); 