import { bot } from '~/config/bot'
import 'dotenv/config'

export default async function report(response) {

  console.log(response)

  const { reply_to_message } = response;
  const { chat } = response;

  const administrator = process.env.ADMINISTRATOR;


  bot.forwardMessage(administrator, chat.id, reply_to_message.message_id);
}
