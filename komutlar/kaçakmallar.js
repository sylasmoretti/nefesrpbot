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
  const viski = db.get(`viski_${kllanç.id}`)
  const votka = db.get(`votka_${kllanç.id}`)
  const şarap = db.get(`şarap_${kllanç.id}`)
  const rakı = db.get(`rakı_${kllanç.id}`)
  const bira = db.get(`bira_${kllanç.id}`)
const param = new Discord.MessageEmbed()
.setAuthor("PARAN", client.user.avatarURL())
.setDescription(`
Kaçak Viskiniz: ${viski ? viski : 'Yok'}

Kaçak Votkanız: ${votka ? votka : 'Yok'}

Kaçak Şarabınız: ${şarap ? şarap : 'Yok'}

Kaçak Rakınız: ${rakı ? rakı : 'Yok'}

Kaçak Biranız: ${bira ? bira : 'Yok'}

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
    name: 'kaçak-mallar',
    description: 'Günlük para alırsınız.',
    usage: 'param'
}