const Discord = require('discord.js');
const client = new Discord.Client();
var ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix
const ms = require('parse-ms')
const db = require('quick.db')

exports.run = async (client, message, args) => {
    let member = message.author;
  let kllanç = message.mentions.users.first() || message.author;
  
  const bakiye = await db.fetch(`bakiye_${kllanç.id}`);
  const silah = db.get(`silah_${kllanç.id}`)
  const olta = db.get(`silah_${kllanç.id}`)
  const telefon = db.get(`silah_${kllanç.id}`)
  const gram = db.get(`silah_${kllanç.id}`)
  const balta = db.get(`balta_${kllanç.id}`)
  const btc = db.get(`btc_${kllanç.id}`)
  const telsiz = db.get(`telsiz_${kllanç.id}`)

const market = new Discord.MessageEmbed()
.setAuthor("Market", client.user.avatarURL())
.setDescription(`
Genel
🎣 **Olta ile balık tutarak para kazan.** \n --> Fiyat: 250 💵
📱 **Telefon ile haberleşmek sosyal medyayı kullanmak.** \n --> Fiyat: 100 💵
📱 **Kelepçe ile adam soymak için satın al.** \n --> Fiyat: 30.000 💵
📱 **Telsiz ile haberleşmek için satın al.** \n --> Fiyat: 5.000 💵

Maden
⛏️ **Demir kazma satın al, elmas ve altın ile para kazan** \n **-->** Fiyat: 1.500 💵
⛏️ **Elmas kaznma ssatın al, zümrüt ile para kazan** \n **-->** Fiyat: 2.000 💵
⛏️ **Taş kazma satın al, demir ile para kazan** \n **-->** Fiyat: 500 💵

Orman
🪓 **Elmas balta satın al, ladin, huş, meşe ve koyu meşe den para kazan** \n **-->** Fiyat: 2.000 💵
🪓 **Demir balta satın al, ladin, huş ve meşe den para kazan** \n **-->** Fiyat: 1.500 💵
🪓 **Taş balta satın al, huş ve meşe den para kazan** \n **-->** Fiyat: 500 💵

** Nefes Roleplay **
👑 **Nefes Roleplay'e hoş geldiniz.**
`) 
.setFooter("Market", client.user.avatarURL())
.setTimestamp()
message.channel.send(market)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['shop'],
    permLevel: 0,
    katagori: "Ekonomi"
}

exports.help = {
    name: 'market',
    description: 'Günlük para alırsınız.',
    usage: 'param'
}