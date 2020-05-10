import { bot } from '~/config/bot';

import start from '~/commands/start';
import help from '~/commands/help';
import report from '~/commands/report';
import status from '~/commands/status';

import newUser from '~/actions/newUser';

try {

  //Commands
  bot.onText(/\/start/, start);
  bot.onText(/\/help/, help);
  bot.onText(/\/report/, report);
  bot.onText(/\/status/, status);

  // Actions
  bot.on("new_chat_members", newUser);

} catch (e) {
  console.log(e);
}

