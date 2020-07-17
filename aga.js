const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log("Estoy listo!");
});
var prefix = config.prefix;

client.on("message", (message) => {
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
    if (message.content.startsWith(prefix + "hola")) {
      message.channel.send("Hola que tal?");
    }
  client.on("ready", () => {
    const channel = client.channels.get("mychannelid");
    if (!channel) return console.error("The channel does not exist!");
    channel.join().then(connection => {
      // Yay, it worked!
      console.log("Successfully connected.");
    }).catch(e => {
      // Oh no, it errored! Let's log it to console :)
      console.error(e);
    });
  });
});
client.login(config.token);
