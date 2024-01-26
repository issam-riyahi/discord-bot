import path from "path"
import fs from "node:fs"



export const loadCommandes = async () => {
  const foldersPath  = path.join(__dirname, "../commands");
  const commandFolders = fs.readdirSync(foldersPath ) ;

  return Promise.all(commandFolders.map( async (command) => {
      const commandPath = path.join(foldersPath, command);
      const { default : Command } = await import(commandPath);
        return Command
  }))
}