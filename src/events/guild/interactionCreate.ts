import { Client, CommandInteraction, Interaction, InteractionCollector, InteractionType } from "discord.js";


module.exports = (interaction : Interaction, client : Client) =>  {
    if(interaction.type !== InteractionType.ApplicationCommand) return ;

    

    const command = client.slashCommands.get(interaction.commandName);

    if(!command) {
        interaction.reply({ content: 'Command not found' })
    }

    command?.run(client, interaction);
}