const Discord = require('discord.js');
const db = require('quick.db')
const ms = require('parse-ms')
exports.run = (client, message, args) => { 
  
    let bakiye = db.fetch(`bakiye_${message.author.id}`)
let altın = db.fetch(`altın_${message.author.id}`)
let şirket = db.fetch(`şirket_${message.author.id}`)
let kredi = db.fetch(`kredi_${message.author.id}`)  
let amaç = db.fetch(`şirketamac_${message.author.id}`)
let sirketdeğer = db.fetch(`şirketdeger_${message.author.id}`)
let şifre = db.fetch(`sifre_${message.author.id}`)
let süre = db.fetch(`kartsure_${message.author.id}`)
 let timeObj = ms(Date.now() - süre); 
var embed = new Discord.MessageEmbed()
.setColor('GREEN')
.setTitle('Banka Merkez')
.setThumbnail('https://cdn.glitch.com/4c8a4f22-00c9-4c52-8cf1-6c85e13e0fa6%2Fwarning.png?v=1630085460014')
.setDescription('Kart bilgileriniz özelden gönderiliyor!')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.addField('Guard')
.setTimestamp()  
  message.channel.send(embed)
  
  
var kart = new Discord.MessageEmbed()
.setColor('GREEN')
.setTitle('Banka Merkez')
.setThumbnail('https://cdn.glitch.com/4c8a4f22-00c9-4c52-8cf1-6c85e13e0fa6%2Fwarning.png?v=1630085460014')
.setDescription('Merhaba,' + message.member.user.username + ',Kart bilgileriniz aşağıda yer alıyor.Bir sorun ile karşılaşırsanız [Destek Sunucumuz](https://discord.gg/H4t2TmH) dan bizimle iletişime geçebilirsin!')
.addField('Kart Şifresi:', '**'+şifre+'**')
.addField('Kart Sahibi:', '**'+message.member.user.username+'**')   
.addField('Kart Sahibi İD:', '**'+message.author.id+'**')
.addField('Kart Bilgileri: :grey_question:', '-------------------------------')
.addField(':no_entry_sign: Kredi Kartı Şirketi:', '**Black Bank**')
.addField('Kart Bakiye Bilgisi:', '-------------------------------')
.addField('Kart Bakiyesi', '**'+kredi+'**')
.addField('Kart Açılış Süresi:', ` **${timeObj.days}** Gün, **${timeObj.hours}** Saat, **${timeObj.minutes}** Dakika`)
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.addField('Guard')
.setTimestamp()  
message.author.send(kart)

  };
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['kartım'], 
  permLevel: 0 
};

exports.help = {
  name: 'kartım', 
  description: 'kartım', 
  usage: 'kartım'
};