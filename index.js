const TelegramBot = require('node-telegram-bot-api');

const token = "1246572158:AAFLv-CBbERI031otzQzM6tuWK-nsmvewyQ";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {
  polling: true
});


function newMensagem (response){
  const {id} = response.chat;
  const { first_name, username } = response.new_chat_participant;
  console.log(response)
  mensagem =
    `Olá, ${first_name}(@${username}) seja bem-vindo ao IG do Trader FREE 🚀💰. Todos podem se expressar neste grupo, porém qualquer forma de DESRESPEITO, PORNOGRAFIA, RACISMO ou VENDEDORES DE QUALQUER COISA serão expulsos!!!`;
  bot.sendMessage(id, mensagem);
}

bot.on('new_chat_members', newMensagem)