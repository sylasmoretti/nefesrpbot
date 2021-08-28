const Discord = require('discord.js');
const ms = require('parse-ms')
const db = require('quick.db')
const ayarlar = require("../ayarlar.json")

exports.run = async(client, message, args) => { 
  let para = await db.fetch(`para_${message.author.id}`)
  let altın = await db.fetch(`altın_${message.author.id}`)
  let şirket = await db.fetch(`şirket_${message.author.id}`)
  let kredi = await db.fetch(`kredi_${message.author.id}`)  
  let amaç = await db.fetch(`şirketamac_${message.author.id}`)
  let sirketdeğer = await db.fetch(`şirketdeger_${message.author.id}`)
  let şifre = await db.fetch(`sifre_${message.author.id}`)
  let süre = await db.fetch(`kartsure_${message.author.id}`)
  let timeObj = ms(Date.now() - süre);  
  var filtre = m => m.author.id === message.author.id

  if(!şirket) {
     var embed = new Discord.MessageEmbed()
  .setTitle('**Hata!** :warning:')
  .setDescription(message.member.user.username + ' Üstünüze kayıtlı bir şirket bulamadık.')
  .setColor('RED')
 .setThumbnail('https://cdn.glitch.com/4c8a4f22-00c9-4c52-8cf1-6c85e13e0fa6%2Fwarning.png?v=1630085460014')
 .setFooter('Bir şirket kurmak için, !şirket yazman yeterli!')
     .addField('Black L.Ş.T.D.İ')
.setTimestamp()
  message.channel.send(embed)
    return
  }
  
  
  
  var menu = new Discord.MessageEmbed()
  .setTitle('Şirket Ayarları')
   .addField('[1] Şirket Ayarları', şirket + ' Ayarları.')
  .addField('[2] Şirket Bilgisi', şirket + ' Bilgisi')
  .addField('[3] Şirket Değeri', şirket + ' Değer Bilgisi')
  .setDescription('Selam ' + message.member.user.username + ', \n Aşağıda bu menü ile Yapabileceklerin yazıyor.')
  .setFooter(client.user.username + ' Bulunduğunuz kanala belirtilen sayıyı girip,işleme devam edebilirsiniz.')
  .addField('Black L.Ş.T.D.İ')
  .setTimestamp();
  
   var embed = new Discord.MessageEmbed()
    .setTitle('Şirket Ayarları')
  .addField('[1] Şirket İsmi Değişme', 'Şu anda kullanılan şirket ismi: **'+şirket+'**')
  .addField('[2] Şirket Kuruluş Amacı değiştirme', 'şu anda kullanılan şirket amacı:**'+amaç+'**')
  .setDescription('Selam ' + message.member.user.username + ', \n Aşağıda bu menü ile Yapabileceklerin yazıyor.')
  .setFooter(client.user.username + ' Bulunduğunuz kanala belirtilen sayıyı girip,işleme devam edebilirsiniz.')
  .addField('Black L.Ş.T.D.İ')
  .setTimestamp();
  message.channel.send(menu)

 var sbilgi = new Discord.MessageEmbed()
 .setTitle('Şirket Bilgisi')
 .setDescription('Selam ' + message.member.user.username + ', \n Aşağıda Şirketi nin bilgileri yazıyor.')
 .addField('Şirket İsmi:', '**'+şirket+'**')
.addField('Şirket Kuruluş Amacı:', '**'+amaç+'**')
.addField('Şirket Para Değeri:', '**'+sirketdeğer+'**')
.addField('Şirket Kurucusu:', '**'+message.member.user.username+'**')
.addField('Şirket Kurucusu İD:', '**'+message.member.id+'**')
 .setColor('BLUE')
 
  var sdeğer = new Discord.MessageEmbed()
 .setTitle('Şirket Bilgisi')
 .setDescription('Selam ' + message.member.user.username + ', \n Aşağıda Şirketi nin bilgileri yazıyor.')
.addField('Şirket Para Değeri:', '**'+sirketdeğer+'**')
.addField('Şirkete Ait İtemler:', 'Devamı yakında!')
 .setColor('BLUE')
 
 
 message.channel.awaitMessages(filtre,{max: 1 ,time: 30000, errors: ["time"]}).then(collected => {
    if(collected.first().content === "3") {
    
    message.channel.send(sdeğer)
      return
    }   
 })
 
 
 message.channel.awaitMessages(filtre,{max: 1 ,time: 30000, errors: ["time"]}).then(collected => {
    if(collected.first().content === "2") {
    
    message.channel.send(sbilgi)
      return
    }   
 })
 
 message.channel.awaitMessages(filtre,{max: 1 ,time: 30000, errors: ["time"]}).then(collected => {
    if(collected.first().content === "1") {
    
    message.channel.send(embed)
    }   

   message.channel.awaitMessages(filtre,{max: 1 ,time: 30000, errors: ["time"]}).then(collected => {
    if(collected.first().content === "1") {
    
    message.channel.send('Lütfen yeni istediğiniz şirket ismini,bulunduğunuz kanala gönderin..!')
    } 

   message.channel.awaitMessages(filtre,{max: 100 ,time: 30000, errors: ["time"]}).then(collected => {
    if(collected.first().content === "3") {
    
    message.channel.send(message.content)
    }    
   })
   
   })
 })
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["s"],
  permLevel: 0
};

exports.help = {
  name: 'şirket-ayarlar',
  description: '',
  usage: 'şirket-ayarlar'
};