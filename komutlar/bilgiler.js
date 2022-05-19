const Discord = require('discord.js')
const db = require('quick.db');
var ayarlar = require('../ayarlar.json');



exports.run = async (client, message, args) => {
		  
	
  let kllanç = message.mentions.users.first() || message.author;
  const bakiye = await db.fetch(`bakiye_${kllanç.id}`);
  const hesapdurumu = await db.fetch(`hesapdurum_${kllanç.id}`);
  const hesapismi = await db.fetch(`hesapismi_${kllanç.id}`);
  const hesaptarihyıl = await db.fetch(`hesaptarihyıl${kllanç.id}`);
  const hesaptarihay = await db.fetch(`hesaptarihay${kllanç.id}`);
  const hesaptarihgün = await db.fetch(`hesaptarihgün${kllanç.id}`);
  const deger = await db.fetch(`bankabakiye_${kllanç.id}`)
  
  if(!hesapdurumu) {
    if(args[0]) return message.reply(`Bakmak istediğin kullanıcının bir hesabı bulunmamakta.`)
    message.reply(`İlk olarak hesap oluşturmalısın. ${client.ekoayarlar.botunuzunprefixi}hesap <Hesap İsmi>`)
  } else {
    if(hesapdurumu) {
      if(!hesapismi) {
        const embedczdn = new Discord.MessageEmbed()
        .setColor(client.ekoayarlar.renk)
        .setDescription(` 🏦 Hesap İsmi: ${hesapismi} \n \n 💵 Hesap Bakiyesi: ${bakiye} \n \n 🏦 Banka Bakiyesi: ${deger ? deger : '0'}`)
        message.channel.send(embedczdn)
      } else {
        if(hesapdurumu) {
          if(hesapismi) {
            const embedczdnv2 = new Discord.MessageEmbed()
            .setColor(client.ekoayarlar.renk)
            .setDescription(` 🏦 Hesap İsmi: ${hesapismi}\n \n 💵 Bakiye : ${bakiye} \n \n :credit_card:  Banka Bakiyesi: ${deger ? deger : '0'}`)
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
    aliases: ["bilgilerim"],
    permLevel: 0,
    katagori: "Ekonomi"
}
exports.help = {
    name: 'bilgiler',
    description: 'Bilgilerinizi gösterir.',
    usage: 'bilgiler <@kullanıcı>',
}