import TelegramBot from "node-telegram-bot-api";
import 'dotenv/config'

let token;

if (process.env.NODE_ENV === "production") {
  token = process.env.BUILD_TOKEN;
} else {
  token = process.env.DEV_TOKEN;
}

const bot = new TelegramBot(token, {
  polling: true,
});

bot.onText(/\/start/, (msg, match) => {


  const chatId = msg.chat.id;
  const resp = "Você está ativando o bot de gerencia do IGTrader 🚀💰"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

function newMensagem(response) {
  const { id } = response.chat;
  const { first_name, username } = response.new_chat_participant;
  const mensagem =
    `Olá, ${first_name} ( @${username} ) seja bem-vindo ao IG do Trader FREE 🚀💰.` +
    `Todos podem se expressar neste grupo, porém qualquer forma de DESRESPEITO,` +
    ` PORNOGRAFIA, RACISMO ou VENDEDORES DE QUALQUER COISA serão expulsos!!!`;
  bot.sendMessage(id, mensagem);
}

try {
  bot.on("new_chat_members", newMensagem);
} catch (e) {
  console.log(e);
}

