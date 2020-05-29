const Discord = require("discord.js");
const bot = new Discord.Client();
const dotenv = require("dotenv").config();

bot.on('ready', () => {
  console.log(`Server has been successfully running and logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  switch (msg.content.toLocaleLowerCase()) {
    case 'hi':
      msg.reply('Hi!!!');
      return;
    case 'hi!':
      msg.reply('Hi!!!');
      return;
    case 'hi!!':
      msg.reply('Hi!!!');
      return;
    case 'hi!!!':
      msg.reply('Hi!!!');
      return;
    case 'hello':
      msg.reply('Hello!!!');
      return;
    case 'hello!':
      msg.reply('Hello!!!');
      return;
    case 'hello!!':
      msg.reply('Hello!!!');
      return;
    case 'hello!!!':
      msg.reply('Hello!!!');
      return;
  }
});

bot.login(process.env.DISCORD_TOKEN);