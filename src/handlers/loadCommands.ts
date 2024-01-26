import { Client } from "discord.js";
import { readdirSync } from "fs";


function loadCommandes (client : Client) {
    const commandFolder = readdirSync('./commands');

    for(const file of commandFolder) {
        const command = require(`../commands/${file}`);
        if(command.name) {
            client.commnad.set
        }
    }
}