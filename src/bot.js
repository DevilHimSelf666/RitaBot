/* eslint-disable sort-keys */
// -----------------
// Global variables
// -----------------

const env = `${__dirname.slice(
   0,
   -3
)}.env`;
require("dotenv").config({
   "path": env
});
const discord = require("discord.js");
// const message_intents = require("./intents");
// const client = new discord.Client({
//    "restRequestTimeout": time.mid,
//    "shards": "auto",
//    "messageEditHistoryMaxSize": 0,
//    "messageCacheLifetime": 30,
//    "messageSweepInterval": 90,
//    "messageCacheMaxSize": 0
// });
const myIntents = new discord.IntentsBitField();
myIntents.add(
   discord.IntentsBitField.Flags.GuildMessages,
   discord.IntentsBitField.Flags.Guilds,
   discord.IntentsBitField.Flags.GuildMessageReactions,
   discord.IntentsBitField.Flags.GuildWebhooks,
   discord.IntentsBitField.Flags.GuildInvites,
   discord.IntentsBitField.Flags.DirectMessages,
   discord.IntentsBitField.Flags.Guilds,
   discord.IntentsBitField.Flags.GuildMembers,
   discord.IntentsBitField.Flags.MessageContent
);
const client = new discord.Client({
   "intents": myIntents,
   "shards": "auto",
   "makeCache": discord.Options.cacheWithLimits({
      ...discord.Options.DefaultMakeCacheSettings
   })
});

const auth = require("./core/auth");

/*
const {AutoPoster} = require("topgg-autoposter");

// your discord.js or eris client
const topggLogin = auth.topggToken;
if (!topggLogin)
{

   console.log("no top.gg token present");

}
else
{

   // eslint-disable-next-line new-cap
   const poster = AutoPoster(topggLogin, client);
   // optional
   poster.on("posted", (stats) =>
   // ran when succesfully posted
   {

      console.log(`Posted stats to Top.gg | ${stats.serverCount} servers`);

   });

}

*/

// ---------------
// Event Listener
// ---------------

const events = require("./events");

events.listen(client);
exports.client = client;
// ---------------
// Initialize Bot
// ---------------

// eslint-disable-next-line func-style
function login (token)
{

   client.login(token).catch((err) =>
   {

      console.log(err);
      console.log(`retrying login...`);
      setTimeout(
         login,
         5000
      );

   });

}

login(auth.token);
