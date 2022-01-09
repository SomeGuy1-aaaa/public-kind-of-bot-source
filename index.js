// this has been changed to hide the secret commands
const {MessageAttachment} = require("discord.js")
const Discord = require("discord.js")
const client = new Discord.Client()
const info = require("./info.json")

const burgur = new MessageAttachment("./burgur.png")
const chisp = new MessageAttachment("./chips.png")
const milkshake = new MessageAttachment("./milkshake.png")
const unknown = new MessageAttachment("./unknown.png")
const coffy = new MessageAttachment("./coffy.png")

const helpMenu = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Femboy Hooters Bot Help Menu.')
	.setFooter('bot developed by <@525778827306336299>', 'https://cdn.discordapp.com/avatars/525778827306336299/3c5aca38b6fab13feead3206b2e113a1.webp?size=48')


function send(msg) {
    client.channels.cache.get('929337416853098526').send(msg)
}

client.on('ready', () => {
    console.log("femboy hooters bot is ready")
    client.user.setActivity("with itself")
})
client.on("message", async message => {
    function incldes(ordr) {
        message.includes("order" + ordr)
    }

    if (message.channel.id === '929321383798910997' && message.content.startsWith(info.prefix)) {
        if (message.content.includes(".order milkshake")) {
            send("<@" + message.author.id + "> Here is your milkshake! That will be $" + Math.random() * 73737)
            send(milkshake)
            message.react('✅')
        }
        if (message.content.includes(".order burgur")) {
            send("<@" + message.author.id + "> Here is your burgur! That will be $" + Math.random() * 13579)
            send(burgur)
            message.react('✅')
        }
        if (message.content.includes(".order chisps")) {
            send("<@" + message.author.id + "> Here are your chisps! That will be $" + Math.random() * 397)
            send(chisp)
            message.react('✅')
        }
        if (message.content.includes(".order coffy")) {
            send("<@" + message.author.id + "> Here is your coffy! That will be $" + Math.random() * 773)
            send(coffy)
            message.react('✅')
        }
        if (message.content.includes(".order [removed for privacy reasons]")) {
            message.delete()
            send("<@" + message.author.id + "> Here is your secret item that no one knows how to order! That will be $" + Math.random() * 999999999999999999999)
            send(unknown)
            message.react('✅')
        }
    }
})

client.login(info.token)
