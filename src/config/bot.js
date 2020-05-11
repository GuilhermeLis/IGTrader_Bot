import TelegramBot from "node-telegram-bot-api";
import 'dotenv/config'

let token;
export let chat_id;

if (process.env.NODE_ENV === "production") {
  token = process.env.BUILD_TOKEN;
  chat_id = process.env.CHAT_ID;
} else {
  token = process.env.DEV_TOKEN;
  chat_id = process.env.CHAT_ID_DEV;
}

export const bot = new TelegramBot(token, {
  polling: true,
});
