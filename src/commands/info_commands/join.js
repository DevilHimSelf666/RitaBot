// -----------------
// Global variables
// -----------------

// Codebeat:disable[LOC,ABC,BLOCK_NESTING,ARITY]
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
/* eslint-disable consistent-return */
const db = require("../../core/db");

// -------------
// Command Code
// -------------

module.exports = async function run (guild, config)
{

   // Try system channel
   let defaultChannel = "";
   Override: if (guild.systemChannel)
   {

      if (guild.systemChannel.permissionsFor(guild.me).has("SEND_MESSAGES"))
      {

         defaultChannel = guild.systemChannel;
         break Override;

      }

   }
   // If not able to use system channel find another
   if (defaultChannel === "")
   {

      defaultChannel = guild.channels.cache.find((channel) => channel.type === "text" && channel.permissionsFor(guild.me).has("SEND_MESSAGES"));

   }

   db.updateServerTable(
      guild.id,
      "servername",
      guild.name,
      function error (err)
      {

         if (err)
         {

            return console.log(`DEBUG: Unable to save guild name to DB on Server Join`);

         }

      }
   );

   const owner = await guild.members.fetch(guild.ownerID);

   if (owner)
   {

      db.updateServerTable(
         guild.id,
         "owner",
         `${owner.user.username}#${owner.user.discriminator}`,
         function error (err)
         {

            if (err)
            {

               return console.log(`DEBUG: Unable to save owner details to DB on Server Join`);

            }

         }
      );

   }


   /*
   // Invite settings
   const invite = await defaultChannel.createInvite({
      "maxAge": 0,
      "reason": "Remote Support",
      "temporary": true,
      "unique": false
   },).
      catch(console.log);

   // Save invite to DB
   db.updateServerTable(
      guild.id,
      "invite",
      invite.url,
      function error (err)
      {

         if (err)
         {

            return console.log(`DEBUG: Unable to save link to DB on Server Join`);

         }

      }
   );
   */

   return defaultChannel.send(`Hello, Devil is here. Now it is time to worship me.`, {"embed": {
      "color": 9514728,
      "description": ".",
      "fields": [
         {
            "name": ":tools: Support ",
            "value": "if you need support ask Devil."
         }
      ],

      "footer": {
         "text": "EvilTranslate is developed by DevilHimSelf"
      },
      "title": ""
   }});

};

module.exports.newBot = function newBot (data)
{

   data.message.channel.send({"embed": {
      "color": 9514728,
      "description": "Let's get started:\nEvilTranslate supports a few different methods of translations.\n**‏‏‎ ‎‎‎‎‎‎**",
      "fields": [
         {
            "name": ":flag_white: Translate by Reacting",
            "value": `React to a message with a flag and it will translate to that language.\n**‏‏‎ ‎‎‎‎‎‎**`
         },
         {
            "name": ":abc: Translate Custom Text",
            "value": `You can also translates a single custom message.
            *!tr this to [lang]:* message here\n**‏‏‎ ‎‎‎‎‎‎**`
         },
         {
            "name": ":hash: Translate Channel (Automatic)",
            "value": `Automatically translates any new messages in channel and forwards them to you.
            Admins/mods can set forwarding to other channels or users in server. 
            Messages in forwarded channels will also be sent back to origin.
            *!tr channel from [lang] to [lang] for [me/@/#]*\n**‏‏‎ ‎‎‎‎‎‎**`
         },
         {
            "name": ":wrench: Customize your Bot, Change your prefix",
            "value": `We know you like to customize thing, so you can change the prefix of your bot.
            *!tr prefix [prefix]*\n**‏‏‎ ‎‎‎‎‎‎**`
         },
         {
            "name": ":grey_question: Help Commands",
            "value": `The following command will help you learn everything you need to know. 
            *!tr help commands*
            *!tr help modules*\n**‏‏‎ ‎‎‎‎‎‎**`
         },
         {
            "name": ":bell: Need Support",
            "value": `Need some extra Support, a little bit stuck. Join our [Support Server](https://discord.gg/hXaedzCQ8d)\n**‏‏‎ ‎‎‎‎‎‎**`
         }
      ],

      "footer": {
         "text": `RITA is developed by the RITA Bot Project`
      },
      "title": "THANK YOU FOR CHOOSING TO USE RITA."
   }});

};
