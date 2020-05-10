import { bot } from '~/config/bot'
import 'dotenv/config'

export default async function ban(response) {

  const { reply_to_message } = response;
  const { forward_from } = reply_to_message;
  const { chat } = response;
  // const { id } = response.chat;
  // const { from } = forward_from;

  const chat_id = process.env.CHAT_ID;

  const administrator = process.env.ADMINISTRATOR;

  // const { status } = await bot.getChatMember(chat.id, idc)
  // console.log(response)
  console.log(chat_id, forward_from.id)
  const { member } = await bot.getChatMember(chat_id, forward_from.id)
  console.log(member)
  if (chat.id != administrator) {

    const reply = "Você não tem permissão para usar essa função"

    bot.sendMessage(chat.id,reply);
    return;
  }else if(!member){

    const reply = `Usuário ( @${forward_from.username} ) não pertence ao grupo`

    bot.sendMessage(administrator,reply)
    return;
  }else{
    bot.kickChatMember(chat_id, forward_from.id)
  }
}
