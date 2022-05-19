const Discord = require('discord.js');
const client = new Discord.Client();
var ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix
const ms = require('parse-ms')
const db = require('quick.db')

exports.run = async (client, message, args) => {
    let member = message.author;
  let kllanç = message.mentions.users.first() || message.author;
  let btcdeger = 2500
  let nefesdeger = 5000
  let ethereumdeger = 1000
  
  const bakiye = await db.fetch(`bakiye_${kllanç.id}`);
  const hesapdurumu = await db.fetch(`hesapdurum_${kllanç.id}`);
  const hesapismi = await db.fetch(`hesapismi_${kllanç.id}`);
  const btc = await db.fetch(`btc_${kllanç.id}`)
  const nefes = await db.fetch(`nefes_${kllanç.id}`)
  const ethereum = await db.fetch(`ethereum_${kllanç.id}`)



const param = new Discord.MessageEmbed()
.setAuthor("Coin", client.user.avatarURL())
.setDescription(`
Nefes Coin Değeri: ${nefesdeger}

Bitcoin Değeri: ${btcdeger}

Ethereum Değeri: ${ethereumdeger}

Bitcoinleriniz: ${btc ? btc : 'Yok'}

Nefes Coinleriniz: ${nefes ? nefes : 'Yok'}

Ethereumlarınız: ${ethereum ? ethereum : 'Yok'}

`)
.setFooter("Nefes Roleplay", client.user.avatarURL())
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
    name: 'değerler',
    description: 'Günlük para alırsınız.',
    usage: 'param'
}