import { bot } from '~/config/bot'

export default async function ban(response) {

  const { reply_to_message } = response;
  const { chat } = response;
  const { from } = response;

  const { status } = await bot.getChatMember(chat.id, from.id)

  if (status != 'administrator' && status != "creator") {
    const reply = "Você não tem permissão para usar essa função"
    bot.sendMessage(chat.id,reply);
  }

  bot.forwardMessage(from.id, chat.id, reply_to_message.message_id);
}
