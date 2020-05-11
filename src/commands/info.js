import { bot } from '~/config/bot'

export default function info (response){

 const administrator = process.env.ADMINISTRATOR;

 bot.sendMessage(administrator, JSON.stringify(response))
}
