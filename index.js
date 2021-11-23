require("dotenv").config()
const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
    console.log(client.user.tag)
})

client.on("guildMemberAdd", member => {
const wel = member.guild.channels.cache.find(ch => ch.id == "ايدي الروم")//ايدي الروم من ديسكورد
if(wel) return wel.send(`WELCOME ${member} to ${member.guild.name}`).then(wec => {
setTimeout(() => {
wec.delete()
}, الوقت)
})
})


client.login(process.env.token)
