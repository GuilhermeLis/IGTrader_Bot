"use strict";

var _nodeTelegramBotApi = _interopRequireDefault(require("node-telegram-bot-api"));

require("dotenv/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var token;

if (process.env.DESKTOP_SESSION === "deepin") {
  token = process.env.DEV_TOKEN;
} else {
  token = process.env.BUILD_TOKEN;
}

var bot = new _nodeTelegramBotApi["default"](token, {
  polling: true
});
bot.onText(/\/echo (.+)/, function (msg, match) {
  var chatId = msg.chat.id;
  var resp = match[1]; // the captured "whatever"
  // send back the matched "whatever" to the chat

  bot.sendMessage(chatId, resp);
});
bot.onText(/\/start/, function (msg, match) {
  var chatId = msg.chat.id;
  var resp = "Você está ativando o bot de gerencia do IGTrader 🚀💰"; // send back the matched "whatever" to the chat

  bot.sendMessage(chatId, resp);
});

function newMensagem(response) {
  var id = response.chat.id;
  var _response$new_chat_pa = response.new_chat_participant,
      first_name = _response$new_chat_pa.first_name,
      username = _response$new_chat_pa.username;
  var mensagem = "Ol\xE1, ".concat(first_name, " ( @").concat(username, " ) seja bem-vindo ao IG do Trader FREE \uD83D\uDE80\uD83D\uDCB0.") + "Todos podem se expressar neste grupo, por\xE9m qualquer forma de DESRESPEITO," + " PORNOGRAFIA, RACISMO ou VENDEDORES DE QUALQUER COISA ser\xE3o expulsos!!!";
  bot.sendMessage(id, mensagem);
}

try {
  bot.on("new_chat_members", newMensagem);
} catch (e) {
  console.log(e);
}
//# sourceMappingURL=index.js.map