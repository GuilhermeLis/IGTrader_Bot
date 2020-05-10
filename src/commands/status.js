import { bot } from '~/config/bot'

export default function start(response) {
  // console.log(mensagem)
  const { from } = response;
  const reply = `I''m still on @${from.username}`
  bot.sendMessage(from.id,reply)
}
