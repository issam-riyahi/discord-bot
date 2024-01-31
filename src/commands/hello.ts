

import { CommandInteraction, Client, Message } from "discord.js";



module.exports = {
    name: "hello",
    description: "Returns a greeting",
    type : 1,
    run: async (message : Message, client : Client) => {
        const content = "Hello there!";

        message.channel.send(content)
    }
};

