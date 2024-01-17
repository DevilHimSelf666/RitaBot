/* eslint-disable func-names */

const {GatewayIntentBits} = require("discord.js");
exports.GetIntents = () =>
{

   const intends = [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildMessageReactions,
      GatewayIntentBits.GuildWebhooks,
      GatewayIntentBits.GuildInvites,
      GatewayIntentBits.DirectMessages,
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMembers
   ];

   return intends;

};
