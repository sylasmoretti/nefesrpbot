const Discord = require('discord.js');
const client = new Discord.Client();
var ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix
const ms = require('ms')
const db = require('quick.db')

exports.run = async (client, message, args) => {
   let ekoban = db.get(`sistemban_${message.author.id}`)
 if(ekoban) return message.channel.send(
 new Discord.MessageEmbed()
   .setAuthor("Sistem Banı!", message.author.avatarURL())
   .setDescription(`
Ekonomi sisteminden \`${ekoban}\` sebebiyle banlanmışsınız!
Eğer itirazının varsa [Destek Sunucusu](https://discord.gg/jmYBYSvV8J)'na katılarak söyleyebilirsin.
   `)
   .setFooter("GVT", client.user.avatarURL())
   .setTimestamp()
 )
    let member = message.author;
  let kllanç = message.mentions.users.first() || message.author;
if(!args[0]) return message.reply(`Bir mesaj içeriği belirtiniz örnek \n  gvt çantam genel/zindan/odun/maden`)
  
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
  const elmaskılıç = db.get(`elmaskılıç_${message.author.id}`)
  const demirkılıç = db.get(`demirkılıç_${message.author.id}`)
  const taşkılıç = db.get(`taşkılıç_${message.author.id}`)
  
const param = new Discord.MessageEmbed()
.setAuthor("Gravity", client.user.avatarURL())
.setDescription(`
<a:786530846512775178:862655288418893855>  Silahlarınız: ${silah ? silah : 'Yok.'}

<a:tac:875852102495260692>  Oltalarınız: ${olta ? olta : 'Yok.'}

<a:872826550045782077:876563316372303912>  Telefonlarınız: ${telefon ? telefon : 'Yok.'}

Bitcoinleriniz: ${btc ? btc : 'Yok.'} \n --> Bitcoin Değeri: ${btcdeger}

<a:740690463052529674:869178996376625182>  Zindan

<a:788743854593277995:862655365409800232>  Elmas Kılıçlarınız: ${elmaskılıç ? elmaskılıç : 'Yok.'}

<a:848346698623090728:862655337953624065>  Demir Kılıçlarınız: ${demirkılıç ? demirkılıç : 'Yok.'}

<a:816412608017596448:869179017209733140>  Taş Kılıçlarınız: ${taşkılıç ? taşkılıç : 'Yok.'}

<a:766107346672812073:874689003213947020>  Orman

<a:816411129760841769:869179020934283274>  Elmas baltalarınız: ${elmasbalta ? elmasbalta : 'Yok.'}

<a:848346698623090728:862655337953624065>  Demir baltalarınız: ${demirbalta ? demirbalta : 'Yok.'}

<a:816412608017596448:869179017209733140>  Taş baltalarınız: ${taşbalta ? taşbalta : 'Yok.'}

<a:740690463559909416:869178996380815400>  Maden

<a:816411129760841769:869179020934283274>  Elmas kazmalarınız: ${elmaskazma ? elmaskazma : 'Yok.'}

<a:848346698623090728:862655337953624065>  Demir kazmalarınız: ${demirkazma ? demirkazma : 'Yok.'}

<a:816412608017596448:869179017209733140>  Taş kazmalarınız: ${taşkazma ? taşkazma : 'Yok.'}
`)
.setFooter("Gravity", client.user.avatarURL())
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
<:diamond:810747033266815036> Elmaslarınız: ${elmas ? elmas : 'Yok.'}

<:gold:810747033228148776> Altınlarınız: ${altın ? altın : 'Yok.'}

<:zumrut:829792473597083648> Zümrütleriniz: ${zümrüt ? zümrüt : 'Yok.'}

<:iron:810747033307709470> Demirleriniz: ${demir ? demir : 'Yok.'}

<:tas:829792928713015387> Taşlarınız: ${taş ? taş : 'Yok.'}
`)
.setFooter("Gravity", client.user.avatarURL())
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
.setFooter("Gravity", client.user.avatarURL())
 .setTimestamp()
message.channel.send(param)
}
if(args[0] === "zindan") {
      const bakiye = await db.fetch(`bakiye_${kllanç.id}`);
  const zombiet = db.get(`zombiet_${message.author.id}`)
  const örümcekgöz = db.get(`örümcekgöz_${message.author.id}`)
  const ok = db.get(`ok_${message.author.id}`)
  const yay = db.get(`yay_${message.author.id}`)
  const ip = db.get(`ip_${message.author.id}`)
  const barut = db.get(`barut_${message.author.id}`)
  const enderman = db.get(`endergöz_${message.author.id}`)
const param = new Discord.MessageEmbed()
.setAuthor("PARAN", client.user.avatarURL())
.setDescription(`
Zombi etleriniz: ${zombiet ? zombiet : 'Yok.'}

Örümcek Gözleriniz: ${örümcekgöz ? örümcekgöz : 'Yok.'}

Oklarınız: ${ok ? ok : 'Yok.'}

Yaylarınız: ${yay ? yay : 'Yok.'}

İpleriniz: ${ip ? ip : 'Yok.'}

Barutlarınız: ${barut ? barut : 'Yok.'}

Enderman gözleriniz: ${enderman ? enderman : 'Yok.'}
`)
.setFooter("Gravity", client.user.avatarURL())
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