const discord = require("discord.js");
exports.GetIntents = function(){

    const _intents = new discord.IntentsBitField();
    _intents.add(discord.IntentsBitField.Flags.MessageContent,discord.IntentsBitField.Flags.GuildMessages,
                 discord.IntentsBitField.Flags.GuildMessageReactions,discord.IntentsBitField.Flags.GuildWebhooks,
                 discord.IntentsBitField.Flags.GuildInvites,discord.IntentsBitField.Flags.DirectMessages,
                 discord.IntentsBitField.Flags.GuildMembers,discord.IntentsBitField.Flags.Guilds);

    return _intents;
}