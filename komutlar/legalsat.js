const Discord = require('discord.js');
const client = new Discord.Client();
var ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix
const ms = require('parse-ms')
const db = require('quick.db')

exports.run = async (client, message, args) => {
    let member = message.author;
  let kllanç = message.mentions.users.first() || message.author;
  
  const para = await db.fetch(`bakiye_${kllanç.id}`);
  const altın = db.get(`altın_${kllanç.id}`)
  const elmas = db.get(`elmas_${kllanç.id}`)
  const demir = db.get(`demir_${kllanç.id}`)
  const taş = db.get(`taş_${kllanç.id}`)
  const zümrüt = db.get(`zümrüt_${kllanç.id}`)
  const ladin = db.get(`ladin_${kllanç.id}`)


  if(args[0] !== "altın" && args[0] !== "elmas" && args[0] !== "demir" && args[0] !== "taş" !== "zümrüt" && args[0] !== "ladin" && args[0] !== "koyumeşe" && args[0] !== "meşe" && args[0] !== "huş" && args[0])
 return message.channel.send( 
 new Discord.MessageEmbed()
.setAuthor("Black Roleplay", client.user.avatarURL())
.setDescription(`
Satmak istediğiniz eşyanın id sini giriniz. Örnek \n !lsat maltın/melmas/mdemir/mtaş/mzümrüt/ladin/koyumeşe/meşe/huş
`)
.setFooter("Black Roleplay", message.author.avatarURL())
.setTimestamp()
                                          )
  
   if(args[0] === "altın") {
    let fiyatcık4 = 500 // istediğiniz fiyat
    
      db.delete(`altın_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
  if(args[0] === "elmas") {
    let fiyatcık4 = 600 // istediğiniz fiyat
    
      db.delete(`elmas_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
  if(args[0] === "zümrüt") {
    let fiyatcık4 = 630 // istediğiniz fiyat
    
      db.delete(`zümrüt_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
  if(args[0] === "taş") {
    let fiyatcık4 = 620 // istediğiniz fiyat
    
      db.delete(`taş_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
  if(args[0] === "demir") {
    let fiyatcık4 = 550 // istediğiniz fiyat
    
      db.delete(`demir_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
   if(args[0] === "ladin") {
    let fiyatcık4 = 250 // istediğiniz fiyat
    
      db.delete(`ladinodunu_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
    if(args[0] === "koyumeşe") {
    let fiyatcık4 = 300 // istediğiniz fiyat
    
      db.delete(`koyumeseodunu_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
    if(args[0] === "meşe") {
    let fiyatcık4 = 310 // istediğiniz fiyat
    
      db.delete(`meseodunu_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
     if(args[0] === "huş") {
    let fiyatcık4 = 400 // istediğiniz fiyat
    
      db.delete(`husodunu_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    katagori: "Legal satma"
}

exports.help = {
    name: 'lsat',
    description: 'Günlük para alırsınız.',
    usage: 'param'
}