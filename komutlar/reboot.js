const Discord = require('discord.js');
const moment = require('moment');

exports.run = (client, message, args) => {
message.channel.send('Black Roleplay Adlı Botun Yeniden Başlatılmasını Onaylıyor Musun ?')
.then(() => {
  message.channel.awaitMessages(response => response.content === "evet", {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send('Black Roleplay Botu Yeniden Başlatıyorum').then(message => {
      console.log(`Black Roleplay Botu Yeniden Başlatılıyor`)
      process.exit(1);
    }).catch(console.error)
    })
    .catch(() => {
      message.channel.send('Black Roleplay Botun Yeniden Başlama İşlemini İptal Ettim');
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yenile','yb'],
  permLevel: 4
};

exports.help = {
  name: 'reboot',
  description: 'GUARD BOT',
  usage: 'reboot'
};