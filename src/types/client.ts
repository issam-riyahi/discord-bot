import { Client, Collection } from "discord.js";



export interface ClientType extends Client {
    commands : Collection[];
}