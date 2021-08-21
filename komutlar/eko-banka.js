
const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => {
   let ekoban = db.get(`sistemban_${message.author.id}`)
 if(ekoban) return message.channel.send(
 new Discord.MessageEmbed()
   .setAuthor("Sistem Banı!", message.author.avatarURL())
   .setDescription(`
Ekonomi sisteminden \`${ekoban}\` sebebiyle banlanmışsınız!
Eğer itirazının varsa [Destek Sunucusu](https://discord.gg/jmYBYSvV8J)'na katılarak söyleyebilirsin.
   `)
   .setFooter("Gravity", client.user.avatarURL())
   .setTimestamp()
 )
  let banka = db.fetch(`banka_${message.author.id}`)
 let para = db.fetch(`bakiye_${message.author.id}`)
let amaç = db.fetch(`şirketamac_${message.author.id}`)
 let altın = db.fetch(`altın_${message.author.id}`)
 let kredi = db.fetch(`kredi_${message.author.id}`)   
 let deger = db.fetch(`bankabakiye_${message.author.id}`)
 let bakiye = db.fetch(`bakiye_${message.author.id}`)
let isim = args.slice(1).join(" ");

const embed1 = new Discord.MessageEmbed()
.setAuthor("Gravity Bank", client.user.avatarURL())
.setDescription(`
**Ne yapmak istediğinizi belirtiniz.**
gvtbanka hesap-oluştur -> Banka hesabı oluşturursunuz.
gvtbanka para-çek -> Bankadaki paranızdan para çekersiniz.
gvtbanka para-yatır -> Bankaya pata yatırırsınız.
gvtbanka hesap-bilgi -> Banka hesap bilginize bakarsınız.
`)
.setFooter("Gravity Bank", message.author.avatarURL())
if(args[0] !== "hesap-oluştur" && args[0] !== "para-çek" && args[0] !== "para-yatır" && args[0] !== "hesap-bilgi") return message.channel.send(embed1)
if(args[0] === "hesap-oluştur") {
if(banka) {

  var embed = new Discord.MessageEmbed()
  .setTitle('**Hata!** :warning:')
  .setDescription(message.member.user.username + ' Adlı kullanıcının zaten bir bankası bulunuyor.')
  .setColor('RED')
.setTimestamp()
  message.channel.send(embed)
  return

}

if(!isim) {
  var embed = new Discord.MessageEmbed()
  .setTitle('**Hata!** :warning:')
  .setDescription(message.member.user.username + ' Kurulacak bankanızın,İsmini belirtmelisiniz.')
  .setColor('RED')
.setTimestamp()
  message.channel.send(embed)
  return
}

var banka1 = new Discord.MessageEmbed()
.setColor('#FB529C')
.setTitle('Gravity Bank')
.setDescription('Bankanız Kurduk!')
.addField('**Banka İsmi:**', `${isim}`, true)
.addField('**Bankadaki Para:**', `${deger ? deger: "0"}`, true)
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.setTimestamp()
message.channel.send(banka1)  
db.set(`banka_${message.author.id}`, isim)
  db.set(`bankabakiye_${message.author.id}`, 1000)
}
if(args[0] === "para-yatır") {
let para = args.slice(1).join(" ");  
  if(para > bakiye) return message.channel.send(`Kendi parandan daha fazla para yatıramazsın!`)
if(!args[0]) return message.channel.send(
new Discord.MessageEmbed()
.setAuthor("Gravity Bank", client.user.avatarURL())
.setDescription(`
Ne kadar yatırmak istediğinizi yazınız
`)
                                        )
db.add(`bankabakiye_${message.author.id}`, +para)  
db.add(`bakiye_${message.author.id}`, -para)
return message.channel.send(`Para yatırımı başarılı! Banka bakiyesi: ${deger}`)
} 
if(args[0] === "para-çek") {
let bbakiye = db.fetch(`bankabakiye_${message.author.id}`)
let para = args.slice(1).join(" ");  
if(para > bbakiye) return message.channel.send(`Bankandaki bakiyenden daha fazla para çekemezsin!`)
if(!args[0]) return message.channel.send(
new Discord.MessageEmbed()
.setAuthor("Gravity Bank", client.user.avatarURL())
.setDescription(`
Ne kadar çekmek istediğinizi yazınız
`)
                                        )
db.add(`bankabakiye_${message.author.id}`, -para)
  db.add(`bakiye_${message.author.id}`, +para)
return message.channel.send(`Para çekimi başarılı!`)
}   
if(args[0] === "hesap-bilgi") {
if(!banka) {
var banka1 = new Discord.MessageEmbed()
.setColor('#FB529C')
.setTitle('Banka Ana Merkez')
.addField('💶 Bakiye Miktarı:', '**'+para+'**')
.addField('🌟 Altın Miktarı:', `${altın ? altın: "Yok"}`)
.addField('💳 Kredi Kartı Kredisi:', '**'+kredi+'**')
.addField('Şirket Bilgileri:', '------------------------------')
.addField('**Hata :warning:**', message.member.user.username + ' Adlı kullanıcının bir banka hesabı bulunmuyor!')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.setTimestamp()
message.channel.send(banka1)  
return
}




var banka2 = new Discord.MessageEmbed()
.setColor('#FB529C')
.setTitle('Banka Ana Merkez')
.addField(':dollar: Bakiye Miktarı:', `${para}`)
.addField('🌟 Altın Miktarı:', `${altın ? altın: "Yok"}`)
.addField(':credit_card: Kredi Kartı Kredisi:', '**'+kredi+'**')
.addField('Banka Bilgileri:', '------------------------------')
.addField('Banka İsmi:', '**'+banka+'**')
.addField('Bankadaki Para:', '**'+deger+'**')
.addField('Banka Sahibi:', '**'+message.member.user.username+'**')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.setTimestamp()
message.channel.send(banka2)
}





};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'banka', 
  description: 'banka', 
  usage: 'banka' 
};
