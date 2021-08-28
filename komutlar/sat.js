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
  const altın = db.get(`daltın_${kllanç.id}`)
  const ladin = db.get(`ladinodunu_${kllanç.id}`)
  const koyumeşe = db.get(`koyumeseodunu_${kllanç.id}`)
  const meşe = db.get(`meseodunu_${kllanç.id}`)

  if(args[0] !== "daltın" && args[0] !== "balta" && args[0] !== "telefon" && args[0] !== "olta" && args[0] !== "bitcoin" && args[0] !== "ladin" && args[0] !== "koyumese" && args[0] !== "meşe" && args[0] !== "huş") return message.channel.send(
new Discord.MessageEmbed()
.setAuthor("Black Roleplay", client.user.avatarURL())
.setDescription(`
Satmak istediğiniz eşyanın id sini giriniz. Örnek \n !sat altın/telefon/olta/bitcoin/ladin/koyumese/meşe/huş
`)
.setFooter("Black Roleplay", message.author.avatarURL())
.setTimestamp()
                                          )
  
if(args[0] === "daltın") {
    let fiyatcık = 1000 // istediğiniz fiyat
    
if(!altın) return message.reply(`Hiç altınınız bulunmamakta!`)
  db.delete(`daltın_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık)
  
  return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık}`)
}
  if(args[0] === "balta") {
    let fiyatcık2 = 5000 // istediğiniz fiyat
    
      db.delete(`balta_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık2)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık2}`)
}
  if(args[0] === "telefon") {
    let fiyatcık3 = 800 // istediğiniz fiyat
    
      db.delete(`telefon_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık3)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık3}`)
}
  if(args[0] === "olta") {
    let fiyatcık4 = 400 // istediğiniz fiyat
    
      db.delete(`olta_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
  if(args[0] === "ladin") {
    let fiyatcık4 = 400 // istediğiniz fiyat
    
      db.delete(`ladinodunu_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
  if(args[0] === "koyumese") {
    let fiyatcık4 = 400 // istediğiniz fiyat
    
      db.delete(`koyumeseodunu_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
  if(args[0] === "meşe") {
    let fiyatcık4 = 400 // istediğiniz fiyat
    
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
  if(args[0] === "huş") {
    let fiyatcık4 = 400 // istediğiniz fiyat
    
      db.delete(`husodunu_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
  if(args[0] === "bitcoin") {
    let fiyatcık5 = 4000 // istediğiniz fiyat
    
      db.delete(`btc_${kllanç.id}`, "Kapalıdır")
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