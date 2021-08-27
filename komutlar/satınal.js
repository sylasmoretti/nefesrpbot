const Discord = require('discord.js');
const client = new Discord.Client();
var ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix
const ms = require('parse-ms')
const db = require('quick.db')

exports.run = async (client, message, args) => {
    let member = message.author;
  let kllanç = message.mentions.users.first() || message.author;
  
  const soygunlog = db.get(`soygunlog_${kllanç.id}`)
  const bakiye = await db.fetch(`bakiye_${kllanç.id}`);
  const silah = db.get(`silah_${kllanç.id}`)
  const olta = db.get(`silah_${kllanç.id}`)
  const telefon = db.get(`silah_${kllanç.id}`)
  const balta = db.get(`balta_${kllanç.id}`)
  const btc = db.get(`btc_${kllanç.id}`)

    const elmaskılıç = db.get(`elmaskılıç_${message.author.id}`)
  const demirkılıç = db.get(`demirkılıç_${message.author.id}`)
  const taşkılıç = db.get(`taşkılıç_${message.author.id}`)
  
  const elmasbalta = db.get(`elmasbalta_${message.author.id}`)
const demirbalta = db.get(`demirbalta_${message.author.id}`)
const taşbalta = db.get(`taşbalta_${message.author.id}`)

var demirkazma = db.get(`demirkazma_${message.guild.id}`)
var elmaskazma = db.get(`elmaskazma_${message.guild.id}`)
var taşkazma = db.get(`taşkazma_${message.guild.id}`)
  if(!args[0]) return message.channel.send(
new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("Black Roleplay", client.user.avatarURL())
.setDescription(`
Satın almak istediğiniz eşyanın id sini giriniz. **Örnek**
**!satın-al telefon/olta/bitcoin/altın/silah/** `)
.setFooter("Black Roleplay", client.user.avatarURL())
.setTimestamp()
)
  
  if(args[0] === "telefon") {
    let fiyatcık3 = 1000 // istediğiniz fiyat
    
    if (bakiye < fiyatcık3) return message.reply('Yeterli Paran Yok!')
      db.set(`telefon_${kllanç.id}`, "Var")
  db.add(`bakiye_${kllanç.id}`, -fiyatcık3)
    
    return message.reply(`Ürünü başarıyla aldınız`)
}
  if(args[0] === "olta") {
    let fiyatcık4 = 250 // istediğiniz fiyat
    
    if (bakiye < fiyatcık4) return message.reply('Yeterli Paran Yok!')
      db.set(`olta_${kllanç.id}`, "Var")
  db.add(`bakiye_${kllanç.id}`, -fiyatcık4)
    
    return message.reply(`Ürünü başarıyla aldınız`)
}
  if(args[0] === "bitcoin") {
    let fiyatcık5 = 7000 // istediğiniz fiyat
    
    if (bakiye < fiyatcık5) return message.reply('Yeterli Paran Yok!')
      db.set(`btc_${kllanç.id}`, "Var")
  db.add(`bakiye_${kllanç.id}`, -fiyatcık5)
    
    return message.reply(`Ürünü başarıyla aldınız`)
}
    if(args[0] === "elmas-kazma") {
    let fiyatcık5 = 12500 // istediğiniz fiyat
    
    if (bakiye < fiyatcık5) return message.reply('Yeterli Paran Yok!')
      db.set(`elmaskazma_${kllanç.id}`, "Var")
  db.add(`bakiye_${kllanç.id}`, -fiyatcık5)
    
    return message.reply(`Ürünü başarıyla aldınız`)
}
    if(args[0] === "demir-kazma") {
    let fiyatcık5 = 7500 // istediğiniz fiyat
    
    if (bakiye < fiyatcık5) return message.reply('Yeterli Paran Yok!')
      db.set(`demirkazma_${kllanç.id}`, "Var", +1)
  db.add(`bakiye_${kllanç.id}`, -fiyatcık5)
    
    return message.reply(`Ürünü başarıyla aldınız`)
}
    if(args[0] === "taş-kazma") {
    let fiyatcık5 = 5000 // istediğiniz fiyat
    
    if (bakiye < fiyatcık5) return message.reply('Yeterli Paran Yok!')
      db.set(`taşkazma_${kllanç.id}`, "Var")
  db.add(`bakiye_${kllanç.id}`, -fiyatcık5)
    
    return message.reply(`Ürünü başarıyla aldınız`)
}
      if(args[0] === "elmas-balta") {
    let fiyatcık5 = 11500 // istediğiniz fiyat
    
    if (bakiye < fiyatcık5) return message.reply('Yeterli Paran Yok!')
      db.set(`elmasbalta_${kllanç.id}`, "Var")
  db.add(`bakiye_${kllanç.id}`, -fiyatcık5)
    
    return message.reply(`Ürünü başarıyla aldınız`)
}
    if(args[0] === "demir-balta") {
    let fiyatcık5 = 9750 // istediğiniz fiyat
    
    if (bakiye < fiyatcık5) return message.reply('Yeterli Paran Yok!')
      db.set(`demirbalta_${kllanç.id}`, "Var")
  db.add(`bakiye_${kllanç.id}`, -fiyatcık5)
    
    return message.reply(`Ürünü başarıyla aldınız`)
}
    if(args[0] === "taş-balta") {
    let fiyatcık5 = 5375 // istediğiniz fiyat
    
    if (bakiye < fiyatcık5) return message.reply('Yeterli Paran Yok!')
      db.set(`taşbalta_${kllanç.id}`, "Var")
  db.add(`bakiye_${kllanç.id}`, -fiyatcık5)
    
    return message.reply(`Ürünü başarıyla aldınız`)
}
        if(args[0] === "elmas-kılıç") {
    let fiyatcık5 = 13450 // istediğiniz fiyat
    
    if (bakiye < fiyatcık5) return message.reply('Yeterli Paran Yok!')
      db.set(`elmaskılıç_${kllanç.id}`, "Var")
  db.add(`bakiye_${kllanç.id}`, -fiyatcık5)
    
    return message.reply(`Ürünü başarıyla aldınız`)
}
    if(args[0] === "demir-kılıç") {
    let fiyatcık5 = 8945 // istediğiniz fiyat
    
    if (bakiye < fiyatcık5) return message.reply('Yeterli Paran Yok!')
      db.set(`demirkılıç_${kllanç.id}`, "Var")
  db.add(`bakiye_${kllanç.id}`, -fiyatcık5)
    
    return message.reply(`Ürünü başarıyla aldınız`)
}
  if(args[0] === "daltın") {
    let fiyatcık5 = 12000 // istediğiniz fiyat
    
    if (bakiye < fiyatcık5) return message.reply('Yeterli Paran Yok!')
      db.set(`daltın_${kllanç.id}`, "Var")
  db.add(`bakiye_${kllanç.id}`, -fiyatcık5)
    
    return message.reply(`Ürünü başarıyla aldınız`)
}
   if(args[0] === "silah") {
    let fiyatcık5 = 9000 // istediğiniz fiyat
    
    if (bakiye < fiyatcık5) return message.reply('Yeterli Paran Yok!')
      db.set(`silah_${kllanç.id}`, "Var")
  db.add(`bakiye_${kllanç.id}`, -fiyatcık5)
    
    return message.reply(`Ürünü başarıyla aldınız`)
}
    if(args[0] === "taş-kılıç") {
    let fiyatcık5 = 5375 // istediğiniz fiyat
    
    if (bakiye < fiyatcık5) return message.reply('Yeterli Paran Yok!')
      db.set(`taşkılıç_${kllanç.id}`, "Var")
  db.add(`bakiye_${kllanç.id}`, -fiyatcık5)
    
    return message.reply(`Ürünü başarıyla aldınız`)
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
    name: 'satın-al',
    description: 'Günlük para alırsınız.',
    usage: 'param'
}