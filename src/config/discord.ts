require('dotenv').config();


export interface BotConfig {
  env: string
  prefix: string
  version: string
  name: string
}

export const botConfig : BotConfig = {
    env : process.env.CLIENT_TOKEN as string,
    prefix : "$",
    version : "1.0.0",
    name : "Bot0x7"
}