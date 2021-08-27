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
  const maltın = db.get(`maltın_${kllanç.id}`)
  const silah = db.get(`silah_${kllanç.id}`)
  const olta = db.get(`silah_${kllanç.id}`)
  const telefon = db.get(`silah_${kllanç.id}`)
  const balta = db.get(`balta_${kllanç.id}`)
  const btc = db.get(`btc_${kllanç.id}`)
  const altın = db.get(`altın_${kllanç.id}`)
  const melmas = db.get(`melmas_${kllanç.id}`)
  const mdemir = db.get(`mdemir_${kllanç.id}`)
  const mtaş = db.get(`mtaş_${kllanç.id}`)
  const mzümrüt = db.get(`mzümrüt_${kllanç.id}`)
  const ladin = db.get(`ladinodunu_${kllanç.id}`)
  const koyumeşe = db.get(`koyumeseodunu_${kllanç.id}`)
  const meşe = db.get(`meseodunu_${kllanç.id}`)
  const huş = db.get(`husodunu_${kllanç.id}`)

  if(args[0] !== "maltın" && args[0] !== "melmas" && args[0] !== "mdemir" && args[0] !== "mtaş" !== "mzümrüt" && args[0] !== "ladin" && args[0] !== "koyumeşe" && args[0] !== "meşe" && args[0] !== "huş" && args[0])
return message.channel.send(new Discord.MessageEmbed()
.setAuthor("Black Roleplay", client.user.avatarURL())
.setDescription(`
Satmak istediğiniz eşyanın id sini giriniz. Örnek \n !lsat maltın/melmas/mdemir/mtaş/mzümrüt/ladin/koyumeşe/meşe/huş
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
    katagori: "Ekonomi"
}

exports.help = {
    name: '!sat',
    description: 'Günlük para alırsınız.',
    usage: 'param'
}