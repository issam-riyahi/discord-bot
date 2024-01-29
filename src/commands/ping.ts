



import { CommandInteraction, Client, Message } from "discord.js";



module.exports = {
    name: "ping",
    description: "Returns a greeting",
    type : 1,
    run: async (message : Message) => {
        const content = "pong!";

        await message.channel.send(content);
    }
};

