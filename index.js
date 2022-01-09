const {MessageAttachment, MessageEmbed} = require("discord.js")
const Discord = require("discord.js")
const client = new Discord.Client()
const info = require("./info.json")

const burgur = new MessageAttachment("./burgur.png")
const chisp = new MessageAttachment("./chips.png")
const milkshake = new MessageAttachment("./milkshake.png")
const unknown = new MessageAttachment("./unknown.png")
const coffy = new MessageAttachment("./coffy.png")

function sned(msg) {
    client.channels.cache.get('929337416853098526').send(msg)
}

client.on('ready', () => {
    console.log("femboy hooters bot is ready")
    client.user.setActivity("with itself")
    client.channels.cache.get('929321383798910997').send("The bot is up")
})
client.on("message", async message => {
    if (message.channel.id === '929321383798910997' && message.content.startsWith(info.prefix)) {
        if (message.content.includes(".order milkshake")) {
            sned("<@" + message.author.id + "> Here is your milkshake! That will be $" + Math.random() * 73737)
            sned(milkshake)
            message.react('✅')
        }
        if (message.content.includes(".order burgur")) {
            sned("<@" + message.author.id + "> Here is your burgur! That will be $" + Math.random() * 13579)
            sned(burgur)
            message.react('✅')
        }
        if (message.content.includes(".order chisps")) {
            sned("<@" + message.author.id + "> Here are your chisps! That will be $" + Math.random() * 397)
            sned(chisp)
            message.react('✅')
        }
        if (message.content.includes(".order coffy")) {
            sned("<@" + message.author.id + "> Here is your coffy! That will be $" + Math.random() * 773)
            sned(coffy)
            message.react('✅')
        }
        if (message.content.includes(".order [removed for prvacy reasons]")) {
            message.delete()
            sned("<@" + message.author.id + "> Here is your secret item that no one knows how to order! That will be $" + Math.random() * 999999999999999999999)
            sned(unknown)
            message.react('✅')
        }
    }
})

client.login(info.token)
