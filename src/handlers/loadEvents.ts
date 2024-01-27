import { Client, Interaction } from "discord.js";


const clientEvent = (event: string) => require(`../events/client/${event}`);
const guildEvent = (event: string) => require(`../events/guild/${event}`);




function laodEvents(client: Client) {
  console.log(require('../events/client/ready'));

  client.on("ready", (client: Client) => clientEvent("ready")(client));

  client.on("interactionCreate", (interaction: Interaction) => guildEvent("interactionCreate")(interaction));
}

export default laodEvents;