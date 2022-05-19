const Discord = require('discord.js');
const client = new Discord.Client();
var ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix
const ms = require('parse-ms')
const db = require('quick.db')

exports.run = async (client, message, args) => {
    let member = message.author;
  let kllanç = message.mentions.users.first() || message.author;
  
{
    const bakiye = await db.fetch(`bakiye_${kllanç.id}`);
  const esrar = db.get(`esrar_${kllanç.id}`)
  const eroin = db.get(`eroin_${kllanç.id}`)
  const meth = db.get(`meth_${kllanç.id}`)
  const kokain = db.get(`kokain_${kllanç.id}`)
const param = new Discord.MessageEmbed()
.setAuthor("PARAN", client.user.avatarURL())
.setDescription(`
Kokaininiz: ${kokain ? kokain : 'Yok.'}

Eroininiz: ${eroin ? eroin : 'Yok.'}

Esrarınız: ${esrar ? esrar : 'Yok.'}

Methiniz: ${meth ? meth : 'Yok.'}

`)
.setFooter("NEFES ", client.user.avatarURL())
 .setTimestamp()
message.channel.send(param)
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
    name: 'uyuşturucum',
    description: 'Günlük para alırsınız.',
    usage: 'param'
}