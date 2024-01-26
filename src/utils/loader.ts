import path from "path"
import fs from "node:fs"



export const loadCommandes = async () => {
  const foldersPath  = path.join(__dirname, "../commands");
  const commandFolders = fs.readdirSync(foldersPath ) ;


  for(const folder of commandFolders) {
    const commandsPath = path.join(foldersPath , folder);
    console.log(commandsPath);

  }
}