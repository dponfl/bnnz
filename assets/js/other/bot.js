(function () {
  'use strict';

  const TelegramBot = require('node-telegram-bot-api');

  const bot = new TelegramBot(sails.config.TOKEN, {
    polling: true
  });

  bot.on('message', (msg) => {

    console.log('Bot got message:');
    console.dir(msg);

    bot.sendMessage(msg.chat.id, 'Здравствуй, ' + msg.from.first_name)
      .then(() => {
        console.log('Message has been sent...');
      })
      .catch((err) => {
        console.error(err);
      })
  });



})();

