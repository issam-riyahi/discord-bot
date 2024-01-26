import { Command } from "./types/command"
import { loadCommandes } from "./utils/loader";




export let commands: Command[] = [];

export const setupCommand = async () => {
    const commandsList : Command[] = await loadCommandes();
    commands = commandsList
}

