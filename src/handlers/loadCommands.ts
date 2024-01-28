import { Client } from "discord.js";
import { readdirSync } from "fs";
import path from "path";


function loadCommandes (client : Client) {
    const foldersPath = path.join(__dirname, '../commands');
    const commandFolder = readdirSync(foldersPath);
    
    for(const file of commandFolder) {
        const command = require(`../commands/${file}`);
        if(command.name) {
            client.commands.set(command.name, command);
        }
    }
}

export default loadCommandes;