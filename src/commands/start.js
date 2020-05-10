import { bot } from '#/config/bot'
export default function start(msg, match) {


    const chatId = msg.chat.id;
    const resp = "Você está ativando o bot de gerencia do IGTrader 🚀💰"

    console.log(msg)
    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);

}
