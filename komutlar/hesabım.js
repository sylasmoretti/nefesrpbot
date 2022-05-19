const Discord = require('discord.js')
const db = require('quick.db');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  let kllanç = message.mentions.users.first() || message.author;
  const bakiye = await db.fetch(`bakiye_${kllanç.id}`);
  const hesapdurumu = await db.fetch(`hesapdurum_${kllanç.id}`);
  const hesapismi = await db.fetch(`hesapismi_${kllanç.id}`);
  const hesaptarihyıl = await db.fetch(`hesaptarihyıl_${kllanç.id}`);
  const hesaptarihay = await db.fetch(`hesaptarihay_${kllanç.id}`);
  const hesaptarihgün = await db.fetch(`hesaptarihgün_${kllanç.id}`)
  
  if(!hesapdurumu) {
    if(args[0]) return message.reply(`Bakmak istediğin kullanıcının bir hesabı bulunmamakta.`)
    message.reply(`İlk olarak hesap oluşturmalısın. ${client.ekoayarlar.botunuzunprefixi}hesap-oluştur <Hesap İsmi>`)
  } else {
    if(hesapdurumu) {
      if(!hesapismi) {
        const embedczdn = new Discord.MessageEmbed()
        .setColor(client.ekoayarlar.renk)
        .setDescription(`💵 Paranız: ${bakiye}

🏦 Banka İsmİ: ${hesapismi ? hesapismi: kllanç.id} `)
        message.channel.send(embedczdn)
      } else {
        if(hesapdurumu) {
          if(hesapismi) {
            const embedczdnv2 = new Discord.MessageEmbed()
            .setColor(client.ekoayarlar.renk)
            .setDescription(`💵 Paranız: ${bakiye}

🏦 Banka İsmİ: ${hesapismi ? hesapismi: kllanç.id}`)
            message.channel.send(embedczdnv2)
          }
        }
      }
    }
  }
}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    katagori: "Ekonomi"
}
exports.help = {
    name: 'hesabım',
    description: 'hesabım',
    usage: 'hesabım',
}