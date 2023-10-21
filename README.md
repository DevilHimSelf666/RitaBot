

<h1 align="center">Evil Translate</h1>
<p align="center">Based on RITA bot <b> BUT ALWAYS FREE </b>.</p>
</p>

------



<p align="center">An open-source, free Discord Translator Bot built using <strong>google-translate-api</strong> and <strong>Discord.js</strong>.</p>

### This project is based on Rita bot. After Rita Bot went private this repo continued as an open source project to make it alive. This project will change its name to Evil Translate.

<strong>google-translate-api</strong> and <strong>Discord.js</strong> have been updated to the latest version and many changes have been made to make them up-to-date and easy to run.
Also now you can run this project on <strong>Docker</strong> :)

## :book: Table of Contents


<summary></strong>contents</strong></summary>

* [Run EvilTranlate on docker (Recommended)](#docker)
* [Setting up EvilTranlate locally](#new-bot)



## <a name="docker"></a>:floppy_disk: Run EvilTranlate on docker (Recommended)
#### 1. Install Docker.
- install docker using [docker documentation](https://docs.docker.com/get-docker/).

#### 2. Get Discord Key and clientID.
- Get a Discord token for your bot it is easy as hell. just follow the [Discord documentations](https://discord.com/developers/docs/getting-started#creating-an-app).
  #### JUST MAKE SURE TO CREATE A AND CHECK BOT OPTION

![DiscordBot](https://github.com/pouyaSamie/Evil-Translate-for-Discord-Based-on-Rita/assets/1997461/3747caa9-76f2-4a47-be2d-59c9e74ef483)

run the following command and replace YOUR_BOT_TOKEN with the token you got before.
```properties
docker run -e DISCORD_TOKEN=YOUR_BOT_TOKEN  pouyasamie/evil-translate-discord-bot:latest 
```
#### 3. Invite the bot to your server
Before inviting your Bot be sure to give him Admin permission
you can use this link <strong>(replace APPLICATION_ID with your Application ID from section 2)</strong>:

https://discordapp.com/oauth2/authorize?&client_id=APPLICATION_ID&scope=bot&permissions=8


## <a name="new-bot"></a>:computer: Setting up EvilTranlate
#### 1. Fork this repository.

If you don't yet have a GitHub account, [create one](https://github.com/join)! It's free and easy.
* Click [here](https://github.com/ZyC0R3/RitaBot/fork) or use the button in the upper right-hand side of this page to fork the repository so that it will be associated with your GitHub account.


#### 1. Clone your forked repository.
Run the following command:

```properties
foo@bar:~$ git clone git@github.com:[your-user-name]/RiTA-DiscordBot.git && cd RiTA-DiscordBot
```

rename `.env.sample` to `.env`

Get a Discord token for your bot it is easy as hell. just follow the [Discord documentations](https://discord.com/developers/docs/getting-started#creating-an-app).

in `.env` replace `YOUR_DICORD_TOKEN` with your new Token

run the following command.

```properties
yarn install && yarn start
```

All done. you can invite your bot and enjoy it.
For more help read [RitaBot Docs](https://docs.ritabot.gg/ritabot-docs/).

you are all set :)

