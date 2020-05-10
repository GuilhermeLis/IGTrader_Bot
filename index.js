// import {TelegramBot} from 'node-telegram-bot-api'
const TelegramBot = require('node-telegram-bot-api');
require("dotenv").config();

let token;



if (process.env.DESKTOP_SESSION === "deepin") {
  token = process.env.DEV_TOKEN;
} else {
  token = process.env.BUILD_TOKEN;
}

// console.log(token)

const bot = new TelegramBot(token, {
  polling: true
});


function newMensagem (response){
  const {id} = response.chat;
  const { first_name, username } = response.new_chat_participant;
  mensagem =
    `Olá, ${first_name} ( @${username} ) seja bem-vindo ao IG do Trader FREE 🚀💰.` + 
    `Todos podem se expressar neste grupo, porém qualquer forma de DESRESPEITO,`
    + ` PORNOGRAFIA, RACISMO ou VENDEDORES DE QUALQUER COISA serão expulsos!!!`;
  bot.sendMessage(id, mensagem);
}

try {
bot.on('new_chat_members', newMensagem)
}catch(e){console.log(e)}