import { Client, Events, Interaction } from "discord.js";


const clientEvent = (event: string) => require(`../events/client/${event}`);
const guildEvent = (event: string) => require(`../events/guild/${event}`);




function laodEvents(client: Client) {

  client.on(Events.ClientReady, (client: Client) => clientEvent("ready")(client));

  client.on(Events.InteractionCreate, (interaction: Interaction) => guildEvent("interactionCreate")(interaction, client));
  client.on(Events.MessageCreate, (message) => guildEvent("commands")(message, client));
}

export default laodEvents;