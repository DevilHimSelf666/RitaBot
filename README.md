

<h1 align="center">Evil Translate</h1>
<p align="center">Based on RITA bot.</p>
</p>

------



<p align="center">An open-source, free Discord Translator Bot built using <strong>google-translate-api</strong> and <strong>Discord.js</strong>.</p>

### this project is based on Rita bot. after Rita Bot went private this repo continue as a opne source project to make it alive. this project will change it name to Evil Translate.

<strong>google-translate-api</strong> and <strong>Discord.js</strong> has been updated to the last version and many changes has been made to make it uptodate and easy to run.
Also now you can run this project on <strong>Docker</strong> :)

## :book: Table of Contents


<summary></strong>contents</strong></summary>

* [Setting up EvilTranlate locally](#new-bot)
* [Run EvilTranlate on docker](#docker)


## <a name="new-bot"></a>:computer: Setting up EvilTranlate
#### 1. Fork this repository.

If you don't yet have a Github account, [create one](https://github.com/join)! It's free and easy.
* Click [here](https://github.com/ZyC0R3/RitaBot/fork) or use the button in the upper righthand side of this page to fork the repository so that it will be associated with your Github account.

#### 1. Clone your foked repository.
Run following command:

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

All done. you can invote your bot and enjoy it.
for More help read [RitaBot Docs](https://docs.ritabot.gg/ritabot-docs/).

## <a name="docker"></a>:floppy_disk: Run EvilTranlate on docker
#### 1. Install Docker.
install docker use [docker documentation](https://docs.docker.com/get-docker/).

run following command
```properties
docker run -e DISCORD_TOKEN=YOUR_BOT_TOKEN  pouyasamie/evil-translate-discord-bot:latest 
```

you are all set :)