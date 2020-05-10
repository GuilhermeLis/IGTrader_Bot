import TelegramBot from "node-telegram-bot-api";
import 'dotenv/config'

let token;

if (process.env.NODE_ENV == "production") {
  token = process.env.BUILD_TOKEN;
} else {
  token = process.env.DEV_TOKEN;
}

export const bot = new TelegramBot(token, {
  polling: true,
});
