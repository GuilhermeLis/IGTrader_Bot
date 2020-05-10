import { bot } from '~/config/bot'

import start from '~/commands/start';
import help from '~/commands/help'

import newUser from '~/actions/newUser';

try {

  //Commands
  bot.onText(/\/start/, start);
  bot.onText(/\/help/, help);

  // Actions
  bot.on("new_chat_members", newUser);

} catch (e) {
  console.log(e);
}

