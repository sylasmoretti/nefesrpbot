const AsreaperDiscord = require("discord.js");
const AsreaperClient = new AsreaperDiscord.Client();
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = (client, message) => {
  const AsreaperEmbed = new AsreaperDiscord.MessageEmbed()
    .setColor(0x36393f)
    .setAuthor(`Nefes RolePlay V2 | Yardım Menüsü`)
    .setDescription(
      `
 <a:yanok:975791324341088287> !bakiyem : **Paranızı Gösterir** \n <a:yanok:975791324341088287>  !banka : **banka komutlarını gösterir** \n <a:yanok:975791324341088287> !tekme : **birine tekme atarsınız** \n <a:yanok:975791324341088287> !tokat : **birine tokat atarsınız** \n <a:yanok:975791324341088287> !yumruk : **birine yumruk atarsınız** \n <a:yanok:975791324341088287> !ateşet : **birine ateş edersiniz(silahınız varsa)** \n  <a:yanok:975791324341088287> !maden : **maden yaparsınız** \n <a:yanok:975791324341088287> !orman : **Odunculuk Mesleği Komutlarını Gösterir** \n <a:yanok:975791324341088287> !balıktut : **balık tutarsınız** \n <a:yanok:975791324341088287> !market : **marketi görmenizi sağlar** \n <a:yanok:975791324341088287> !soygun : **soygun yaparsınız ama peşinize polis takılır** \n <a:yanok:975791324341088287> !uyuşturucu : **uyuşturucu komutlarını gösterir(sadece illegal mekanları bulduktan sonra kullanabilirsiniz aksi takdirde fail-rp sayılır)** \n <a:yanok:975791324341088287> !zar : **1-15 arası zar atarsınız** \n <a:yanok:975791324341088287> !uyuşturucum : **envanterinizde ki uyuşturucuları gösterir** \n <a:yanok:975791324341088287> !çantam : **çantanızdaki ürünleri gösterir** \n <a:yanok:975791324341088287> !sapla : **Birine Yakın Dövüş Silahı Saplamaya Yarar(Yakın Dövüş Silahı Almalısınız Yoksa fail-rp sayılır** \n <a:yanok:975791324341088287> !kaçakçılık : **Kaçakçılık Yaparsınız(Sadece Şehir Limanlarında)**
`
    )
	.setTitle('Nefes RolePlay V2 Çok Yakında!')
	.setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL())
  message.channel.send(AsreaperEmbed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0,
};

exports.help = {
  name: "yardım",
  description: "Bot ile ilgili bilgi verir.",
  usage: ".yardım",
};