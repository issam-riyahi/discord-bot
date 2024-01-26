import { Client, CommandInteraction, Interaction } from "discord.js";
import { commands } from "../commands";


export default (client : Client) : void => {
    client.on("interactionCreate", async (interaction : Interaction ) => {
        
        if(interaction.isCommand()){
            await handleSlashCommand(client, interaction);
            return;
        }
    })
}

const handleSlashCommand = async (client: Client , interaction : CommandInteraction) : Promise<void> => {
    const slachCommand = commands.find(c => c.name === interaction.commandName);
    console.log(slachCommand);
    if(!slachCommand) {
        interaction.followUp({content : "An error has occured"});
        return;
    }

    await interaction.deferReply();

    slachCommand.run(client, interaction);
}