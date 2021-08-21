const codework = require('discord.js')

exports.run = (client, message,args) => {
 const codework1 = new codework.MessageEmbed()
 .setAuthor("Gravity", client.user.avatarURL)
  .setColor('BLACK')
  .setTitle("**GVT**") //BURAYA BOTUNUZUN ADINI YAZIN 
 .setURL(`https://discord.com/oauth2/authorize?client_id=843176655827894343&scope=bot&permissions=805314622`) //BURAYA BOTUNUZUN DAVET LİNKİNİ KOYUN
  .setDescription(`                 
 **gvt yardım**, ile yardım alabilirsiniz.
Örnek komut kullanımı: \`gvtçantam\`
Botu davet etmek için: \`gvtdavet\`
`)
                  
  .addField("<a:848346723021619220:862655374369095700>  Para komutları", `
Kolay para kazanma komutları;
\`çalış\` \`çal\` \`market\` \`satın-al\` \`sat\` \`bitcoin\` \`soygun\` \`blackmarket\`
`)

   .addField("<a:786530846512775178:862655288418893855>  Başlangıç", `
Bot komutları;
\`çantam\` \`param\` \`cüzdan\` \`transfer\` \`hesap-oluştur\` \`bilgiler\` \`banka\` \`sıralama\`
`)
 
  .addField("<a:744946483681427456:862655386581860363>  Minecraft komutları", `
Kasarak para kazanma komutları;
\`zindan\` \`maden\` \`orman\` \`zindan-sat\` \`odun-sat\` \`maden-sat\` 
`)
 
    .addField("🎡 Casino komutları", `
Kasino para kazanma komutları;
\`slots\` \`balık-tut\`
`)
 
   .addField("<a:761887948853084160:862655273335652392>  Ayarlar", `
Ayarlama yapmanız gereken komutları;
\`soygun-log\` 
`)
 
   .addField("<a:848346697737830420:869179002588397589>  Bot komutları", `
Bot komutları;
\`davet\` \`istatistik\` \`ping\` \`bildir bug/öneri\`
`)
 
   .addField("<a:788743867562065950:862655420736208916>  Süreli komutlar", `
Süreli para komutları;
\`kredi\` \`günlük-para\`
`) 
 
  .setFooter(`discord.gg/gravity`)
  
 
 message.channel.send(codework1)
  
}
exports.conf = {
  enable: true, 
  guildOnly: false, 
  aliases: ['ym','help'], 
  permLevel: 0 
} 
exports.help = {
  name: "yardım", 
  description: "CodeWork V12 MC-AT yardım ", 
  usage: "yardım" 
}

