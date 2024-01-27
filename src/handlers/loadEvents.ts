import { Client, Interaction } from "discord.js";


const clientEvent = (event: string) => require(`../events/client/${event}`);
const guildEvent = (event: string) => require(`../events/guild/${event}`);




function laodEvents(client: Client) {

  client.on("ready", (client: Client) => clientEvent("ready")(client));

  client.on<string>("interactionCreate", (interaction: Interaction, client : Client) => guildEvent("interactionCreate")(interaction, client));
}

export default laodEvents;