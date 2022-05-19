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
  const esrar = db.get(`esrar_${kllanç.id}`)
  const kokain = db.get(`kokain_${kllanç.id}`)
  const gram = db.get(`silah_${kllanç.id}`)
  const eroin = db.get(`eroin_${kllanç.id}`)
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
  const bakır = db.get(`bakır_${kllanç.id}`)
  const krom = db.get(`krom_${kllanç.id}`)
  const platinyum = db.get(`platinyum_${kllanç.id}`)
  const taş = db.get(`taş_${kllanç.id}`)
  const meth = db.get(`meth_${kllanç.id}`)
  const viski = db.get(`viski_${kllanç.id}`)
  const votka = db.get(`votka_${kllanç.id}`)
  const şarap = db.get(`şarap_${kllanç.id}`)
  const rakı = db.get(`rakı_${kllanç.id}`)
  const bira = db.get(`bira_${kllanç.id}`)


  if(args[0] !== "daltın" && args[0] !== "eroin" && args[0] !== "krom" && args[0] !== "bakır" && args[0] !== "platinyum" && args[0] !== "kokain" && args[0] !== "esrar" && args[0] !== "bitcoin" && args[0] !== "ladin" && args[0] !== "koyumeşe" && args[0] !== "meşe" && args[0] !== "huş" && args[0] !== "zümrüt" && args[0] !== "elmas" && args[0] !== "altın" && args[0] !== "demir" && args[0] !== "gram" && args[0] !== "taş" && args[0] !== "meth" && args[0] !== "viski" && args[0] !== "votka" && args[0] !== "şarap" && args[0] !== "rakı" && args[0] !== "bira") return message.channel.send(
new Discord.MessageEmbed()
.setAuthor("NEFES ", client.user.avatarURL())
.setDescription(`
Satmak istediğiniz eşyanın id sini giriniz. Örnek \n !sat \n altın/kokain/esrar/bitcoin/ladin/ \n koyumeşe/meşe/huş/zümrüt/elmas \n /altın/demir/taş/eroin/meth
`)
.setFooter("NEFES ", message.author.avatarURL())
.setTimestamp()
                                          )
  if(args[0] === "viski") {
    let fiyatcık = 1 // istediğiniz fiyat
    
if(!viski) return message.reply(`Hiç kaçak viskiniz bulunmamakta!`)
  db.delete(`viski_${kllanç.id}`, "Yok", -1)
  db.add(`bakiye_${kllanç.id}`, +fiyatcık)
  
  return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık}`)
}
if(args[0] === "votka") {
    let fiyatcık = 1 // istediğiniz fiyat
    
if(!votka) return message.reply(`Hiç kaçak votkanız bulunmamakta!`)
  db.delete(`votka_${kllanç.id}`, "Yok", -1)
  db.add(`bakiye_${kllanç.id}`, +fiyatcık)
  
  return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık}`)
}
if(args[0] === "şarap") {
    let fiyatcık = 1 // istediğiniz fiyat
    
if(!şarap) return message.reply(`Hiç kaçak votkanız bulunmamakta!`)
  db.delete(`şarap_${kllanç.id}`, "Yok", -1)
  db.add(`bakiye_${kllanç.id}`, +fiyatcık)
  
  return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık}`)
}
if(args[0] === "rakı") {
    let fiyatcık = 1 // istediğiniz fiyat
    
if(!rakı) return message.reply(`Hiç kaçak rakınız bulunmamakta!`)
  db.delete(`rakı_${kllanç.id}`, "Yok", -1)
  db.add(`bakiye_${kllanç.id}`, +fiyatcık)
  
  return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık}`)
}
if(args[0] === "bira") {
    let fiyatcık = 1 // istediğiniz fiyat
    
if(!bira) return message.reply(`Hiç hiç kaçak biranız bulunmamakta!`)
  db.delete(`bira_${kllanç.id}`, "Yok", -1)
  db.add(`bakiye_${kllanç.id}`, +fiyatcık)
  
  return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık}`)
}
if(args[0] === "altın") {
    let fiyatcık = 80 // istediğiniz fiyat
    
if(!altın) return message.reply(`Hiç altınınız bulunmamakta!`)
  db.delete(`altın_${kllanç.id}`, "Yok", -1)
  db.add(`bakiye_${kllanç.id}`, +fiyatcık)
  
  return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık}`)
}
  if(args[0] === "eroin") {
    let fiyatcık2 = 200 // istediğiniz fiyat
    
if(!eroin) return message.reply(`Hiç eroininiz bulunmamakta!`)
  db.delete(`altın_${kllanç.id}`, "Yok", -1)
      db.delete(`eroin_${kllanç.id}`, "Yok", -1)
  db.add(`bakiye_${kllanç.id}`, +fiyatcık2)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık2}`)
}
    if(args[0] === "meth") {
    let fiyatcık = 120 // istediğiniz fiyat
    
if(!meth) return message.reply(`Hiç methiniz bulunmamakta!`)
  db.delete(`meth_${kllanç.id}`, "Yok", -1)
  db.add(`bakiye_${kllanç.id}`, +fiyatcık)
  
  return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık}`)
}
    if(args[0] === "platinyum") {
    let fiyatcık2 = 300 // istediğiniz fiyat
    
if(!platinyum) return message.reply(`Hiç platinyumunuz bulunmamakta!`)	
      db.delete(`platinyum_${kllanç.id}`, "Yok", -1)
  db.add(`bakiye_${kllanç.id}`, +fiyatcık2)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık2}`)
}
    if(args[0] === "bakır") {
    let fiyatcık2 = 100 // istediğiniz fiyat
    
      db.delete(`bakır_${kllanç.id}`, "Yok", -1)
  db.add(`bakiye_${kllanç.id}`, +fiyatcık2)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık2}`)
}
    if(args[0] === "krom") {
    let fiyatcık2 = 100 // istediğiniz fiyat
    
      db.delete(`krom_${kllanç.id}`, "Yok", -1)
  db.add(`bakiye_${kllanç.id}`, +fiyatcık2)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık2}`)
}
  if(args[0] === "kokain") {
    let fiyatcık3 = 150 // istediğiniz fiyat
    
if(!kokain) return message.reply(`Hiç kokaininiz bulunmamakta!`)
      db.delete(`kokain_${kllanç.id}`, "Yok", -1)
  db.add(`bakiye_${kllanç.id}`, +fiyatcık3)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık3}`)
}
  if(args[0] === "esrar") {
    let fiyatcık4 = 180 // istediğiniz fiyat
    
if(!esrar) return message.reply(`Hiç esrarınız bulunmamakta!`)
      db.delete(`esrar_${kllanç.id}`, "Yok", -1)
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
  if(args[0] === "ladin") {
    let fiyatcık4 = 1 // istediğiniz fiyat
    
if(!ladin) return message.reply(`Hiç ladin odununuz bulunmamakta!`)
      db.delete(`ladinodunu_${kllanç.id}`, "Yok", -1)
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
  if(args[0] === "koyumeşe") {
    let fiyatcık4 = 1 // istediğiniz fiyat
    
if(!koyumeşe) return message.reply(`Hiç koyu meşe odununuz bulunmamakta!`)
      db.delete(`koyumeseodunu_${kllanç.id}`, "Yok", -1)
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
  if(args[0] === "meşe") {
    let fiyatcık4 = 1 // istediğiniz fiyat
    
if(!meşe) return message.reply(`Hiç meşe odununuz bulunmamakta!`)
      db.delete(`meseodunu_${kllanç.id}`, "Yok", -1)
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
  if(args[0] === "huş") {
    let fiyatcık4 = 1 // istediğiniz fiyat
    
if(!huş) return message.reply(`Hiç huş odununuz bulunmamakta!`)
      db.delete(`husodunu_${kllanç.id}`, "Yok", -1)
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
  if(args[0] === "zümrüt") {
    let fiyatcık4 = 150 // istediğiniz fiyat
    
if(!zümrüt) return message.reply(`Hiç zümrütünüz bulunmamakta!`)
      db.delete(`zümrüt_${kllanç.id}`, "Yok", -1)
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
  if(args[0] === "elmas") {
    let fiyatcık4 = 120 // istediğiniz fiyat
    
if(!elmas) return message.reply(`Hiç elmasınız bulunmamakta!`)
      db.delete(`elmas_${kllanç.id}`, "Yok", -1)
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
   if(args[0] === "demir") {
    let fiyatcık4 = 35 // istediğiniz fiyat
    
if(!demir) return message.reply(`Hiç demiriniz bulunmamakta!`)
      db.delete(`demir_${kllanç.id}`, "Yok", -1)
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
  if(args[0] === "taş") {
    let fiyatcık4 = 10 // istediğiniz fiyat
    
if(!taş) return message.reply(`Hiç taşınız bulunmamakta!`)
      db.delete(`taş_${kllanç.id}`, "Yok", -1)
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
  if(args[0] === "bitcoin") {
    let fiyatcık5 = 55000 // istediğiniz fiyat
    
if(!btc) return message.reply(`Hiç bitcoininiz bulunmamakta!`)
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
    description: 'eşya satmaya yarar',
    usage: 'sat'
}