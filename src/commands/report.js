import { bot } from '~/config/bot'
import 'dotenv/config'

export default async function report(response) {

  const { reply_to_message } = response;
  const { chat } = response;
  const { from } = response;

  if ( !reply_to_message ) {
    const reply = ` ${from.first_name} ( @${from.username} ) O comando`
                   + ` /report deve ser usado em resposta a uma mensagem` +
                    `  que você considera inapropriada para o grupo.`
    bot.sendMessage(chat.id,reply)
    return;
  }

  const administrator = process.env.ADMINISTRATOR;

  bot.forwardMessage(administrator, chat.id, reply_to_message.message_id);
}
