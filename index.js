import TelegramBot from "node-telegram-bot-api";
import 'dotenv/config'

let token;

if (process.env.DESKTOP_SESSION === "deepin") {
  token = process.env.DEV_TOKEN;
} else {
  token = process.env.BUILD_TOKEN;
}

const bot = new TelegramBot(token, {
  polling: true,
});

bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

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

