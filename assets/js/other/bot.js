(function () {
  'use strict';

  const TelegramBot = require('node-telegram-bot-api');

  const bot = new TelegramBot(sails.config.TOKEN, {
    polling: {
      interval: 300,
      autoStart: true,
      params: {
        timeout: 10
      }
    }
  });

  bot.on('message', (msg) => {

    console.log('Bot got message:');
    console.dir(msg);

    bot.sendMessage(msg.chat.id, 'Здравствуй, ' + msg.from.first_name
      + ' Я бот BonanzaInstBot.');
  });



})();

