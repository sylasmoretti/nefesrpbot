const Discord = require('discord.js');
const Client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
let Prefix = ayarlar.prefix

exports.run = (client, message) => {
 const Embed = new Discord.MessageEmbed()
  .setColor(0xff000)
 .setAuthor(`${client.user.username} | Kasa Yardım Menüsü`)
 .setDescription(`
 **${Prefix}kasa-aç** \n->  Kasa Açarsın
 **${Prefix}kasa-bilgi** \n->  Kasalar Hakkında Bilgi Alırsın
 **${Prefix}kasalar** \n->  Kasaların İçerikleri Hakkında Bilgi Alırsın
 **${Prefix}kasaaç <Kasa ID>** \n->  Belirtilen ID'ye Sahip Kasayı Açarsın



`)
 .setFooter(`Guard Oyun Bot`)
 .setTimestamp()
 message.channel.send(Embed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'ykasa',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};