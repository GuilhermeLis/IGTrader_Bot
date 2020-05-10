import { bot } from '~/config/bot'

export default async function report(response) {

  const { reply_to_message } = response;
  const { chat } = response;
  // const { from } = response;


  bot.forwardMessage(626513647, chat.id, reply_to_message.message_id);
}
