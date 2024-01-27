import { Client } from "discord.js";
import { readdirSync } from "fs";
import path from "path";


function loadCommandes (client : Client) {
    const foldersPath = path.join(__dirname, '../commands');
    const commandFolder = readdirSync(foldersPath);
    
    for(const file of commandFolder) {
        const command = require(`../commands/${file}`) ;
        console.log(command);
        if(command.name) {
            client.commands.set(command.name, command);
            console.log("Command : " ,client.commands)
        }
    }
}

export default loadCommandes;