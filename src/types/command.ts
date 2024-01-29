import { CommandInteraction,  ChatInputApplicationCommandData, Client, Message } from "discord.js";

export interface Command extends ChatInputApplicationCommandData {
    run: <T, C>(arg? : T, interaction? : C) => void;
}
