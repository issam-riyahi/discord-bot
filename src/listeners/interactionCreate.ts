import { Client, Interaction } from "discord.js";


export default (client : Client) : void => {
    client.on("interactionCreate", async (interaction : Interaction ) => {
        console.log(interaction);
    })
}