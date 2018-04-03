(function () {
  'use strict';

  const TelegramBot = require('node-telegram-bot-api');

  const bot = new TelegramBot(sails.config.TOKEN, {
    polling: true
  });

  bot.on('message', (msg) => {

    const html = `
    <strong>Hello, ${msg.from.first_name}</strong>
    <p>Some text here...</p>
`;

    console.log('Bot got message:');
    console.dir(msg);

    bot.sendMessage(msg.chat.id, html, {
      parse_mode: 'HTML'
    })
      .then(() => {
        console.log('Message has been sent...');
      })
      .catch((err) => {
        console.error(err);
      })
  });



})();

