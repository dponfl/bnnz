(function () {
  'use strict';

  const TelegramBot = require('node-telegram-bot-api');

  const bot = new TelegramBot(sails.config.TOKEN, {
    polling: true
  });

  bot.onText(/\/start/, (msg) => {

    console.log('Bot got message:');
    console.dir(msg);

    bot.sendMessage(msg.chat.id, 'Получена команда start')
      .then(() => {
        console.log('Message has been sent...');
      })
      .catch((err) => {
        console.error(err);
      })
  });

  bot.onText(/\/help (.+)/, (msg, [source, match]) => {

    console.log('Bot got match:');
    console.dir(match);

    bot.sendMessage(msg.chat.id, 'Получена команда help')
      .then(() => {
        console.log('Message has been sent...');
      })
      .catch((err) => {
        console.error(err);
      })
  });



})();

