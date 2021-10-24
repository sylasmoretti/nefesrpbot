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
  const balta = db.get(`balta_${kllanç.id}`)
  const btc = db.get(`btc_${kllanç.id}`)
  const daltın = db.get(`daltın_${kllanç.id}`)
  const ladin = db.get(`ladinodunu_${kllanç.id}`)
  const koyumeşe = db.get(`koyumeseodunu_${kllanç.id}`)
  const meşe = db.get(`meseodunu_${kllanç.id}`)
  const huş = db.get(`husodunu_${kllanç.id}`)
  const zümrüt = db.get(`zümrüt_${kllanç.id}`)
  const elmas = db.get(`elmas_${kllanç.id}`)
  const altın = db.get(`altın_${kllanç.id}`)
  const demir = db.get(`demir_${kllanç.id}`)
  const taş = db.get(`taş_${kllanç.id}`)

  if(args[0] !== "daltın" && args[0] !== "balta" && args[0] !== "telefon" && args[0] !== "olta" && args[0] !== "bitcoin" && args[0] !== "ladin" && args[0] !== "koyumeşe" && args[0] !== "meşe" && args[0] !== "huş" && args[0] !== "zümrüt" && args[0] !== "elmas" && args[0] !== "altın" && args[0] !== "demir" && args[0] !== "taş") return message.channel.send(
new Discord.MessageEmbed()
.setAuthor("NEFES ", client.user.avatarURL())
.setDescription(`
Satmak istediğiniz eşyanın id sini giriniz. Örnek \n !sat altın/telefon/olta/bitcoin/ladin/koyumeşe/meşe/huş/zümrüt/elmas/altın/demir/taş
`)
.setFooter("NEFES ", message.author.avatarURL())
.setTimestamp()
                                          )
  
if(args[0] === "daltın") {
    let fiyatcık = 1 // istediğiniz fiyat
    
if(!altın) return message.reply(`Hiç altınınız bulunmamakta!`)
  db.delete(`daltın_${kllanç.id}`, "Yok", -1)
  db.add(`bakiye_${kllanç.id}`, +fiyatcık)
  
  return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık}`)
}
  if(args[0] === "balta") {
    let fiyatcık2 = 10 // istediğiniz fiyat
    
      db.delete(`balta_${kllanç.id}`, "Yok", -1)
  db.add(`bakiye_${kllanç.id}`, +fiyatcık2)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık2}`)
}
  if(args[0] === "telefon") {
    let fiyatcık3 = 10 // istediğiniz fiyat
    
      db.delete(`telefon_${kllanç.id}`, "Yok", -1)
  db.add(`bakiye_${kllanç.id}`, +fiyatcık3)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık3}`)
}
  if(args[0] === "olta") {
    let fiyatcık4 = 1 // istediğiniz fiyat
    
      db.delete(`olta_${kllanç.id}`, "Yok", -1)
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
  if(args[0] === "ladin") {
    let fiyatcık4 = 10 // istediğiniz fiyat
    
      db.delete(`ladinodunu_${kllanç.id}`, "Yok", -1)
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
  if(args[0] === "koyumeşe") {
    let fiyatcık4 = 10 // istediğiniz fiyat
    
      db.delete(`koyumeseodunu_${kllanç.id}`, "Yok", -1)
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
  if(args[0] === "meşe") {
    let fiyatcık4 = 10 // istediğiniz fiyat
    
      db.delete(`meseodunu_${kllanç.id}`, "Yok", -1)
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
  if(args[0] === "huş") {
    let fiyatcık4 = 10 // istediğiniz fiyat
    
      db.delete(`husodunu_${kllanç.id}`, "Yok", -1)
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
  if(args[0] === "zümrüt") {
    let fiyatcık4 = 750 // istediğiniz fiyat
    
      db.delete(`zümrüt_${kllanç.id}`, "Yok", -1)
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
  if(args[0] === "elmas") {
    let fiyatcık4 = 400 // istediğiniz fiyat
    
      db.delete(`elmas_${kllanç.id}`, "Yok", -1)
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
  if(args[0] === "altın") {
    let fiyatcık4 = 350 // istediğiniz fiyat
    
      db.delete(`altın_${kllanç.id}`, "Yok", -1)
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
   if(args[0] === "demir") {
    let fiyatcık4 = 300 // istediğiniz fiyat
    
      db.delete(`demir_${kllanç.id}`, "Yok", -1)
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
  if(args[0] === "taş") {
    let fiyatcık4 = 299 // istediğiniz fiyat
    
      db.delete(`taş_${kllanç.id}`, "Yok", -1)
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
  if(args[0] === "bitcoin") {
    let fiyatcık5 = 100000 // istediğiniz fiyat
    
      db.delete(`btc_${kllanç.id}`, "Yok", -1)
  db.add(`bakiye_${kllanç.id}`, +fiyatcık5)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık5}`)

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
    name: 'sat',
    description: 'Günlük para alırsınız.',
    usage: 'param'
}