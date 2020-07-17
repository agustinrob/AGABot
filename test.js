const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
    console.log("Altoke mi Rey");
    startup();
    greet();
    listen();
});

function startup() {
    const channel = client.channels.cache.find(x => x.name === 'general');
    try {
        channel.send('STARTUP TESTING 123');
    }
    catch (ex) {
        console.log({ "Error": ex.message });
    }
}

function greet() {
    client.on('guildMemberAdd', member => {
        const channel = member.guild.channels.cache.find(x => x.name === 'general');
        if (!channel) return;
        channel.send(`BIENVENIDO NUEVO TESTER CAPO MASTER DIOS DE LA INFORMATICA DENOMINADO ${member}`);
    });
}

function listen() {
    client.on('message', message => {
        switch (message.content) {
            case ("Eu bot tirate un embed"):
                embed_message(message);
                break;
            default:
                break;
        }
    });
}

function embed_message(message) {
    const embed = new Discord.MessageEmbed()
        .setTitle('UN EMBED RE COPADO')
        .setColor("GOLD")
        .setURL("https://discord.gg/FDyhk3")
        .setAuthor("Agustin", "https://i.imgur.com/5CEJE0v.jpeg", "https://discord.gg/FDyhk3")
        .setDescription('este texto va chikito pq es el content y este es el AGA BOT amiwis')
        .setThumbnail('https://i.imgur.com/CuCQmSX.jpg')
        .addFields(
            { name: 'Regular field title', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true }
        )
        .addField('Inline field title', 'Some value here', true)
        .setImage("https://i.imgur.com/6J1JSAv.jpeg")
        .setTimestamp()
        .setFooter('Footer', 'https://i.imgur.com/XAPsXL6.jpg');
    message.channel.send(embed);
}

console.log(config.token);

client.login(config.token);

var prefix = config.prefix;



