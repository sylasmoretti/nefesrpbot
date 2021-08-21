const Discord = require('discord.js');
const client = new Discord.Client();
var ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix
const ms = require('ms')
const db = require('quick.db')

exports.run = async (client, message, args) => {
   let ekoban = db.get(`sistemban_${message.author.id}`)
 if(ekoban) return message.channel.send(
 new Discord.MessageEmbed()
   .setAuthor("Sistem Banı!", message.author.avatarURL())
   .setDescription(`
Ekonomi sisteminden \`${ekoban}\` sebebiyle banlanmışsınız!
Eğer itirazının varsa [Destek Sunucusu](https://discord.gg/Eq67w5gkD7)'na katılarak söyleyebilirsin.
   `)
   .setFooter("Gravity", client.user.avatarURL())
   .setTimestamp()
 )
    let member = message.author;
  let kllanç = message.mentions.users.first() || message.author;
  let btcdeger = 4532
  
  const bakiye = await db.fetch(`bakiye_${kllanç.id}`);
  const hesapdurumu = await db.fetch(`hesapdurum_${kllanç.id}`);
  const hesapismi = await db.fetch(`hesapismi_${kllanç.id}`);
  const btc = await db.fetch(`btc_${kllanç.id}`)

const param = new Discord.MessageEmbed()
.setAuthor("gravity", client.user.avatarURL())
.setDescription(`
Bitcoin Değeri: ${btcdeger}

Bitcoinleriniz: ${btc ? btc : 'Yok.'}

Eşyalarınızı görmek için: gvtçantam
`)
.setFooter("gravity", client.user.avatarURL())
 .setTimestamp()
message.channel.send(param)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['btc-değer', 'btc'],
    permLevel: 0,
    katagori: "Ekonomi"
}

exports.help = {
    name: 'bitcoin',
    description: 'Günlük para alırsınız.',
    usage: 'param'
}