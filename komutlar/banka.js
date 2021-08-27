const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => {
  let banka = db.fetch(`banka_${message.author.id}`)
 let para = db.fetch(`bakiye_${message.author.id}`)
let amaç = db.fetch(`şirketamac_${message.author.id}`)
 let altın = db.fetch(`altın_${message.author.id}`)
 let kredi = db.fetch(`kredi_${message.author.id}`)   
 let deger = db.fetch(`bankabakiye_${message.author.id}`)
let isim = args.slice(1).join(" ");

const embed1 = new Discord.MessageEmbed()
.setAuthor("Black Bank", client.user.avatarURL())
.setDescription(`
**Ne yapmak istediğinizi belirtiniz.**
banka hesap-oluştur -> Banka hesabı oluşturursunuz.
banka para-çek -> Bankadaki paranızdan para çekersiniz.
banka para-yatır -> Bankaya pata yatırırsınız.
banka hesap-bilgi -> Banka hesap bilginize bakarsınız.
`)
.setFooter("Black Bank", message.author.avatarURL())
if(args[0] !== "hesap-oluştur" && args[0] !== "para-çek" && args[0] !== "para-yatır" && args[0] !== "hesap-bilgi") return message.channel.send(embed1)
if(args[0] === "hesap-oluştur") {
if(banka) {

  var embed = new Discord.MessageEmbed()
  .setTitle('**Hata!** :warning:')
  .setDescription(message.member.user.username + ' Adlı kullanıcının zaten bir banka hesabı bulunuyor.')
  .setColor('RED')
.setTimestamp()
  message.channel.send(embed)
  return

}

if(!isim) {
  var embed = new Discord.MessageEmbed()
  .setTitle('**Hata!** :warning:')
  .setDescription(message.member.user.username + ' Kurulacak banka hesabınızın ismini belirtmelisiniz.')
  .setColor('RED')
.setTimestamp()
  message.channel.send(embed)
  return
}

var banka1 = new Discord.MessageEmbed()
.setColor('#050202')
.setTitle('Black Bank')
.setDescription('Banka hesabınızı kurduk!')
.addField('**Banka Hesap İsmi:**', `${isim}`, true)
.addField('**Banka Hesabındaki Para:**', `${deger ? deger: "0"}`, true)
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.setTimestamp()
message.channel.send(banka1)  
db.set(`banka_${message.author.id}`, isim)
  db.set(`bankabakiye_${message.author.id}`, 1000)
}
if(args[0] === "para-yatır") {
let para = args.slice(1).join(" ");  
if(!args[0]) return message.channel.send(
new Discord.MessageEmbed()
.setAuthor("Black Bank", client.user.avatarURL())
.setDescription(`
Ne kadar para yatırmak istediğinizi yazınız
`)
                                        )
db.add(`bankabakiye_${message.author.id}`, +para)  
db.add(`bakiye_${message.author.id}`, -para)
return message.channel.send(`Para yatırımı başarılı! Banka bakiyesi: ${deger}`)
} 
if(args[0] === "para-çek") {
let para = args.slice(1).join(" ");  
if(!args[0]) return message.channel.send(
new Discord.MessageEmbed()
.setAuthor("Black Bank", client.user.avatarURL())
.setDescription(`
Ne kadar para çekmek istediğinizi yazınız
`)
                                        )
db.add(`bankabakiye_${message.author.id}`, -para)
  db.add(`bakiye_${message.author.id}`, +para)
return message.channel.send(`Para çekimi başarılı!`)
}   
if(args[0] === "hesap-bilgi") {
if(!banka) {
var banka1 = new Discord.MessageEmbed()
.setColor('#050202')
.setTitle('Black Banka Ana Merkez')
.addField('Bakiye (Cebindeki para) Miktarı:', '**'+para+'**')
.addField('🌟 Altın Miktarı:', `${altın ? altın: "Yok"}`)
.addField('Kredi Kartı Kredisi:', '**'+kredi+'**')
.addField('Şirket Bilgileri:', 'BLACK ŞİRKETLER GRUBU')
.addField('**Hata :warning:**', message.member.user.username + ' Adlı kullanıcının bir banka hesabı bulunmuyor!')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.setTimestamp()
message.channel.send(banka1)  
return
}




var banka2 = new Discord.MessageEmbed()
.setColor('#050202')
.setTitle('Black Banka Ana Merkez')
.addField('Bakiye (Cebindeki para) Miktarı:', `${para}`)
.addField('Altın Miktarı:', `${altın ? altın: "Yok"}`)
.addField(':credit_card: Kredi Kartı Kredisi:', '**'+kredi+'**')
.addField('Banka Hesap Bilgileri:', '------------------------------')
.addField('Banka Hesap İsmi:', '**'+banka+'**')
.addField('Banka Hesabındaki Para:', '**'+deger+'**')
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