import { bot } from '~/config/bot'

export default async function help(mensagem) {
  const { chat } = mensagem;

  const reply = "Esté é um bot que tem como objetivo ajudar na administração" +
                " do grupo IGTrader. "

  bot.sendMessage(chat.id,reply)
}
