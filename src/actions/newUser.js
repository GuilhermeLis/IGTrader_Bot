import { bot } from '~/config/bot'

export default function newUser(response) {
  const { id } = response.chat;
  const { first_name, username } = response.new_chat_participant;

  const mensagem =
    `Olá, ${first_name} ( @${username} ) seja bem-vindo ao IG do Trader FREE 🚀💰.` +
    `Todos podem se expressar neste grupo, porém qualquer forma de DESRESPEITO,` +
    ` PORNOGRAFIA, RACISMO ou VENDEDORES DE QUALQUER COISA serão expulsos!!!`;

  bot.sendMessage(id, mensagem);
}