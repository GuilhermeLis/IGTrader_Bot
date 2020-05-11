import { bot } from '~/config/bot';

import start from '~/commands/start';
import help from '~/commands/help';
import report from '~/commands/report';
import status from '~/commands/status';
import ban from '~/commands/ban';
import info from '~/commands/info';

import newUser from '~/actions/newUser';

//Commands
bot.onText(/\/start/, start);
bot.onText(/\/help/, help);
bot.onText(/\/report/, report);
bot.onText(/\/status/, status);
bot.onText(/\/ban/, ban);
bot.onText(/\/info/, info)

// Actions
bot.on("new_chat_members", newUser);
