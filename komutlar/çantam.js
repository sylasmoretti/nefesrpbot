const Discord = require('discord.js');
const client = new Discord.Client();
var ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix
const ms = require('parse-ms')
const db = require('quick.db')

exports.run = async (client, message, args) => {
    let member = message.author;
  let kllanç = message.mentions.users.first() || message.author;
if(!args[0]) return message.reply(`Bir mesaj içeriği belirtiniz örnek \n  !çantam genel/odun/maden`)
  
if(args[0] === "genel") {
    let btcdeger = 4532
  
  const bakiye = await db.fetch(`bakiye_${kllanç.id}`);
  const silah = db.get(`silah_${kllanç.id}`)
  const olta = db.get(`silah_${kllanç.id}`)
  const telefon = db.get(`silah_${kllanç.id}`)
  const balta = db.get(`balta_${kllanç.id}`)
  const btc = db.get(`btc_${kllanç.id}`)
  const demirkazma = db.get(`demirkazma_${kllanç.id}`)
  const elmaskazma = db.get(`elmaskazma_${kllanç.id}`)
  const taşkazma = db.get(`taşkazma_${kllanç.id}`)
  const tahtakazma = db.get(`tahtakazma_${kllanç.id}`)
  const elmasbalta = db.get(`elmasbalta_${message.author.id}`)
  const demirbalta = db.get(`demirbalta_${message.author.id}`)
  const taşbalta = db.get(`taşbalta_${message.author.id}`)
  const kelepçe = db.get(`kelepçe_${message.author.id}`)
  const pc = db.get(`pc_${message.author.id}`)
  const turbo = db.get(`turbo_${message.author.id}`)
  const maymuncuk = db.get(`maymuncuk_${message.author.id}`)
  const telsiz = db.get(`telsiz_${message.author.id}`)

const param = new Discord.MessageEmbed()
.setAuthor("PARAN", client.user.avatarURL())
.setDescription(`
🔫 Silahlarınız: ${silah ? silah : 'Yok.'}

🎣 Oltalarınız: ${olta ? olta : 'Yok.'}

📱 Kelepçeleriniz: ${kelepçe ? kelepçe : 'Yok.'}

📱 Pc: ${pc ? pc : 'Yok.'}

📱 Turbo: ${turbo ? turbo : 'Yok.'}

📱 Maymuncuk: ${maymuncuk ? maymuncuk : 'Yok.'}

📱 Telsiz: ${telsiz ? telsiz : 'Yok.'}

📱 Telefonlarınız: ${telefon ? telefon : 'Yok.'}

Bitcoinleriniz: ${btc ? btc : 'Yok.'} \n --> Bitcoin Değeri: ${btcdeger}

Orman

🪓 Elmas baltalarınız: ${elmasbalta ? elmasbalta : 'Yok.'}

🪓 Demir baltalarınız: ${demirbalta ? demirbalta : 'Yok.'}

🪓 Taş baltalarınız: ${taşbalta ? taşbalta : 'Yok.'}

Maden

Elmas kazmalarınız: ${elmaskazma ? elmaskazma : 'Yok.'}

⛏️ Demir kazmalarınız: ${demirkazma ? demirkazma : 'Yok.'}

⛏️ Taş kazmalarınız: ${taşkazma ? taşkazma : 'Yok.'}
`)
.setFooter("NEFES ", client.user.avatarURL())
 .setTimestamp()
message.channel.send(param)
}
if(args[0] === "maden") {
  const bakiye = await db.fetch(`bakiye_${kllanç.id}`);
  const elmas = db.get(`elmas_${kllanç.id}`)
  const altın = db.get(`altın_${kllanç.id}`)
  const demir = db.get(`demir_${kllanç.id}`)
  const zümrüt = db.get(`zümrüt_${kllanç.id}`)
  const taş = db.get(`taş_${kllanç.id}`)
const param = new Discord.MessageEmbed()
.setAuthor("PARAN", client.user.avatarURL())
.setDescription(`
Elmaslarınız: ${elmas ? elmas : 'Yok.'}

Altınlarınız: ${altın ? altın : 'Yok.'}

Zümrütleriniz: ${zümrüt ? zümrüt : 'Yok.'}

Demirleriniz: ${demir ? demir : 'Yok.'}

Kromlarınız: ${krom ? krom : 'Yok.'}

Taşlarınız: ${taş ? taş : 'Yok.'}
`)
.setFooter("BLACK ROLEPLAY", client.user.avatarURL())
 .setTimestamp()
message.channel.send(param)
}
if(args[0] === "odun") {
    const bakiye = await db.fetch(`bakiye_${kllanç.id}`);
  const meşe = db.get(`meseodunu_${kllanç.id}`)
  const huş = db.get(`husodunu_${kllanç.id}`)
  const koyumeşe = db.get(`koyumeseodunu_${kllanç.id}`)
  const ladin = db.get(`ladinodunu_${kllanç.id}`)
const param = new Discord.MessageEmbed()
.setAuthor("PARAN", client.user.avatarURL())
.setDescription(`
Meşe odunlarınız: ${meşe ? meşe : 'Yok.'}

Huş odunlarınız: ${huş ? huş : 'Yok.'}

Koyu meşe odunlarınız: ${koyumeşe ? koyumeşe : 'Yok.'}

Ladin odunlarınız: ${ladin ? ladin : 'Yok.'}

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
    name: 'çantam',
    description: 'Günlük para alırsınız.',
    usage: 'param'
}