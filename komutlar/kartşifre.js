const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
  let bakiye = db.fetch(`bakiye_${message.author.id}`)
let şirket = db.fetch(`şirket_${message.author.id}`)
let kredi = db.fetch(`kredi_${message.author.id}`)  
let amaç = db.fetch(`şirketamac_${message.author.id}`)
let sirketdeğer = db.fetch(`şirketdeger_${message.author.id}`)
let şifre = db.fetch(`sifre_${message.author.id}`)

if(şifre) {
  var embed = new Discord.MessageEmbed()
.setColor('RED')
.setTitle('**Hata! :warning:**')
.setThumbnail('https://cdn.glitch.com/4c8a4f22-00c9-4c52-8cf1-6c85e13e0fa6%2Fwarning.png?v=1630085460014')
.setDescription('Anlaşılan bir şifre zaten eklemişsiniz :) \n **!şifre-al** yazarak şifrenizi tekrar alabilirsiniz.')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.addField('BLACK L.Ş.T.D.i')
.setTimestamp()  
message.channel.send(embed)
  return
}

  
  if(!args[0]) {
      var embed = new Discord.MessageEmbed()
.setColor('RED')
.setTitle('**Hata! :warning:**')
.setThumbnail('https://cdn.glitch.com/4c8a4f22-00c9-4c52-8cf1-6c85e13e0fa6%2Fwarning.png?v=1630085460014')
.setDescription('Lütfen sisteme kayıt olacak olan kart şifrenizi girin; \n **!şifre 1234** gibi.')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.addField('BLACK L.Ş.T.D.i')
.setTimestamp()  
 message.channel.send(embed)
      return  
  }
  
  
  
    var embed3 = new Discord.MessageEmbed()
.setColor('GREEN')
.setTitle('**Başarılı!**')
.setDescription('Şifre Sisteme eklendi! Detaylar Özelden gönderiliyor!')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.addField("Black L.Ş.T.D.İ")
.setTimestamp()  
message.channel.send(embed3)

  
  var sayılar = [
"1237865463",
"0462956745",
"3458092458",
"3459809034",
"2347687097",
"5432467089",
"3456578098"

]
const sayı = sayılar[Math.floor(Math.random() * sayılar.length)];
    var basarılı = new Discord.MessageEmbed()
.setColor('GREEN')
.setTitle('Banka Merkez')
.setThumbnail('https://www.newcap.org/wp-content/uploads/2017/03/success-icon-1024x1024.gif')
.setDescription('Merhaba **'+message.member.user.username+'**, \n Şifre değiştirme talebinizi onayladık.Sisteme şifreniz giriş yaptı! detaylı bilgiler aşağıda;')
.addField(':credit_card: Kart Şifresi:', '**'+args[0]+'**')
.addField(':small_blue_diamond: Kart Sahibi:', '**'+message.member.user.username+'**')   
.addField(':small_blue_diamond:  Kart Sahibi İD:', '**'+message.author.id+'**')
.addField('Kart Bilgileri: :grey_question:', '-------------------------------')
.addField('Kredi Kartı Şirketi:', '**VakıfBANK**')
    .addField(':lock: Kart Basım Numarası:', '**'+sayı+'**')
.addField('Kart Bakiye Bilgisi:', '-------------------------------')
.addField('Kart Bakiyesi', '**'+kredi+'**')
    .setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.addField('BLACK L.Ş.T.D.i')
.setTimestamp()  
message.author.send(basarılı)
db.set(`sifre_${message.author.id}`, args[0])

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['şifre'], 
  permLevel: 0 
};

exports.help = {
  name: 'şifre', 
  description: 'şifre', 
  usage: 'şifre'
};
