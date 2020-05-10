import { bot } from '~/config/bot'

export default function start(mensagem) {

  const { from } = mensagem;
  const chatId = mensagem.chat.id;

  if (from.username === "gui_lis"){
    const reply = "Você está ativando o bot de gerencia do IGTrader 🚀💰"
    bot.sendMessage(chatId, reply);
  }else{
    const reply = "Você não tem permissão de usar o bot"
    bot.sendMessage(chatId, reply)
  }

}
