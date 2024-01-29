


import { Client, CommandInteraction, Interaction, InteractionCollector, InteractionType, Message } from "discord.js";
import { botConfig } from "../../config/discord";


module.exports = (message : Message, client: Client ) =>  {
    if(!client) throw new Error("Discord client is not Initailized!");
    if(message.author.bot) return;


    let args : string[] = [];
    let command : string | undefined = undefined;


    if(message.content.startsWith(botConfig.prefix)){
      args = message.content.slice(botConfig.prefix.length).trim().split(/ +/);
      command = args.shift()?.toLowerCase();
    }

    if(!command) return 

    client.commands.get(command)?.run(message);

}