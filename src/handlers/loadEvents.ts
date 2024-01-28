import { Client, Events, Interaction } from "discord.js";


const clientEvent = (event: string) => require(`../events/client/${event}`);
const guildEvent = (event: string) => require(`../events/guild/${event}`);




function laodEvents(client: Client) {

  client.on("ready", (client: Client) => clientEvent("ready")(client));

  client.on("interactionCreate", (interaction: Interaction) => guildEvent("interactionCreate")(interaction, client));
  client.on(Events.MessageCreate, (message) => guildEvent(Events.MessageCreate)(message));
}

export default laodEvents;