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
  const altın = db.get(`maltın_${kllanç.id}`)
  const elmas = db.get(`melmas_${kllanç.id}`)
  const demir = db.get(`maltın_${kllanç.id}`)
  const taş = db.get(`maltın_${kllanç.id}`)
  const altın = db.get(`maltın_${kllanç.id}`)

  if(args[0] !== "maltın" && args[0] !== "melmas" && args[0] !== "mdemir" && args[0] !== "mtaş" !== "mzümrüt" && args[0] !== "ladin" && args[0] !== "koyu-meşe" && args[0] !== "meşe" && args[0] !== "huş" && args[0]) return message.channel.send(
new Discord.MessageEmbed()
.setAuthor("Black Roleplay", client.user.avatarURL())
.setDescription(`
Satmak istediğiniz eşyanın id sini giriniz. Örnek \n !legalsat maltın/melmas/mdemir/mtaş/mzümrüt/ladin/koyu-meşe/meşe/huş
`)
.setFooter("Black Roleplay", message.author.avatarURL())
.setTimestamp()
                                          )
  
   if(args[0] === "maltın") {
    let fiyatcık4 = 500 // istediğiniz fiyat
    
      db.delete(`maltın_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
  if(args[0] === "melmas") {
    let fiyatcık4 = 600 // istediğiniz fiyat
    
      db.delete(`melmas_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
  if(args[0] === "mzümrüt") {
    let fiyatcık4 = 630 // istediğiniz fiyat
    
      db.delete(`mzümrüt_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
  if(args[0] === "mtaş") {
    let fiyatcık4 = 620 // istediğiniz fiyat
    
      db.delete(`mtaş_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
  if(args[0] === "mdemir") {
    let fiyatcık4 = 550 // istediğiniz fiyat
    
      db.delete(`mdemir_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
   if(args[0] === "ladin") {
    let fiyatcık4 = 250 // istediğiniz fiyat
    
      db.delete(`ladin_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
    if(args[0] === "koyu-meşe") {
    let fiyatcık4 = 300 // istediğiniz fiyat
    
      db.delete(`koyu-meşe_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
    if(args[0] === "meşe") {
    let fiyatcık4 = 310 // istediğiniz fiyat
    
      db.delete(`meşe_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
     if(args[0] === "huş") {
    let fiyatcık4 = 400 // istediğiniz fiyat
    
      db.delete(`huş_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)

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
    name: 'legalsat',
    description: 'Günlük para alırsınız.',
    usage: 'param'
}