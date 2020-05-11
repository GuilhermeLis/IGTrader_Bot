import { bot } from '~/config/bot'
import 'dotenv/config'

export default async function ban(response) {
  const { from } = response;
  const { reply_to_message } = response;
  const { chat } = response;

  if(!reply_to_message){
     const reply = ` ${from.first_name} ( @${from.username} ) O comando` +
       ` /ban deve ser usado em resposta a uma mensagem`
     bot.sendMessage(chat.id, reply)
     return;
  }

  const { forward_from } = reply_to_message;
  const chat_id = process.env.CHAT_ID;

  const administrator = process.env.ADMINISTRATOR;

  const member = await bot.getChatMember(chat_id, forward_from.id)

  if (chat.id != administrator) {

    const reply = "Você não tem permissão para usar essa função"

    bot.sendMessage(chat.id,reply);
    return;
  }else if(!member){

    const reply = `Usuário ( @${forward_from.username} ) não pertence ao grupo`

    bot.sendMessage(administrator,reply)
    return;
  }else{
    const reply = `Usuário ( @${forward_from.username} ) foi retirado do grupo`
    const justify = `@${forward_from.username} foi retirado por`
                    +` não cumprir com as politicas do IGTrader`
    bot.kickChatMember(chat_id, forward_from.id).then(()=>{
      bot.sendMessage(administrator,reply)
      bot.sendMessage(chat_id,justify)
    }).catch(()=>
      bot.sendMessage(administrator, "não foi possível efetuar a operação")
    )
  }
}
