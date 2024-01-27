import { Client } from "discord.js";

module.exports =  (client: Client) : void => {

    console.log(`${client.user?.username} is online`);

};