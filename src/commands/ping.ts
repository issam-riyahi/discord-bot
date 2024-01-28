



import { CommandInteraction, Client } from "discord.js";



module.exports = {
    name: "ping",
    description: "Returns a greeting",
    type : 1,
    run: async (client: Client, interaction: CommandInteraction) => {
        const content = "pong!";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};

