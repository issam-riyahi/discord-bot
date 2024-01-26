import { Message } from "discord.js";
import interactionCreate from "./listeners/interactionCreate";
import ready from "./listeners/ready";

require('dotenv').config();
import { Client, Events, GatewayIntentBits } from 'discord.js';
import { loadCommandes } from "./utils/loader";



const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

loadCommandes();

ready(client);
interactionCreate(client);

//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN); 